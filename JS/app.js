// constant containing the navigation bar.
const navBar = document.querySelector('#navbar__list');

//constant containing the sections.
const sections = document.querySelectorAll('.sections');

//creating different navigation bar elements and storing them in constants.
const firstNavItem = document.createElement('li');
const secondNavItem = document.createElement('li');
const thirdNavItem = document.createElement('li');
const forthNavItem = document.createElement('li');

//appending items to the navigation bar.
navBar.appendChild(firstNavItem);
navBar.appendChild(secondNavItem);
navBar.appendChild(thirdNavItem);
navBar.appendChild(forthNavItem);

//constant containing the footer of the page.
const pageFooter = document.getElementById('pageFooter');

//text content of the navigation bar elements.
firstNavItem.textContent = 'Section 1';
secondNavItem.textContent = 'Section 2';
thirdNavItem.textContent = 'Section 3';
forthNavItem.textContent = 'Section 4';

//setting a class for each one of the navigation bar items for manipulation.
firstNavItem.setAttribute('class', 'navBarItems');
secondNavItem.setAttribute('class', 'navBarItems');
thirdNavItem.setAttribute('class', 'navBarItems');
forthNavItem.setAttribute('class', 'navBarItems');

//applying CSS to the navigation bar itself.
navBar.style.cssText = 'background-color: black; height: 15%; top: 0px; left: 0px; right: 0px; list-style: none; display: flex; flex-direction: row; flex-wrap: wrap;';

//using the elements' class name as an anchor.
const navBarItems = document.querySelectorAll('.navBarItems');

//this loop is used to style the navigation bar elements, implement dynamic styling on interaction as well as scroll to the relevant section on click.
for(let i = 0; i < navBarItems.length; i++) {
    navBarItems[i].style.cssText = 'margin: 4%; height: 40%; justify-content: center center; margin-top: 1.171%; padding: 1%; padding-right: 1%; padding-left: 10px; margin-bottom: 0px;';
   
    navBarItems[i].addEventListener('mouseover', function() {
        navBarItems[i].style.cssText += 'background-color: rgba(0,13,60,1); cursor: pointer;';
    });
   
    navBarItems[i].addEventListener('mouseleave', function() {
        navBarItems[i].style.cssText += 'background-color: black; color: white; cursor: auto;';
    });

    navBarItems[i].addEventListener('click', function(event) {
      event.preventDefault();
      sections[i].scrollIntoView({behavior:'smooth'});
  });
}

//this event listener is used to add the active class to each one of the sections the moment they're in the viewport.
//the styling for the relevant navigation bar element gets updated with the active state of each section
window.addEventListener('scroll', function () {
    for (let i = 0; i < sections.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = sections[i].getBoundingClientRect().top;
      const elementBottom = sections[i].getBoundingClientRect().bottom;

       if (elementTop > 0 && elementTop < windowHeight && elementBottom < windowHeight || elementBottom > windowHeight && elementTop < windowHeight) {
        sections[i].classList.add('active');
        navBarItems[i].style.cssText += 'background-color: white; cursor: pointer; color:black;';
      } else if (elementTop <= 0 || elementBottom <= 0 || elementTop > windowHeight || elementBottom > windowHeight || elementTop < windowHeight || elementBottom < windowHeight) {
        sections[i].classList.remove('active');
        navBarItems[i].style.cssText += 'background-color: black; color: white; cursor: auto;';
      }
    }
  });

//this event listener is used to scroll all the way up the top of the page and animating the scroll.
pageFooter.addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
});

//this event listener changes the curser shape when hovering over the footer.
pageFooter.addEventListener('mouseover', function() {pageFooter.style.cssText = 'cursor: pointer;'});
pageFooter.addEventListener('mouseleave', function() {pageFooter.style.cssText = 'cursor: pointer;'});
