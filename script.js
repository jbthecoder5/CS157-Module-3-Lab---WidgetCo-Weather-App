$('#getWeatherBtn').click(function() {
  // addid = '000c53231273df2ac9323e70eee830d4'

  var city = $('#zipCode').val();
  $.ajax({
    url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city +
      ',us&units=metric' + "&appid=000c53231273df2ac9323e70eee830d4",
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
      console.log(data); //testing
      $('#locationName').html(data.name);
      $('#condition').html(data.weather[0].description);
      $('#currentTemp').html(data.main.temp);

      $('#minTemp').html(data.main.temp_min);
      $('#maxTemp').html(data.main.temp_max);
      $('#windSpeed').html(data.wind.speed);
      $('#humidity').html(data.main.humidity);
      $('#pressure').html(data.main.pressure);
    }
  })
})



// http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country 
// code}&appid={API key}