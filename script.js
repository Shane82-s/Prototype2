function showContactSlide(option) {
  document.getElementById("ai").classList.add("hidden");
  document.getElementById("human").classList.add("hidden");
  document.getElementById(option).classList.remove("hidden");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! A doctor will contact you soon.");
  this.reset();
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatlog = document.getElementById("chatlog");
  if (input.value.trim() !== "") {
    const userMsg = document.createElement("p");
    userMsg.innerHTML = `<strong>You:</strong> ${input.value}`;
    chatlog.appendChild(userMsg);

    const aiMsg = document.createElement("p");
    aiMsg.innerHTML = `<strong>AI Doctor:</strong> I understand how you feel. Tell me more.`;
    chatlog.appendChild(aiMsg);

    chatlog.scrollTop = chatlog.scrollHeight;
    input.value = "";
  }
}

// Mood Tracker
function setMood(mood) {
  const moodMessage = document.getElementById("moodMessage");
  moodMessage.textContent = `You are feeling: ${mood}. Thank you for sharing!`;
}
