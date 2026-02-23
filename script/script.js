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

// loop all cards
document.querySelectorAll(".job-card").forEach(card => {
  const id = Number(card.dataset.id); // get id from card

  const interviewBtn = card.querySelector(".card-interview-btn");
  const rejectedBtn = card.querySelector(".card-rejected-btn");
  const statusText = card.querySelector(".status-text");

  // click in interviewBtn
  interviewBtn.addEventListener("click", function () {
    const job = jobs.find(j => j.id === id);
    job.status = "interview";
    statusText.innerText = "Interview";
    // console.log(job);
    
    
  })
  
  
})