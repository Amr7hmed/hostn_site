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
const popupeclose = document.querySelector(".popupe-close"),
popupe = document.querySelector(".popupe");
viewpopupe = document.querySelectorAll(".viewpopupe");

viewpopupe.forEach(item=>
  item.addEventListener("click",function(){
    popupe.style.display = "block";
    console.log(item.id);
    popupe.setAttribute("id",`Poupe_${item.id}`)
  })

  );
  
popupeclose.addEventListener("click",function(){
  popupe.style.display = "none";
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



      