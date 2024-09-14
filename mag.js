let form = document.getElementById("form")
let input = document.getElementById("input")
let display = document.getElementById("display-body")

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
        printToUI(data)
        }
    }

    function  printToUI(data){
        
        let cityName = document.createElement("div")
        cityName.classList.add("city-name")
        cityName.textContent = city
        
    
        let cityPara = document.createElement("p")
        cityPara.textContent = city

        let temp = document.createElement("div")
        temp.classList.add("temp")

        let tempPara = document.createElement("p")
        tempPara.textContent = "Current Temperature"

        let tempNum = document.createElement("div")
        tempNum.classList.add("temp-num")

        let tempCount = document.createElement("h4")
        tempCount.textContent = data.main.temp
        let convertedTemp = (tempCount)
        
        let tempDegree = document.createElement("i")
        tempDegree.classList.add("fa-regular", "fa-circle")

        let tempC = document.createElement("h4")
        tempC.textContent = "C"

        tempNum.append(convertedTemp, tempDegree, tempC)
        temp.append(tempPara, tempNum)
        display.append(cityName, temp)
    }

    if(display.length === 0){
        display.setAttribute("display", "block")
    }else{
        display.setAttribute("display", "flex")
    }

    weatherRequest.send()
}

