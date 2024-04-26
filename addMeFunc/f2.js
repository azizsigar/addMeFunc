// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.
function formatDate(date) {
	var date = `${yy}/${dd}/${mm}`
  return date
}
let mm=12
let dd= 12
let yy= 2012
formatDate(`${mm}/${dd}/${yy}`)
console.log(formatDate())