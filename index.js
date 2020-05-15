/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(hm){
  const splitTime=hm.split(':');
  const hour=splitTime[0];
  const min=splitTime[1];
  const conHour=parseInt(hour)
  const conMin=parseInt(min)
  if(con < 12){
    return 'Good Morning'
  }else if(con <=12 && con>=17) {
    return 'Good Afternoon'
  }else if (con <17)
  return 'Good Evening'
}
/* Write your implementation of displayMessage() */
