var header = document.getElementById('pomodoro');
var pomLength = document.getElementById('length');
var fireButton = document.getElementById('fire');
var x;

//reset event listner function
document.getElementById('reset').addEventListener('click', function (){
  clearInterval(x);
  header.innerHTML = 'Start Pomodoro';
  pomLength.value = 25;
  fireButton.disabled = false;
});

// start interval on click event
document.getElementById('fire').addEventListener('click', function(){

  fireButton.disabled = true;
  header.innerHTML = pomLength.value;
  function down(){
// it depends on coersion of innerHTML into number, as a best practice use parseInt
  if(header.innerHTML == 0){
     clearInterval(x);
     header.innerHTML = 'Start Pomodoro'
    // return the function when the pomodoro ends
     return;
  }
    
    header.innerHTML --;
    
}
x = setInterval(function(){down();}, 60*1000);
  
});