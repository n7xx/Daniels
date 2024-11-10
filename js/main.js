const navLinks = document.querySelectorAll("nav ul li a");
const logo = document.getElementById("logo");
const sections = document.querySelectorAll("section");
const aboutSection = document.getElementById("about");
const navBar = document.getElementById("nav");
const navbarToggler = document.querySelector(".navbar-toggler");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 180;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      current = section.getAttribute("id");
    }
  });
  const isPastAboutSection = scrollY >= aboutSection.offsetTop;

  navBar.classList.toggle("position-absolute", !isPastAboutSection);
  navBar.classList.toggle("position-fixed", isPastAboutSection);
  navBar.classList.toggle("bg-white", isPastAboutSection);

  navLinks.forEach((link) => {
    link.classList.toggle("text-white", !isPastAboutSection);
    link.classList.toggle("text-black-custom", isPastAboutSection);
  });

  logo.classList.toggle("text-white", !isPastAboutSection);
  logo.classList.toggle("text-black", isPastAboutSection);
  navbarToggler.classList.toggle("text-white", !isPastAboutSection);
  navbarToggler.classList.toggle("text-black-custom", isPastAboutSection);
  document.documentElement.style.setProperty(
    "--afterColour",
    isPastAboutSection ? "#343434" : "#fff"
  );
  const currentNavLink = document.querySelector(
    `nav ul li a[href="#${current}"]`
  );
  if (currentNavLink) {
    currentNavLink.classList.add("active");
  }
});

