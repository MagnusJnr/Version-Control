let none = document.getElementById("none")
let form = document.getElementById("form")
let input = document.getElementById("city")

form.addEventListener("submit", getWeather)

function getWeather(event){
    event.preventDefault()
    let city = input.value

    let weatherRequest = new XMLHttpRequest()
    let APIKEY = "929c3fb137d76d5125509209ff3560b2"
    weatherRequest.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)

    weatherRequest.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
        let data = JSON.parse(this.responseText)
        printDataOnUI(data)
        }
    }

    function printDataOnUI(data){
        let temperature = data.main.temp
        let convertedTemp = (temperature - 273.25).toFixed()  
    
        let tempText = document.createElement("p")
        tempText.textContent = convertedTemp
        .append(tempText)
    }

    weatherRequest.send()
}
