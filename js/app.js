(function (window, document, drawModule, undefined) {

var btn = document.getElementById('btn');
btn.addEventListener("click", function(){ drawModule.init();});

	document.onkeydown = function(event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch(keyCode) {

        case 37:
          if (direction != 'right') {
            direction = 'left';
          }
          console.log('left');
          break;
					// Moves the snake to the left
        case 39:
          if (direction != 'left') {
          direction = 'right';
          console.log('right');
          }
          break;
					// Moves the snake to the right
        case 38:
          if (direction != 'down') {
          direction = 'up';
          console.log('up');
          }
          break;
					// Moves the snake to the up
        case 40:
          if (direction != 'up') {
          direction = 'down';
          console.log('down');
          }
          break;
          }
					// Moves the snake to the down
      }


})(window, document, drawModule);
