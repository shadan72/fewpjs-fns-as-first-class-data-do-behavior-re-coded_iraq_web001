/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hm){
  const splitTime=
  const con=parseInt(hm)
  if(con < 12){
    return 'Good Morning'
  }else if(con <=12 && con>=17) {
    return 'Good Afternoon'
  }else if (con <17)
  return 'Good Evening'
}
/* Write your implementation of displayMessage() */
