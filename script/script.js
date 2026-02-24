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

// 8 jobs part
const ofWrapper = document.getElementById("of-wrapper");
const currentCountSpan = document.getElementById("current-count");

// empty message for interview and rejected tab
const emptyMessage = document.getElementById("empty-message");

// status update
function updateStatus(id, newStatus, statusText) {
  const job = jobs.find((j) => j.id === id);
  if (!job) return;

  job.status = newStatus;
  statusText.innerText = newStatus === "interview" ? "Interview" : "Rejected";

  updateDashboard();
  renderCards(currentTab);
}

// card show/hide
function renderCards(tab) {
  currentTab = tab;
  let visibleCount = 0;

  if (jobs.length === 0) {
    emptyMessage.classList.remove("hidden");
    emptyMessage.classList.add("flex");
    ofWrapper.classList.add("hidden");
    return;
  }

  document.querySelectorAll(".job-card").forEach((card) => {
    const id = Number(card.dataset.id);
    const job = jobs.find((j) => j.id === id);

    if (!job) {
      card.style.display = "none";
      return;
    }

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
  });

  // show/hide empty message for interview and rejected tab
  if (tab === "interview" || tab === "rejected") {
    if (visibleCount === 0) {
      emptyMessage.classList.remove("hidden");
      emptyMessage.classList.add("flex");
    } else {
      emptyMessage.classList.add("hidden");
    }
  }

  // available job count for interview and rejected tab
  if (tab === "interview" || tab === "rejected") {
    ofWrapper.classList.remove("hidden");
    currentCountSpan.innerText = visibleCount;
  } else {
    ofWrapper.classList.add("hidden");
  }
}

function updateDashboard() {
  const total = jobs.length;
  const interview = jobs.filter((j) => j.status === "interview").length;
  const rejected = jobs.filter((j) => j.status === "rejected").length;

  document.getElementById("total-count").innerText = total;
  document.getElementById("interview-count").innerText = interview;
  document.getElementById("rejected-count").innerText = rejected;
  document.getElementById("available-job-count").innerText = total;
}

// button toggle style
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

// loop all cards
document.querySelectorAll(".job-card").forEach((card) => {
  const id = Number(card.dataset.id); // get id from card

  const interviewBtn = card.querySelector(".card-interview-btn");
  const rejectedBtn = card.querySelector(".card-rejected-btn");
  const statusText = card.querySelector(".status-text");

  // // two buttons of card
  // // click on interviewBtn in card
  // interviewBtn.addEventListener("click", function () {
  //   const job = jobs.find((j) => j.id === id);
  //   job.status = "interview";
  //   statusText.innerText = "Interview";
  //   // console.log(job);
  //   renderCards(currentTab);
  //   updateDashboard();
  // });

  // // click on rejectedBtn in card
  // rejectedBtn.addEventListener("click", function () {
  //   const job = jobs.find((j) => j.id === id);
  //   job.status = "rejected";
  //   statusText.innerText = "Rejected";
  //   // console.log(job);
  //   renderCards(currentTab);
  //   updateDashboard();
  // });

  // two buttons of card
  // click on interviewBtn in card
  interviewBtn.addEventListener("click", function () {
    updateStatus(id, "interview", statusText);
  });

  // click on rejectedBtn in card
  rejectedBtn.addEventListener("click", function () {
    updateStatus(id, "rejected", statusText);
  });
});

// click on dashboard buttons
// all
document.getElementById("all-btn").addEventListener("click", function () {
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

// dashboard counters update
const total = jobs.length;
document.getElementById("total-count").innerText = total;
document.getElementById("available-job-count").innerText = total;

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
    renderCards(currentTab);
  });
});
