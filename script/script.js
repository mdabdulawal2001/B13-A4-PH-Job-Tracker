// cards array of object
let jobs = [
  { id: 1, status: "all" },
  { id: 2, status: "all" },
  { id: 3, status: "all" },
  { id: 4, status: "all" },
  { id: 5, status: "all" },
  { id: 6, status: "all" },
  { id: 7, status: "all" },
  { id: 8, status: "all" },
];

let currentTab = "all";
// right of 8 jobs part
const ofWrapper = document.getElementById("of-wrapper");
const currentCountSpan = document.getElementById("current-count");

// empty message for interview and rejected tab
const emptyMessage = document.getElementById("empty-message");

// loop all cards
document.querySelectorAll(".job-card").forEach((card) => {
  const id = Number(card.dataset.id); // get id from card

  const interviewBtn = card.querySelector(".card-interview-btn");
  const rejectedBtn = card.querySelector(".card-rejected-btn");
  const statusText = card.querySelector(".status-text");

  // two buttons of card
  // click on interviewBtn in card
  interviewBtn.addEventListener("click", function () {
    const job = jobs.find((j) => j.id === id);
    job.status = "interview";
    statusText.innerText = "Interview";
    // console.log(job);
    renderCards(currentTab);
    updateDashboard();
  });

  // click on rejectedBtn in card
  rejectedBtn.addEventListener("click", function () {
    const job = jobs.find((j) => j.id === id);
    job.status = "rejected";
    statusText.innerText = "Rejected";
    // console.log(job);
    renderCards(currentTab);
    updateDashboard();
  });
});

// click on dashboard buttons
// all
document.getElementById("all-btn").addEventListener("click", 
  function () {
  currentTab = "all";
  renderCards(currentTab);
  toggleStyle("all-btn");
});

// interview
document.getElementById("interview-btn").addEventListener("click", function () {
  currentTab = "interview";
  renderCards(currentTab);
  toggleStyle("interview-btn");
});

// rejected
document.getElementById("rejected-btn").addEventListener("click", function () {
  currentTab = "rejected";
  renderCards(currentTab);
  toggleStyle("rejected-btn");
});

// card show/hide
function renderCards(tab) {
  currentTab = tab;
  let visibleCount = 0;

  document.querySelectorAll(".job-card").forEach((card) => {
    const id = Number(card.dataset.id);
    const job = jobs.find((j) => j.id === id);

    if (tab === "all") {
      card.style.display = "block";
      emptyMessage.classList.add("hidden");
      return;
    }

    if (job.status === tab) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }

    // show/hide empty message for interview and rejected tab
    if (tab === "interview" || tab === "rejected") {
      if (visibleCount === 0) {
        emptyMessage.classList.remove("hidden");
        emptyMessage.classList.add("flex");
      } else {
        emptyMessage.classList.add("hidden");
      }
    }
  });

  // available job count for interview and rejected tab
  if (tab === "interview" || tab === "rejected") {
    ofWrapper.classList.remove("hidden");
    currentCountSpan.innerText = visibleCount;
    totalCountText.innerText = jobs.length;
  } else {
    ofWrapper.classList.add("hidden");
  }
}

// dashboard counters update
const total = jobs.length;
document.getElementById("total-count").innerText = total;
document.getElementById("available-job-count").innerText = total;
function updateDashboard() {
  const total = jobs.length;
  const interview = jobs.filter((j) => j.status === "interview").length;
  const rejected = jobs.filter((j) => j.status === "rejected").length;

  document.getElementById("total-count").innerText = total;
  document.getElementById("interview-count").innerText = interview;
  document.getElementById("rejected-count").innerText = rejected;
  document.getElementById("available-job-count").innerText = total;
}

// button style toggle
function toggleStyle(activeId) {
  const buttons = ["all-btn", "interview-btn", "rejected-btn"];
  buttons.forEach((id) => {
    const btn = document.getElementById(id);
    if (id === activeId) {
      btn.classList.add("bg-blue-500", "text-white");
      btn.classList.remove("bg-white", "text-black");
    } else {
      btn.classList.remove("bg-blue-500", "text-white");
      btn.classList.add("bg-white", "text-black");
    }
  });
}

// delete card
document.querySelectorAll(".job-card").forEach((card) => {
  const id = Number(card.dataset.id);
  const deleteBtn = card.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", function () {
    // remove from jobs
    jobs = jobs.filter((j) => j.id !== id);

    // remove from dom
    card.remove();

    updateDashboard();
  });
});
