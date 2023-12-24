const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.header__list-item');
const button = document.querySelector('#button');
const feedback = document.querySelector('.feedback');
const arrayLinks = Array.from(links);
const arraySections = Array.from(sections);
const logo = document.querySelector('.header__list-link-logo');

const newArraySections = arraySections.filter((item, i) => {
  return i !== 2;
});

if (window.innerWidth <= 768) {
  arrayLinks.unshift(logoMobile);
} else {
  arrayLinks.unshift(logo);
}

if (arrayLinks.length >= 2) {
  let temp = arrayLinks[arrayLinks.length - 1];
  arrayLinks[arrayLinks.length - 1] = arrayLinks[arrayLinks.length - 2];
  arrayLinks[arrayLinks.length - 2] = temp;
  console.log(arrayLinks);
}

function anchorLink(element) {
  const offset = element.getBoundingClientRect();
  const windowTop = window.pageYOffset;

  window.scrollTo(0, windowTop + offset.top - 70);
}

button.addEventListener('click', () => {
  anchorLink(feedback);
});

for (let i = 0; i < arrayLinks.length; i++) {
  arrayLinks[i].addEventListener('click', () => {
    anchorLink(newArraySections[i]);
  });
}
