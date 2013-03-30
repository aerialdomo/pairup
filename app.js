$(document).ready(function(){


  //var weeLink = document.getElementsByClassName('wee-link');
  // anything you write in jQuery you can write in JS 

  var weeLink = $('.wee-link'); //select element by class
  var wooLink = $('#woo-link');//select element by id
  var body    = $(body);        //select element by element type 

  //$ is jquery object
  $('.wee-link').on('click', function(event){
    //stops the default action from happening
    event.preventDefault();
    $.ajax({
      type: "GET", 
      //use & to add parameters, ? = here the parameters, 
      //added format=5 ????
      url: "http://gdata.youtube.com/feeds/api/standardfeeds/JP/top_rated?v=2&max-results=1&format=5&alt=jsonc",
      dataType: "json",
      //when you come back from the server
      success:  function(youtube_response) {
        console.log(youtube_response);
        //direct path of JSON objects
        var source = youtube_response.data.items[0].player.default;
        console.log(source);
        $('.video').attr("src", source);
        // selcet the iFrame
        // use .attr (jQuery) to changeg the src to whatever youTube sent  back 

      }

    });

  });










})
