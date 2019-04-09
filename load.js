function changeStatus(value) {
  var body = document.getElementsByTagName("body")[0];

  if(value == "true") {
    body.className = 'busy';
    body.innerHTML = 'Cagaste! Esta ocupado!';
  } else {
    body.className = 'free';
    body.innerHTML = 'Está libre campeón!';
    var audio = new Audio('cool.ogg');
    audio.play();
  }
}


function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      changeStatus(this.response)
    }
  };
  xhttp.open("GET", "https://enigmatic-caverns-58480.herokuapp.com/", true);
  xhttp.send();
}

window.onload = load;


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