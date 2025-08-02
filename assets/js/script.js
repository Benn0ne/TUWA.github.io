const sections = ["section1", "section2", "section3", "section4"];
let currentSection = 0;

const overlay = document.getElementById("overlay");
overlay.addEventListener("click", function (event) {
  if (
    event.target.tagName !== "BUTTON" &&
    currentSection < sections.length - 2
  ) {
    document
      .getElementById(sections[currentSection])
      .classList.remove("active");
    currentSection++;
    document
      .getElementById(sections[currentSection])
      .classList.add("active");
  }
});

function nextSection(sectionIndex) {
  document
    .getElementById(sections[currentSection])
    .classList.remove("active");
  currentSection = sectionIndex;
  document
    .getElementById(sections[currentSection])
    .classList.add("active");
}

function triggerSurprise() {
  const fireworksContainer = document.getElementById("fireworks-container");
  const fireworks = document.getElementById("fireworks");
  const bgAudio = document.getElementById("bg-audio");

  fireworksContainer.style.display = "flex";
  fireworks.play();
  bgAudio.play();

  document.getElementById("section3").classList.remove("active");

  setTimeout(function () {
    fireworks.pause();
    fireworks.currentTime = 0;
    fireworksContainer.style.display = "none";
    currentSection = 3;
    document
      .getElementById(sections[currentSection])
      .classList.add("active");
    document.getElementById("getout-audio").play();
  }, 8000);
}
