let searchInput = document.getElementById("searchInput");
let contact = document.getElementById("contact");
let forecastWeather = [];
let forecastLocation = [];
let city = "";

contact.addEventListener("click", function () {
  window.location.href = "../contact.html";
});

//search for location
searchInput.addEventListener("input", function () {
  city = searchInput.value;
  getWeather(city);
});

//Api Fetch
getWeather("london");

async function getWeather(location) {
  try {
    let response = await (
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=3feabf89d8a8480b8b4144141242012&q=${location}&days=3`
      )
    ).json();

    forecastWeather = response.forecast.forecastday;
    forecastLocation = response.location;
    display();
  } catch (error) {
    console.log(error);
  }
}

//Display function
function display() {
  let container = "";

  container += `

  

       <div class="col-md-4">

              <div class="card z-3 w-100 rounded-0 " id="today">
                <div class="card-header d-flex justify-content-center border-0 px-2 rounded-0">
                  
                  <div class="date">${forecastWeather[0].date}</div>
                </div>
                <div class="card-body d-flex flex-column justify-content-between ">

                  <div class="location">${forecastLocation.name}-${forecastLocation.country}</div>

                  <div class="degree text-white">
                    <div class="num">
                      ${forecastWeather[0].day.maxtemp_c}
                      <sup>o</sup>
                      c
                    </div>

                    <div class="weatherIcon">
                      <img src="${forecastWeather[0].day.condition.icon}" alt="weatherIcon">
                    </div>
                  </div>

                  <div class="custom text-info">${forecastWeather[0].day.condition.text}</div>

                  <div class="d-flex justify-content-around">

                    <span><img src="./pics/icon-umberella.png" alt="rain">${forecastWeather[0].day.daily_chance_of_rain}%</span>
                    <span><img src="./pics/icon-wind.png" alt="wind">${forecastWeather[0].day.maxwind_kph}km/h</span>
                    <span><img src="./pics/icon-compass.png" alt="compas">east</span>
                  </div>

                </div>



              </div>
            </div>




            <div class="col-md-4">

              <div class="card z-3 w-100 text-center rounded-0" id="nextDay">
                <div class="card-header text-center border-0 px-2 rounded-0">
                  <div class="day">${forecastWeather[1].date}</div>

                </div>
                <div class="card-body ">


                  <div class="image">
                    <img src="${forecastWeather[1].day.condition.icon}" alt="sunlogo">
                  </div>


                  <div class="degree text-white">
                    <div class="num">
                      ${forecastWeather[1].day.maxtemp_c}
                      <sup>o</sup>
                      c
                    </div>


                  </div>

                  <div class="custom text-info">${forecastWeather[1].day.condition.text}</div>





                </div>



              </div>
            </div>



            

            <div class="col-md-4">

              <div class="card z-3 w-100 text-center rounded-0" id="today">
                <div class="card-header text-center rounded-0 border-0 px-2">
                  <div class="day">${forecastWeather[2].date}</div>

                </div>
                <div class="card-body">



                  <img src="${forecastWeather[2].day.condition.icon}" alt="sunlogo">

                  <div class="degree text-white">
                    <div class="num">
                       ${forecastWeather[2].day.maxtemp_c}
                      <sup>o</sup>
                      c
                    </div>


                  </div>

                  <div class="custom text-info">${forecastWeather[2].day.condition.text}</div>


                </div>



              </div>
            </div>   
    `;

  document.getElementById("dataDisplay").innerHTML = container;
}
