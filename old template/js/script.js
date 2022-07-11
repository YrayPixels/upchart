if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}  
function ready() { 
 var coll = document.getElementsByClassName("collapsible");
     var a;
      
      for (a = 0; a < coll.length; a++) {
        coll[a].addEventListener("click", function() {
            this.classList.toggle("active");
             var content = this.nextElementSibling;
             if (content.style.display === "block") {
               content.style.display = "none";
             } else {
              content.style.display = "block";
                }
              });
            }          
 var incoll = document.getElementsByClassName("innercollapsible");
            var i;
             
             for (i = 0; i < incoll.length; i++) {
               incoll[i].addEventListener("click", function() {
                   this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.display === "block") {
                      content.style.display = "none";
                    } else {
                     content.style.display = "block";
                       }
                     });
                   }                           
                  }

                  function myFunction() {
                    document.getElementById("myDropdown").classList.toggle("show");
                  }
                  
                  // Close the dropdown if the user clicks outside of it
                  window.onclick = function(e) {
                    if (!e.target.matches('.dropbtn')) {
                    var myDropdown = document.getElementById("myDropdown");
                      if (myDropdown.classList.contains('show')) {
                        myDropdown.classList.remove('show');
                      }
                    }
                  }
                 