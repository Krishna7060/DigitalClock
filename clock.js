const clock = document.querySelector('#clock');



setInterval(function(){
    let date = new Date();
clock.innerHTML= date.toLocaleTimeString();// to conert date in time by using timestring

},1000)