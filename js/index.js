
// header fixed
window.onscroll = function() {myFunction()};
function myFunction() {
  const menu = document.querySelector(".header")
  
  if (document.body.scrollTop >0|| document.documentElement.scrollTop > 0) {
    menu.classList.add('fixed')
  }
  else{
    menu.classList.remove('fixed')
  }
  
}



// menu 
var theToggle = document.querySelector('.menu-toggle');
// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// fermé le menu s'il scroll masque le menu lien
function onScroll() {
  if("scroll" && $('nav').css('display') === 'block' ){
    $('.menu-toggle').removeClass('on')
    
  }
}
window.addEventListener('scroll', onScroll);




// meu
// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}


// effet prallax

var image = document.getElementsByClassName('banner_contact');
new simpleParallax(image, {
  //orientation: 'right',
  delay: .3,
  orientation: 'left',
  

 
});

var image1 = document.getElementsByClassName('influencer');
new simpleParallax(image1, {
  orientation: 'right',
  overflow: true
});

var woman_nature = document.getElementsByClassName('woman-nature');
new simpleParallax(woman_nature, {
  //scale: 1.2,
  orientation: 'down left'
  
});


// bubbles apparution
sal({
  threshold: 0.5,
  once: false,
});



 