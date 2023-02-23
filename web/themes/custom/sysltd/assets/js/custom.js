//var myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
//myModal.toggle()

document.addEventListener("DOMContentLoaded", function(){
  /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })
}); 

document.addEventListener("DOMContentLoaded", function(){

  el_autohide = document.querySelector('.autohide');
  
  // add padding-top to bady (if necessary)
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';

    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }


}); 

var listnumber = ["01.WHITEPAPER","02.CASE STUDY","03.CASE STUDY"];
var listname = ["Advance Connectivity with 5G Technology","Mobile Apps: Boosting Enterprise Mobility","New Age Banking"];
var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
        loop: false,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,        
        autoHeight: false,
        autoplay: {
            delay: 5000,//animation과 시간 맞춰줘야함
        }, 
        effect: 'fade',//Possible values 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip' | 'creative' | 'cards']
        speed: 2000,
        fadeEffect: {
            crossFade: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: 'true',
            type: 'bullets',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<em class="number">'+ listnumber[index]+'</em>' + '<i></i>' + '<b></b>'  + '<em class="name">'+ listname[index]+'</em>' + '</span>';
              },
        
        },
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
})

jQuery(document).ready( function() {
  //alert('Trying jQuery with bootstrap 5', 'jquery in bootstrap 5');
});

const myNav = document.getElementById('TopNavbar')

window.onscroll = function() {
  if(window.scrollY > window.innerHeight){
    myNav.classList.add('topnav-bg')
  }else{
    myNav.classList.remove('topnav-bg')
  }
}

const elements = document.querySelectorAll(".counter");
const options = {
    threshold: 0.5
}

/*
let Observer = new IntersectionObserver(
    function (entries, Observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add your code here
                $({ someValue: 0 }).animate({ someValue: 46 }, {
                    duration: 3000,
                    easing: 'swing', // can be anything
                    step: function () { // called on every step
                        // Update the element's text with rounded-up value:
                        $('#numYears').text(Math.round(this.someValue) + '+');
                    }
                });
                $({ someValue: 0 }).animate({ someValue: 8500 }, {
                    duration: 3000,
                    easing: 'swing', // can be anything
                    step: function () { // called on every step
                        // Update the element's text with rounded-up value:
                        $('#numEmp').text(Math.round(this.someValue) + '+');
                    }
                });
                $({ someValue: 0 }).animate({ someValue: 5 }, {
                    duration: 3000,
                    easing: 'swing', // can be anything
                    step: function () { // called on every step
                        // Update the element's text with rounded-up value:
                        $('#numConti').text(Math.round(this.someValue) + '+');
                    }
                });
                $({ someValue: 0 }).animate({ someValue: 147 }, {
                    duration: 3000,
                    easing: 'swing', // can be anything
                    step: function () { // called on every step
                        // Update the element's text with rounded-up value:
                        $('#numProjects').text(Math.round(this.someValue) + '+');
                    }
                });

                function commaSeparateNumber(val) {
                    while (/(\d+)(\d{3})/.test(val.toString())) {
                        val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                    }
                    return val;
                }
                // my code end
                console.log(" I am visible on viewport")
                Observer.unobserve(entry.target);
            }
        });
    }, options);

elements.forEach(element => {
    Observer.observe(element);
})
*/
