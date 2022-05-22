// constant containing the navigation bar.
const navBar = document.querySelector('#navbar__list');

//creating different navigation bar elements and storing them in constants.
const firstNavItem = document.createElement('li');
const secondNavItem = document.createElement('li');
const thirdNavItem = document.createElement('li');
const forthNavItem = document.createElement('li');

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

//appending items to the navigation bar.
navBar.appendChild(firstNavItem);
navBar.appendChild(secondNavItem);
navBar.appendChild(thirdNavItem);
navBar.appendChild(forthNavItem);

//applying CSS to the navigation bar itself.
navBar.style.cssText = 'background-color: black; height: 15%; top: 0px; left: 0px; right: 0px; list-style: none; display: flex; flex-direction: row; flex-wrap: wrap;';

//using the elements' class name as an anchor.
const navBarItems = document.querySelectorAll('.navBarItems');

//this loop adds css properties to the navigation bar elements and changes the look of each element when hovered over with the mouse.
for(let i = 0; i < navBarItems.length; i++) {
    navBarItems[i].style.cssText = 'margin: 4%; height: 40%; justify-content: center center; margin-top: 1.171%; padding: 1%; padding-right: 1%; padding-left: 10px; margin-bottom: 0px;';
   
    navBarItems[i].addEventListener('mouseover', function() {
        navBarItems[i].style.cssText += 'background-color: rgba(0,13,60,1); cursor: pointer;';
    });
   
    navBarItems[i].addEventListener('mouseleave', function() {
        navBarItems[i].style.cssText += 'background-color: black; color: white; cursor: auto;';
    });
}

//this event listener is used to use a scrolling animation and scroll the first section into view.
firstNavItem.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('section1').scrollIntoView({behavior:'smooth', block:'center'});
}, false);

//this event listener is used to use a scrolling animation and scroll the second section into view.
secondNavItem.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('section2').scrollIntoView({behavior:'smooth', block:'center'});
}, false);

//this event listener is used to use a scrolling animation and scroll the third section into view.
thirdNavItem.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('section3').scrollIntoView({behavior:'smooth', block:'center'});
}, false);

//this event listener is used to use a scrolling animation and scroll the forth section into view.
forthNavItem.addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('section4').scrollIntoView({behavior:'smooth', block:'center'});
}, false);

//this event listener is used to add the active class to each one of the sections the moment they're in the viewport.
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.sections');

    for (let i = 0; i < sections.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = sections[i].getBoundingClientRect().top;
      const elementBottom = sections[i].getBoundingClientRect().bottom;

       if (elementTop > 0 && elementTop < windowHeight && elementBottom < windowHeight) {
        sections[i].classList.add('active');
      } else if (elementTop <= 0 || elementTop > windowHeight || elementBottom > windowHeight) {
        sections[i].classList.remove('active');
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
