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
      slidesPerView: 1,
    },
    // when window width is >= 480px
   
    // when window width is >= 640px
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".getTickes .swiper-button-next",
    prevEl: ".getTickes .swiper-button-prev",
  },
}); //education-sliding

const swiperEducation = new Swiper(".education-sliding  .swiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 5,
  // Responsive breakpoints
  breakpoints: {
   375:{
    slidesPerView:1
   }
  },
  pagination: {
    el: ".education-sliding .swiper-pagination",
    clickable: true,
  },

  hashNavigation: {
    watchState: true,
  },
  navigation: {
    nextEl: ".education-sliding .swiper-button-next",
    prevEl: ".education-sliding .swiper-button-prev",
  },
});

const swiperSponsors = new Swiper(".officialSponsors  .swiper", {
  // Default parameters
  slidesPerView: 5,
  spaceBetween: 5,
  speed: 500,

  // Responsive breakpoints
  breakpoints: {
    375:{
      slidesPerView:1,
    },

    768:{
      slidesPerView:3,
     
    },
    1400:{
      slidesPerView:6,
    }
  },
  pagination: {
    el: ".officialSponsors .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".officialSponsors .swiper-button-next",
    prevEl: ".officialSponsors .swiper-button-prev",
  },
});
//swiper listCards
const swiperListCards = new Swiper(".swiper.listCards", {
  // Default parameters
  slidesPerView: 6,
 
  speed: 500,

  // Responsive breakpoints
  breakpoints: {
    375:{
      slidesPerView:1,
    },

    768:{
      slidesPerView:3,
     
    },
    1400:{
      slidesPerView:5,
    }
  },
  pagination: {
    el: ".swiper.listCards .swiper-pagination",
    clickable: true,
  },
  navigation: {
nextEl: ".swiper.listCards ~div.pagination .swiper-button-next",
    prevEl: ".swiper.listCards ~div.pagination .swiper-button-prev",
  },
});
const swiperGameList = new Swiper(".gameList .swiper",{
  slidesPerView: 3,
  spaceBetween: 5,
  speed: 500,

  // Responsive breakpoints
  breakpoints: {
   
    // when window width is >= 480px
   375: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
   992: {
      slidesPerView: 2,
    },
    1300:{
      slidesPerView: 3,
    }
  },
  pagination: {
    el: ".gameList .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".gameList .swiper-button-next",
    prevEl: ".gameList .swiper-button-prev",
  },
})

//officialSponsors

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
animateDisplay = function (target, animationClass, displayType, timeout) {
  // timeout should be longer than css transition
  var doneTimedDisplay = false,
    displaying = false;

  target.addEventListener("transitionend", function () {
    if (!target.classList.contains("active")) {
      target.style.display = "none";
    }
    doneTimedDisplay = true;
  });
  if (!target.style.display || target.style.display === "none") {
    displaying = true;
    target.style.display = displayType;
  } else {
    displaying = false;
  }

  window.requestAnimationFrame(function () {
    target.classList.toggle(animationClass);
    doneTimedDisplay = false;
  });

  if (!displaying) {
    setTimeout(function () {
      if (!doneTimedDisplay) {
        target.style.display = "none";
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
        ulTabs[i].classList.remove("active");
        // animateDisplay(sections[i], 'active', 'none', 600)
        sections[i].style.display = "none";
        sections[i].classList.remove("active");
      }
      //  sections[index].classList.add("active");
      ulTabs[index].classList.add("active");
      animateDisplay(sections[index], "active", "flex", 1000);
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

//fixed Header

function fixedHeader(scrollValue,className,navItem) {
  if (window.scrollY > scrollValue) {
    document.body.classList.add(className);
    document.querySelector(navItem).classList.add("animate__slideInDown")
  } else {
    document.body.classList.remove(className);
    document.querySelector(navItem).classList.remove("animate__slideInDown")

  }
}
window.onscroll = () => {
  fixedHeader(50,"fixedHeader",".mainHeader-def");

};
//hamburg menu 

function hamburgMenu(){
  const hamburgBtn = document.querySelector(".headerDEF__hamburgMenu")
  let show = false;
  hamburgBtn.addEventListener('click',()=>{
    if(!show){
      document.body.classList.add('slide')
      show = true
    }else {
      document.body.classList.remove('slide')
      show = false
    }
  })
}
hamburgMenu()