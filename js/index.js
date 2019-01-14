// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// document.getElementById("save_lincoln").addEventListener("click", saveLincoln(parseInt(document.getElementById('interval')).value))

let interval = parseInt(document.getElementById('interval').value)

document.getElementById('save_lincoln').addEventListener('click', saveLincoln, interval)

function saveLincoln(interval) {
  console.log(interval)
  if(isNaN(interval)) {
    interval = 10000
  }
  // let el = document.getElementById("foreground")
  // setTimeout(() => el.style.display = "none", interval)
  $('#foreground').fadeOut(interval);
}
