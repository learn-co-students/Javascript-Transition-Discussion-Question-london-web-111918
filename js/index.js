// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

let lincoln = document.getElementById('save_lincoln')
let milliseconds = document.getElementById('interval')

lincoln.addEventListener("click", saveLincoln, parseInt(milliseconds))

function saveLincoln(milliseconds) {
  if(isNaN(milliseconds)) {
    milliseconds = 100
  }
  fadeOutEffect(milliseconds)
}

function fadeOutEffect(milliseconds) {
    var fadeTarget = document.getElementById("foreground");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, milliseconds);
}
