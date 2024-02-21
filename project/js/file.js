//get src for hero image to use instead of html for CMS integration
const swiper = new Swiper('.getTickes  .swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 5,
    speed:500,
   
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
        
      }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  })
  //format Number 
  const formatNumber = ()=>{
    const allNumbers = document.querySelectorAll(".cardItem-numbers__number")
    allNumbers.forEach((item)=>{
      if(item){
        const indexItem = item.textContent.indexOf("x")
        const number = Number(item.textContent.slice(0,indexItem))
        console.log(number)
       
        item.innerHTML = number.toLocaleString('en-US');
      }
    })
  }
  formatNumber()