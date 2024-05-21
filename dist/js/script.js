//get src for hero image to use instead of html for CMS integration
const swiper = new Swiper(".getTickes  .swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 5,
  speed: 500,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//get src for hero image to use instead of html for CMS integration
const swiperNew = new Swiper(".whatTheNew .swiper", {
  // Default parameters
  slidesPerView: "auto",
  spaceBetween: 5,
  speed: 500,


  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
//format Number
const formatNumber = () => {
  const allNumbers = document.querySelectorAll(".cardItem-numbers__number");
  allNumbers.forEach((item) => {
    if (item) {
      const indexItem = item.textContent.indexOf("x");
      const number = Number(item.textContent.slice(0, indexItem));
      console.log(number);

      item.innerHTML = number.toLocaleString("en-US");
    }
  });
};
formatNumber();
animateDisplay = function(target, animationClass, displayType, timeout) {
  // timeout should be longer than css transition
  var doneTimedDisplay = false,
    displaying = false;

  target.addEventListener('transitionend', function() {
    if (!target.classList.contains('active')) {
      target.style.display = 'none';
    }
    doneTimedDisplay = true;
  });
  if (!target.style.display || target.style.display === 'none') {
    displaying = true;
    target.style.display = displayType;
  } else {
    displaying = false;
  }

  window.requestAnimationFrame(function() {
    target.classList.toggle(animationClass);
    doneTimedDisplay = false;     
  });

  if (!displaying) {
    setTimeout(function() {
    
      if (!doneTimedDisplay) {
        target.style.display = 'none';
      }
      doneTimedDisplay = true;
    }, timeout);
  }
};
function tabList() {
  const ulTabs = document.querySelectorAll(".whatsHappening  .ultab li");
  const sections = document.querySelectorAll(".whatsHappening .cardHappening");
  ulTabs.forEach((item, index) => {
    item.addEventListener("click", () => {
      
      for (let i = 0; i < sections.length; i++) {
      
        ulTabs[i].classList.remove('active')
       // animateDisplay(sections[i], 'active', 'none', 600)
       sections[i].style.display="none"
       sections[i].classList.remove('active')
      }
    //  sections[index].classList.add("active");
      ulTabs[index].classList.add('active')
      animateDisplay(sections[index], 'active', 'flex', 1000)
    
    });
  });
}
tabList();

//
/*
  document.body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    document.body.innerHTML = ""
    return false;
}, false);


window.addEventListener('keydown',(event)=>{
if(event.ctrlKey===true){
  document.body.innerHTML = ""
}
})

*/
