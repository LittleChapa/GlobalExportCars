const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.header__list-item');
const arrayLinks = Array.from(links);
const arraySections = Array.from(sections);
const newArraySections = arraySections.filter((item, i) => {
  return i !== 2;
});
arrayLinks.unshift(logo);

if (arrayLinks.length >= 2) {
  let temp = arrayLinks[arrayLinks.length - 1];
  arrayLinks[arrayLinks.length - 1] = arrayLinks[arrayLinks.length - 2];
  arrayLinks[arrayLinks.length - 2] = temp;
}

function anchorLink(element) {
  const offset = element.getBoundingClientRect();
  const windowTop = window.pageYOffset;

  window.scrollTo(0, windowTop + offset.top - 70);
}

for (let i = 0; i < arrayLinks.length; i++) {
  arrayLinks[i].addEventListener('click', () => {
    anchorLink(newArraySections[i]);
  });
}
