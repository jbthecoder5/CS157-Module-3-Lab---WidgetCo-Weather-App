$('#getWeatherBtn').click(function() {
  // addid = '000c53231273df2ac9323e70eee830d4'

  var city = $('#zipCode').val();
  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city +
      '&units=metric' + "&appid=000c53231273df2ac9323e70eee830d4",
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
      console.log(data);
      alert(data.name);
    }
  })
})



// http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country 
// code}&appid={API key}