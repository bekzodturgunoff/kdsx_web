window.addEventListener("load", function () {
  const slideContainer = document.querySelector(".carousel");
  const slidesWrapper = document.querySelector(".carousel-slides");
  let slides = document.querySelectorAll(".carousel-slide");
  let index = 0;
  const interval = 1500;
  let moveDistance = 0;
  const paddingRight = 50;
  let lastSlideIndex = slides.length - 1;
  let firstClone;

  const startSlide = (index) => {
    this.setInterval(() => {
      moveDistance = moveDistance + slides[index]?.clientWidth + paddingRight;
      slidesWrapper.style.transform = `translateX(${-moveDistance}px)`;
      slidesWrapper.style.transition = "1s";
      firstClone = slides[index]?.cloneNode(true);
      firstClone?.id ? (firstClone.id = `first-clone-${index}`) : "";
      slidesWrapper?.append(firstClone);
      index++;
    }, interval);
  };
  startSlide(index);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth", // Smooth scroll
      });
    }
  });
});
