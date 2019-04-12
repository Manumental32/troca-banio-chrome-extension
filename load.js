function changeStatus(value) {
  var body = document.getElementsByTagName("body")[0];

  if(value == "true") {
    body.className = 'busy';
    body.innerHTML = 'Ocupado!';
    //notifyMe('Ocupado!');
  } else {
    body.className = 'free';
    body.innerHTML = 'Está libre campeón!';
    //notifyMe('Está libre campeón!');
    //var audio = new Audio('cool.ogg');
    //audio.play();
  }
  
}


function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      changeStatus(this.response);
    }
  };
  xhttp.open("GET", "https://troca-banio.herokuapp.com/", true);
  xhttp.send();
}

var loadInterval;

function checkStatus() {
  loadInterval = setInterval(function(){ load(); }, 10000);
}

window.onload = checkStatus();

//clearInterval(loadInterval);
/* 
function notifyMe(msg) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support system notifications");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(msg);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(msg);
      }
    });
  }
 */
  // Finally, if the user has denied notifications and you 
  // want to be respectful there is no need to bother them any more.
//}

// $(function() {

//   function changeStatus(value) {
//     if(value == "true") {
//       $('body').attr('class', 'busy');
//       $('body').text('Cagaste! Esta ocupado!');
//       var audio = new Audio('assets/audio/cool.ogg');
//       audio.play();
//     } else {
//       $('body').attr('class', 'free');
//       $('body').text('Está libre campeón!');
//     }
//   }

//   $.get( "https://enigmatic-caverns-58480.herokuapp.com/" )
//     .done(function( data ) {
//         console.log( "BAÑO OCUPADO?: " + data );
//         changeStatus(data);
//     });


//   });