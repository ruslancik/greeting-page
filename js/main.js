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
        time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

        // adding refresing page
        setTimeout(showTime, 1000);

    }

    showTime();
