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

const resetpassword_input_one = document.getElementById("resetpassword_input_one"),
 resetpassword_input_two = document.getElementById("resetpassword_input_two"),
 resetpassword_input_three = document.getElementById("resetpassword_input_three"),
 resetpassword_input_four = document.getElementById("resetpassword_input_four");

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



  
