// Set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header")

btnNavEl.addEventListener("click", function() {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function(e) {
    if(link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  })
})

//Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(function (entries){
  const ent = entries[0];
  console.log(ent);
  if(ent.isIntersecting === false){
    document.body.classList.add("sticky");
  }

  if(ent.isIntersecting === true){
    document.body.classList.remove("sticky");
  }
}, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});
obs.observe(sectionHeroEl);