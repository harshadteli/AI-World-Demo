const prevData = document.querySelector(".prev-data");
const terminal = document.querySelector(".terminal");
const closeBtn = document.querySelector(".close");


function exitWindow() {
   window.close();
}

terminal.addEventListener("keydown", function( e ) {
   if ( e.keyCode === 13 ) { // handle if keydown enter button
      e.preventDefault();

      var val = this.textContent, setup,
         rmathSign = /[\+\=\-\(\)\*\&\%\!\<\>0-9]/g;

      if ( rmathSign.test( val ) ) {
         setup = `${val}<br><span>${eval(val)}</span><br>`;
         prevData.innerHTML += setup;
      }

      if ( val === "exit" ) {
         exitWindow();
         return;
      }

      if ( val === "clear" || val === "cls" ) {
         // clear full terminal
         prevData.innerHTML = "";
      }
     
      this.innerHTML = ""; // clear terminal
   }
});

closeBtn.addEventListener("click", exitWindow);