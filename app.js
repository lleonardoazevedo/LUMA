'use strict'

const switcher = document.querySelector('.sol');

switcher.addEventListener('click',function() {
 document.body.classList.toggle('dark-theme')

 var className = document.body.className;
 if(className == "dark-theme") {
     this.textContent = "Light";
 }
 else{
     this.textContent = "Dark";
 }

});

    var checkboxes = [].slice.call(document.querySelectorAll('.inbox [type="checkbox"]'));
    
   
    var lastChecked;

    
    function handleCheck(e) {

     
      if(e.shiftKey && this.checked) {
        
        var inBetween = false;

       
        checkboxes.forEach( input => {

        
          if(input === this || input === lastChecked) {
            inBetween = !inBetween;
          }
          
        
          if(inBetween) {
            input.checked = true;
          }
        });
      }
    
      lastChecked = this;
    }

   
    checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));
