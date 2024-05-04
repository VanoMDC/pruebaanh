/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

window.addEventListener('scroll', function() {
    var scrollDiv = document.getElementById('scrollDiv');
    var position = scrollDiv.getBoundingClientRect();
  
    // Muestra el div cuando se desplaza hacia abajo
    if (position.top < window.innerHeight) {
      scrollDiv.classList.add('active');
    } else {
      scrollDiv.classList.remove('active');
    }
  });