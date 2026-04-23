document.addEventListener("DOMContentLoaded", () => {
  const phrases = ["Senior .NET Engineer", "Cloud-native platform builder", "API-first integration specialist"];
  const titleElement = document.getElementById("title");
  let phraseIndex = 0;
  let characterIndex = 0;

  const typeNext = () => {
    if (!titleElement) {
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    titleElement.textContent = currentPhrase.slice(0, characterIndex);

    if (characterIndex < currentPhrase.length) {
      characterIndex += 1;
      setTimeout(typeNext, 80);
    } else {
      setTimeout(() => {
        characterIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeNext();
      }, 1800);
    }
  };

  if (titleElement) {
    typeNext();
  }

  document.querySelectorAll("a.page-scroll").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  document.querySelectorAll(".navbar-collapse ul li a").forEach((link) => {
    link.addEventListener("click", () => {
      const toggleButton = document.querySelector(".navbar-toggle");
      if (toggleButton && getComputedStyle(toggleButton).display !== "none") {
        toggleButton.click();
      }
    });
  });

  document.querySelectorAll("a").forEach((anchor) => {
    anchor.addEventListener("mouseup", () => anchor.blur());
  });

  // Timeline expand/collapse functionality
  window.toggleEvent = function (headerElement) {
    const eventElement = headerElement.closest(".event");
    eventElement.classList.toggle("expanded");
  };
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar-fixed-top");
  if (!navbar) {
    return;
  }

  if (window.scrollY > 50) {
    navbar.classList.add("top-nav-collapse");
  } else {
    navbar.classList.remove("top-nav-collapse");
  }
});
