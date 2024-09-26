// Opening mobile navbar
const menuToggle = document.getElementById("checkbox");
const navLinks = document.getElementById("mobile-navbar");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
window.addEventListener("scroll", function () {
  var readingProgress = document.querySelector(".reading-progress");
  var progressFill = document.querySelector(".progress-fill");
  var faqContainer = document.querySelector(".faq-container");
  var progressBar = document.querySelector(".progress-bar");

  // Calculate scroll progress
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var windowHeight = window.innerHeight;
  var documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  var progressBarRect = progressBar.getBoundingClientRect();
  var faqContainerTop = faqContainer.getBoundingClientRect().top + scrollTop;
  var faqContainerHeight = faqContainer.offsetHeight;

  // Calculate the scrollable area up to the faqContainer
  var scrollableHeight = faqContainerTop + faqContainerHeight;

  // Calculate scroll progress relative to the faqContainer
  var scrollPercent = Math.min(
    (scrollTop / (scrollableHeight - windowHeight)) * 100,
    100
  );

  // Set progress fill width
  progressFill.style.width = scrollPercent + 10 + "%";

  // Check if the progress bar should become fixed
  // if (progressBarRect.top <= 0) {
  //   readingProgress.classList.add("fixed");
  // } else {
  //   readingProgress.classList.remove("fixed");
  // }
});

document.addEventListener("DOMContentLoaded", function () {
  const riveInstance = new rive.Rive({
    src: "assets/images/Party-popper.riv",
    canvas: document.getElementById("riveCanvas"),
    autoplay: true,
  });
});

// Share Dropdown
document.addEventListener("DOMContentLoaded", function () {
  const shareCont = document.querySelectorAll(".share-container");

  shareCont.forEach((share) => {
    const list = share.querySelector("ul");

    share.addEventListener("click", function (event) {
      event.stopPropagation();
      list.classList.toggle("active");
    });
  });

  document.addEventListener("click", function (event) {
    shareCont.forEach((share) => {
      const list = share.querySelector("ul");

      if (!share.contains(event.target)) {
        list.classList.remove("active");
      }
    });
  });
});

function shareToFacebook() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}

function shareToWhatsApp() {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://wa.me/?text=${url}`, "_blank");
}

function shareToEmail() {
  const subject = encodeURIComponent("Check out this article!");
  const body = encodeURIComponent(
    `I found this article interesting: ${window.location.href}`
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function copyLink() {
  const url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => alert("Link copied to clipboard!"))
    .catch((err) => console.error("Failed to copy text: ", err));
}

// Slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".listed-properties-container-slider");
  const slideRightBtn = document.getElementById("slideRightRelatedProperties");
  const slideLeftBtn = document.getElementById("slideLeftRelatedProperties");

  slideRightBtn.addEventListener("click", function () {
    slideLeftBtn.classList.remove("hidden");
    slider.scrollBy({
      left: 250,
      behavior: "smooth",
    });
  });

  slideLeftBtn.addEventListener("click", function () {
    slider.scrollBy({
      left: -250,
      behavior: "smooth",
    });
  });
});
