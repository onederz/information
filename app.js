var today=new Date,month=new Array;month[0]="January",month[1]="February",month[2]="March",month[3]="April",month[4]="May",month[5]="June",month[6]="July",month[7]="August",month[8]="September",month[9]="October",month[10]="November",month[11]="December";var month_name=month[today.getMonth()],day_of_month=today.getDate(),current_year=today.getFullYear(),dayOfMonthElement=document.getElementById("current_day"),currentMonthElement=document.getElementById("current_month"),currentYearElement=document.getElementById("current_year");!function(){currentMonthElement.innerHTML=month_name,dayOfMonthElement.innerHTML=day_of_month,currentYearElement.innerHTML=current_year}();
/* date change */
function showhide() {
  var d = new Date();
  var s = document.getElementsByClassName(d.getDay());
  for (var i = 0; i < s.length; i++) {
    s[i].style.display = 'block';
  }
}

showhide();

/* flip card */
$('.card').click(function(e){
  e.preventDefault();
  $(this).toggleClass('flipped');
})

let list = document.querySelectorAll(".list");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = (e) => {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "list";
    }
    list[i].className = "list active";
  };
}

list.forEach((elements) => {
  elements.addEventListener("click", function (event) {
    let bg = document.querySelector("body");
    let color = event.target.getAttribute("data-color");
    console.log(event.target)
    bg.style.backgroundColor = color;
  });
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4000, // Change slides every 4 seconds
      disableOnInteraction: false,
    },
    effect: 'fade', // Optional: add a fade effect
  });


  const gallerySlider = new Swiper(".swiper.is-gallery", {
    loop: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    speed: 400,
    grabCursor: true,
    parallax: true,
    /* autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },*/
  });

  const gallerySlider2 = new Swiper(".swiper.is-gallery2", {
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    speed: 400,
    grabCursor: true,
    parallax: true,
    /* autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },*/
  });