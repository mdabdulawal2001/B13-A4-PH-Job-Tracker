let interviewList = [];
let rejectedList = [];

// header cards
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

// toggle buttons
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

// job cards
const jobCardsContainer = document.getElementById("job-cards-container");
const mainContainer = document.querySelector("main");

const filteredSection = document.getElementById("filtered-section");

// update total, interview and rejected count
function calculateCount() {
  totalCount.innerText = jobCardsContainer.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

// toggle buttons
function toggleStyle(id) {
  allBtn.classList.add("text-black", "bg-white");
  interviewBtn.classList.add("text-black", "bg-white");
  rejectedBtn.classList.add("text-black", "bg-white");

  allBtn.classList.remove("text-white", "bg-[#3B82F6]");
  interviewBtn.classList.remove("text-white", "bg-[#3B82F6]");
  rejectedBtn.classList.remove("text-white", "bg-[#3B82F6]");

  const selected = document.getElementById(id);

  selected.classList.remove("text-black", "bg-white");
  selected.classList.add("text-white", "bg-[#3B82F6]");
}

mainContainer.addEventListener("click", function (event) {
  console.log(event.target.classList.contains("card-interview-btn"));

  if (event.target.classList.contains("card-interview-btn")) {
    const parentNode = event.target.parentNode.parentNode.parentNode;
    console.log(parentNode);

    const mobile = parentNode.querySelector(".mobile").innerText;
    const react = parentNode.querySelector(".react").innerText;
    const remote = parentNode.querySelector(".remote").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    const cardInfo = {
      mobile,
      react,
      remote,
      status,
      notes,
    };

    const mobileExist = interviewList.find(
      (item) => item.mobile == cardInfo.mobile
    );
    parentNode.querySelector(".status").innerText = "interview";
    if (!mobileExist) {
      interviewList.push(cardInfo);
    }

    renderInterview();
  }
});

function renderInterview() {
  filteredSection.innerHTML = "";

  for (let item of interviewList) {
    console.log(item);

    let div = document.createElement("div");
    div.className = "mx-auto mb-8 p-4 shadow rounded-2xl bg-white";
    div.innerHTML = ` 
         <div class="p-4 relative">
            <div class="flex justify-between items-start">
              <div>
                <h2 class="mobile text-[#1a365d] text-xl font-bold">
                  Mobile First Corp
                </h2>
                <p class="react text-slate-500 text-lg">React Native Developer</p>
              </div>

              <button
                class="text-slate-300 border border-slate-200 rounded-full p-1.5 hover:bg-gray-50 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>

            <div class="remote mt-4 flex items-center gap-2 text-slate-500 text-sm">
              <span>Remote</span>
              <span>•</span>
              <span>Full-time</span>
              <span>•</span>
              <span>$130,000 - $175,000</span>
            </div>

            <!-- status -->
            <div class="mt-4">
              <span
                class="status bg-[#f0f7ff] text-[#1e40af] text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider"
              >
                Not Applied
              </span>
            </div>

            <p class="notes mt-4 text-slate-600 text-sm leading-relaxed">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>
            <!-- two buttons -->
            <div class="mt-6 flex gap-3">
              <!-- interview button -->
              <button
                class="card-interview-btn border border-emerald-400 text-emerald-500 px-4 py-2 rounded-md text-sm font-semibold uppercase hover:bg-emerald-400 transition-colors"
              >
                Interview
              </button>
              <!-- rejected button -->
              <button
                class="border border-red-400 text-red-500 px-4 py-2 rounded-md text-sm font-semibold uppercase hover:bg-red-400 transition-colors"
              >
                Rejected
              </button>
            </div>
          </div>
        `;
    filteredSection.appendChild(div);
  }
}
