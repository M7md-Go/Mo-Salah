// Adjust The Page Header...
let header = document.querySelector('.header');
let logo = document.querySelector('.lo-hr');

let header_H = header.clientHeight;
let banner = document.querySelector('.banner-sec');


banner.style.paddingTop = 50 + header_H + "px";

window.onscroll = function scrolling() {
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  header.classList.add("active-H");
  logo.classList.add("active-logo");

 } else {
  header.classList.remove("active-H");
  logo.classList.remove("active-logo");
 };
// console.log(logo.className);
};

function activeLink () {
 
 
}


setTimeout(function(){
    odometer.innerHTML = 986;
}, 1000);


console.log();