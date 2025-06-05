document.addEventListener("DOMContentLoaded", () => {
  // HERO SLIDER
  const heroSlide = document.getElementById("hero-slide");
  const heroImages = [
    "assets/cabin-lake.jpg",
    "assets/cottage.jpg"
  ];
  let currentHero = 0;
  function switchHeroImage() {
    heroSlide.style.backgroundImage = `url(${heroImages[currentHero]})`;
    currentHero = (currentHero + 1) % heroImages.length;
  }
  switchHeroImage();
  setInterval(switchHeroImage, 5000);

  // LISTINGS CAROUSEL
  const track = document.getElementById("carousel-track");
  const nextBtn = document.getElementById("carousel-next");
  let index = 0;
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % 2;
    track.style.transform = `translateX(-${index * 100}%)`;
  });

  // CONTACT FORM MESSAGE
  const form = document.querySelector(".contact form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for your message! We'll get back to you soon.");
      form.reset();
    });
  }
});
