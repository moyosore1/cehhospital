
        // Get the modal
        var formPopup = document.getElementById('myForm');
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == formPopup) {
            formPopup.style.display = "none";
          }
        }
