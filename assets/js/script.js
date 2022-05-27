
// owl developer
var owldeveloper = $(".owl-developer");
owldeveloper.owlCarousel({
  loop: false,
  margin: 15,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    960: {
      items: 5,
    },
    1200: {
      items: 8,
    },
  },
});

// Custom Button
$(".NextBtndeveloper").click(function () {
    owldeveloper.trigger("next.owl.carousel");
});
$(".PreviousBtndeveloper").click(function () {
    owldeveloper.trigger("prev.owl.carousel");
});

// owl developer project
var owlproject = $(".latest_project");
owlproject.owlCarousel({
  loop: false,
  margin: 30,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1.5,
    },
    1200: {
      items: 2.5,
    },
  },
});

// Custom Button
$(".NextBtnproject").click(function () {
    owlproject.trigger("next.owl.carousel");
});
$(".PreviousBtnproject").click(function () {
    owlproject.trigger("prev.owl.carousel");
});

// owl developer similarpr

var project__similarp = $(".project__similarpr");
project__similarp.owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1.5,
    },
    1200: {
      items: 2.5,
    },
  },
});

// Custom Button
$(".Nextsimilarprojects").click(function () {
  project__similarp.trigger("next.owl.carousel");
});
$(".Previoussimilarprojects").click(function () {
  project__similarp.trigger("prev.owl.carousel");
});


var property__similarpr = $(".property__similarpr");
property__similarpr.owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    960: {
      items: 1.5,
    },
    1200: {
      items: 2.5,
    },
  },
});

// Custom Button
$(".Nextsimilarprojects").click(function () {
  property__similarpr.trigger("next.owl.carousel");
});
$(".Previoussimilarprojects").click(function () {
  property__similarpr.trigger("prev.owl.carousel");
});


// modal porperty form

const modalporpertyform = document.querySelectorAll(".modal__porperty__form"),
      modalporpertynext = document.getElementById("modal__porperty__next"),
      modalporpertyback = document.getElementById("modal__porperty__back"),
      modalporpertysubmit = document.getElementById("modal__porperty__submit");
  let numbershow = 0;

function showmodel(numbershow){
  modalporpertyform[numbershow].style.display ="block";
  modalporpertyback.style.display ="none";
  modalporpertynext.style.display="block";
  modalporpertysubmit.style.display="none";
}

showmodel(numbershow)
console.log(modalporpertyform.length);

modalporpertynext.addEventListener("click", function(e){
  e.preventDefault();
  modalporpertyform.forEach(item =>{
    item.style.display="none";
  })
  numbershow++;
  if(numbershow >= modalporpertyform.length-1){
    showmodel(modalporpertyform.length-1)
    modalporpertynext.style.display="none";
    modalporpertyback.style.display ="block";
    modalporpertysubmit.style.display="block";
  }else{
    showmodel(numbershow)
    modalporpertyback.style.display ="block";
  }
})

modalporpertyback.addEventListener("click",function(e){
  modalporpertyform.forEach(item =>{
    item.style.display="none";
  })
  e.preventDefault();
  numbershow--;
  if(numbershow <= 0){
    showmodel(0)
    modalporpertyback.style.display ="none";
  }else{
    showmodel(numbershow)
    modalporpertyback.style.display ="block";
  }
})

