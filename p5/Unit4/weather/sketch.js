// Note - you must change line 19 to your own APPID to get this to work!

var weather ;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature = 0;
var humidity = 0;
var name;
var graycloud ;
var castle ;
var f;


function setup() {
  createCanvas(1000, 600);

  graycloud = loadImage("assets/graycloud.png") ;
  castle = loadImage("assets/castle.jpg") ;
  f = loadFont("assets/augsburger.ttf");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Birkenfeld,Germany,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=1e10093e37c210ea94d19aca70c95406'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      // background(200);
      image(castle, 0, 0, 1000, 600) ;
      fill('white');
      // text("Weather in " + weather.name + "?", 20, 20);
      textSize(100);
      textFont(f);
      text(temperature, 20, 90);
      textSize(25);
      text("Wind: " + windspeed, 30, 130);
      text("Humidity: " + humidity + '%', 30, 160);
      text("Hour: " + hour(), + 30, 190);
      text("City: Birkenfeld", 30, 220);
      text("Country: Germany", 30, 250);



      // cloud
      // fill('white');
      // noStroke();
      // ellipse(x, 300, 200, 100);
      image(graycloud, x, 200, 500, 400);

      // move the cloud's x position
      x = x + windspeed/3 ;
      if (x > width) x = -50;

      break;

  }
}
