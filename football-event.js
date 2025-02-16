document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("football-registration-form");
    const participantList = document.getElementById("participant-list");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
  
      const participant = document.createElement("li");
      participant.textContent = `${name} - ${email} - ${phone}`;
      participantList.appendChild(participant);
  
      form.reset();
      alert("Thank you for registering!");
    });
  });
  