/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hm){
  const con=parseInt(hm)
  const str=document.getElementById('greeting')
  if(con < 12){
    str.innerHTML='Good Morning'
  }else if(con <=12 && con>=5) {
    str.innerHTML='Good Afternoon'
  }else if (con <5)
  str.innerHTML='Good Evening'
}
/* Write your implementation of displayMessage() */
