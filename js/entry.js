require('./jquery.simpleWeather.min');

// Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    woeid: '',
    location: 'New York City',
    unit: 'f',
    success: function(weather) {
      //console.log(weather);
      var thunder = [38, 39, 47, 45, 3, 4];
      var drizzle = [9];
      var snow = [13, 13, 14, 15, 16, 41, 46, 42];
      var rain = [11, 12, 40];
      var hail = [17];
      var sleet = [18];

      if(drizzle.indexOf(weather.code) > -1) {
        console.log('drizzle');
        //$('body').animate({backgroundColor: '#F7AC57'}, 1500);
      } else if(rain.indexOf(weather.code) > -1) {
        console.log('rain');
      } else if(thunder.indexOf(weather.code) > -1) {
        console.log('thunder');
      } else if(snow.indexOf(weather.code) > -1 || sleet.indexOf(weather.code) > -1 || hail.indexOf(weather.code) > -1) {
        snowStorm.toggleSnow();
      } else {
        $('body').animate({backgroundColor: '#0091c2'}, 1500);
      }
      html = '<h1 class="icon-'+weather.code+'"></h1>';
      html += '<div class="weather__details"><h2 class="weather__temp"><span class="temp__f">'+weather.temp+ '</span><span class="temp__c">'+weather.alt.temp+'</span>&deg;</h2>';
      html += '<ul><li class="currently">'+weather.currently+'</li></ul></div>';
      html += '<div class="weather__city">'+weather.city+', '+weather.region+'</div>';

      //var timestamp = moment(weather.updated);
      //html += '<p class="updated">Updated '+moment(timestamp).fromNow()+'</p>';

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
