const form = document.getElementById("calculatorForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const pages = Number(document.getElementById("pages").value);
  const apis = Number(document.getElementById("apis").value);
  const deadline = Number(document.getElementById("deadline").value);

  const adminPanel = document.getElementById("adminPanel").checked;
  const userLogin = document.getElementById("userLogin").checked;
  const payment = document.getElementById("payment").checked;
  const reports = document.getElementById("reports").checked;
  const multilanguage = document.getElementById("multilanguage").checked;
  const liveStreaming = document.getElementById("liveStreaming").checked;

  let score = 0;

  score += pages * 2;
  score += apis * 5;
  score += deadline * 8;

  if (adminPanel) score += 12;
  if (userLogin) score += 10;
  if (payment) score += 18;
  if (reports) score += 14;
  if (multilanguage) score += 9;
  if (liveStreaming) score += 22;

  const coffee = Math.max(3, Math.round(score * 1.7));

  const result = getResult(score, coffee);

  document.getElementById("resultTitle").textContent = result.title;
  document.getElementById("resultMessage").textContent = result.message;
  document.getElementById("scoreValue").textContent = score;
  document.getElementById("coffeeValue").textContent = `${coffee} cups`;
  document.getElementById("moodValue").textContent = result.mood;
  document.getElementById("businessNote").textContent = result.note;

  const resultCard = document.getElementById("result");
  resultCard.classList.remove("hidden");
  resultCard.scrollIntoView({ behavior: "smooth", block: "start" });
});

function getResult(score, coffee) {
  if (score < 35) {
    return {
      title: "🟢 Low Complexity",
      message:
        "This project looks friendly. The developer is calm, the client is optimistic, and the coffee machine is not scared yet.",
      mood: "Relaxed",
      note:
        "Business note: This may actually be a small project. Still, writing the scope down is cheaper than guessing later."
    };
  }

  if (score < 70) {
    return {
      title: "🟡 Medium Complexity",
      message:
        "This is no longer 'just a simple thing'. It needs planning, priorities, testing and a reasonable amount of coffee.",
      mood: "Focused",
      note:
        "Business note: A clear feature list, timeline and acceptance criteria will keep everyone smiling."
    };
  }

  if (score < 110) {
    return {
      title: "🟠 High Complexity",
      message:
        "This project has entered serious territory. The phrase 'can we also add...' should now be used carefully.",
      mood: "Suspicious but professional",
      note:
        `Business note: Estimated coffee level is ${coffee} cups. Please prepare a proper roadmap before touching the keyboard.`
    };
  }

  return {
    title: "🔴 Critical Complexity",
    message:
      "This is not a project anymore. This is a digital expedition. Bring architecture, documentation, testing and premium coffee.",
    mood: "Architect mode activated",
    note:
      `Business note: Estimated coffee level is ${coffee} cups. This needs phases, budget control and probably a meeting called 'alignment'.`
  };
}
