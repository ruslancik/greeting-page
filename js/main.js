// Selecting DOM elements

const time = document.getElementById('time'),
    greeting =document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

    function showTime(){

        // Add time 
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

        // 12 hours format
        hour =  hour % 12 || 12;

        // adding am pm 
        const amPM = hour >= 12 ? 'PM' : 'AM';

        // ouput time 
        time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

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
    //Run
    showTime();
    setBgGreetAndImg();