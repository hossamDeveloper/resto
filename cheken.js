let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 130;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}
// footer show 
  window.addEventListener("scroll", () => {
    const footer = document.querySelector(".footer");
    const windowHeight = window.innerHeight;
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < windowHeight) {
      footer.classList.add("show");
    } else {
      footer.classList.remove("show");
    }
  });
  // 

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active'); 
}
document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active'); 
}

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1000,
      speed: 500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".review-slide", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    centeredSlides: true,
    // ✅ هنا مكانه الصحيح
    autoplay: {
      speed: 500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
    
  });
});

// swiper end
// aos animation

  AOS.init({
    
    delay: 500, // تحديد مدة التأثير
  // التأثير يظهر مرة واحدة فقط عند التمرير
  });
  
// ////////////
