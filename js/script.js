const menuToggle = document.getElementById('checkbox');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show-menu');
});

window.addEventListener('scroll', function() {
  var readingProgress = document.querySelector('.reading-progress');
  var progressFill = document.querySelector('.progress-fill');

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
  var scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

  progressFill.style.width = scrollPercent + '%';

  // Dynamically calculate fixed position based on screen width
  var fixedPosition = window.innerWidth < 768 ? 500 : 600; 

  if (scrollTop > fixedPosition) {
    readingProgress.classList.add('fixed');
  } else {
    readingProgress.classList.remove('fixed');
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const riveInstance = new rive.Rive({
      src: 'assets/images/Party-popper.riv',
        canvas: document.getElementById('riveCanvas'),
        autoplay: true,
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
    const faqItem = this.parentElement;
  
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
          item.classList.remove('active');
        }
    });
  
    faqItem.classList.toggle('active');
    });
});

const rightScrollBtn = document.getElementById('right-scroll-btn');
const moreLikeThisContainer = document.getElementById('more-like-this-container');

// Check if the screen width is greater than a specific breakpoint (e.g., 768px for tablets and above)
if (window.innerWidth > 768) {
  // Create the left scroll button element (initially hidden)
  const leftScrollBtn = document.createElement('div');
  leftScrollBtn.classList.add('left-scroll-btn'); // Add your CSS class
  leftScrollBtn.innerHTML = '<img src="assets/svg/scroll-btn.svg" alt="Left Scroll">'; // Replace with your left arrow image
  leftScrollBtn.style.display = 'none'; // Initially hide the button
  moreLikeThisContainer.parentNode.insertBefore(leftScrollBtn, moreLikeThisContainer); // Insert before the container

  // ... rest of your code for right scroll, toggleLeftScrollBtn, and left scroll event listener
  rightScrollBtn.addEventListener('click', () => {
    moreLikeThisContainer.scrollLeft += 250;
  });

  // Function to show/hide left scroll button
  function toggleLeftScrollBtn() {
    if (moreLikeThisContainer.scrollLeft > 0) {
      leftScrollBtn.style.display = 'block';
    } else {
      leftScrollBtn.style.display = 'none';
    }
  }

  // Event listener for scrolling
  moreLikeThisContainer.addEventListener('scroll', toggleLeftScrollBtn);

  // Event listener for left scroll button (add this after creating the button)
  leftScrollBtn.addEventListener('click', () => {
    moreLikeThisContainer.scrollLeft -= 250; // Scroll left
  });
}
