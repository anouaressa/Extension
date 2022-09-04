async function fetchData() {
    const res=await fetch ("https://api.openweathermap.org/data/2.5/weather?q=casablanca&appid=a9799ce2550c391cd8986b2b3bb75756&units=metric");
    const record=await res.json();

    document.getElementById("city").innerHTML=record.name;
    document.getElementById("temperature").innerHTML=record.main.temp;
    document.getElementById("description").innerHTML=record.weather[0].description;
    document.getElementById("wind").innerHTML=record.wind.speed+" km/h";
    document.getElementById("temp_min").innerHTML=record.main.temp_min;
    document.getElementById("temp_max").innerHTML=record.main.temp_max;

}
fetchData();