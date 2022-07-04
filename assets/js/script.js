var telInput = $("#phone"),
errorMsg = $("#error-msg"),
validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({

allowExtensions: true,
formatOnDisplay: true,
autoFormat: true,
autoHideDialCode: true,
autoPlaceholder: true,
defaultCountry: "auto",
ipinfoToken: "yolo",

nationalMode: false,
numberType: "MOBILE",
//onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
preferredCountries: ['sa', 'ae', 'qa','om','bh','kw','ma'],
preventInvalidNumbers: true,
separateDialCode: true,
initialCountry: "auto",
geoIpLookup: function(callback) {
$.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  var countryCode = (resp && resp.country) ? resp.country : "";
  callback(countryCode);
});
},
 utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
});

var reset = function() {
telInput.removeClass("error");
errorMsg.addClass("hide");
validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function() {
reset();
if ($.trim(telInput.val())) {
  if (telInput.intlTelInput("isValidNumber")) {
    validMsg.removeClass("hide");
  } else {
    telInput.addClass("error");
    errorMsg.removeClass("hide");
  }
}
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);



// Reset Password Input 
 

 const resetpassword_input = document.querySelectorAll(".resetpassword_input");

 
 
 function Addactive(item){
   item.addEventListener("keyup",function(){
     console.log(parseInt(this.value));
     if(parseInt(this.value) >= 0){
       this.classList.add("active")
      }else{
        this.classList.remove("active")
      }
    } )
    
    
  }
  resetpassword_input.forEach(item=>Addactive(item));


// Result page 
const popupeclose1 = document.querySelector(".popupe-close_1"),
popupe_1 = document.querySelector(".popupe_1");
viewpopupe_1 = document.querySelector(".viewpopupe_1");


viewpopupe_1.addEventListener("click",function(){
  popupe_1.style.display = "block";
  popupe_1.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose1.addEventListener("click",function(){
    popupe_1.style.display = "none";
})

const popupeclose2 = document.querySelector(".popupe-close_2"),
popupe_2 = document.querySelector(".popupe_2");
viewpopupe_2 = document.querySelector(".viewpopupe_2");


viewpopupe_2.addEventListener("click",function(){
  popupe_2.style.display = "block";
  popupe_2.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose2.addEventListener("click",function(){
    popupe_2.style.display = "none";
})


const popupeclose3 = document.querySelector(".popupe-close_3"),
popupe_3 = document.querySelector(".popupe_3");
viewpopupe_3 = document.querySelector(".viewpopupe_3");


viewpopupe_3.addEventListener("click",function(){
  popupe_3.style.display = "block";
  popupe_3.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose3.addEventListener("click",function(){
    popupe_3.style.display = "none";
})


const popupeclose4 = document.querySelector(".popupe-close_4"),
popupe_4 = document.querySelector(".popupe_4");
viewpopupe_4 = document.querySelector(".viewpopupe_4");


viewpopupe_4.addEventListener("click",function(){
  popupe_4.style.display = "block";
  popupe_4.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose4.addEventListener("click",function(){
    popupe_4.style.display = "none";
})


const popupeclose5 = document.querySelector(".popupe-close_5"),
popupe_5 = document.querySelector(".popupe_5");
viewpopupe_5 = document.querySelector(".viewpopupe_5");


viewpopupe_5.addEventListener("click",function(){
  popupe_5.style.display = "block";
  popupe_5.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose5.addEventListener("click",function(){
    popupe_5.style.display = "none";
})



const popupeclose6 = document.querySelector(".popupe-close_6"),
popupe_6 = document.querySelector(".popupe_6");
viewpopupe_6 = document.querySelector(".viewpopupe_6");


viewpopupe_6.addEventListener("click",function(){
  popupe_6.style.display = "block";
  popupe_6.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose6.addEventListener("click",function(){
    popupe_6.style.display = "none";
})



const popupeclose7 = document.querySelector(".popupe-close_7"),
popupe_7 = document.querySelector(".popupe_7");
viewpopupe_7 = document.querySelector(".viewpopupe_7");


viewpopupe_7.addEventListener("click",function(){
  popupe_7.style.display = "block";
  popupe_7.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose7.addEventListener("click",function(){
    popupe_7.style.display = "none";
})


const popupeclose8 = document.querySelector(".popupe-close_8"),
popupe_8 = document.querySelector(".popupe_8");
viewpopupe_8 = document.querySelector(".viewpopupe_8");


viewpopupe_8.addEventListener("click",function(){
  popupe_8.style.display = "block";
  popupe_8.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose8.addEventListener("click",function(){
    popupe_8.style.display = "none";
})


const popupeclose9 = document.querySelector(".popupe-close_9"),
popupe_9 = document.querySelector(".popupe_9");
viewpopupe_9 = document.querySelector(".viewpopupe_9");


viewpopupe_9.addEventListener("click",function(){
  popupe_9.style.display = "block";
  popupe_9.setAttribute("id",`Poupe_${item.id}`)
  })
  
  popupeclose9.addEventListener("click",function(){
    popupe_9.style.display = "none";
})



 const locationSearch = document.getElementById("location-search"),
        listserch = document.querySelectorAll(".result_list_serch");
    locationSearch.onchange=function (){
      console.log(locationSearch.value);
      listserch.forEach(item =>
        function(){
          item.classList.add("hide")
          // {locationSearch.value === item.id ? console.log("true"):console.log("false")}

        }
        )
    }


    // class="btn btn-block text-left collapsed"
    document.querySelectorAll(".btn-block").forEach(item =>
      item.addEventListener("click",function(){
        console.log("test");
      })
      )



      