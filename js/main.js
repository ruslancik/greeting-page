// Selecting DOM elements

const time = document.getElementById('time'),
    greeting =document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

    // Show Am and Pm
    const showAmPm = true;


    function showTime(){

        // Add time 
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

        // 12 hours format
        hour =  hour % 12 || 12;

        // adding am pm 
        const amPm = hour >= 12 ? 'AM' : 'PM';

        // ouput time 
        time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

        // adding refresing page
        setTimeout(showTime, 1000);

    }

    function addZero(n){
        return(parseInt(n, 10) < 10 ? '0':'') + n;
    }

    // Set Background and Greeting
function setBgGreetAndImg() {
    let today = new Date(),
      hour = today.getHours();
  
    if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
      greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
      greeting.textContent = 'Good Afternoon, ';
    } else {
      // Evening
      document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
      greeting.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
    }
  }

//Get Name

function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Name

function setName(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//Get Focus

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//Set focus

function setFocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


    //Run
    showTime();
    setBgGreetAndImg();
    getName();
    getFocus();