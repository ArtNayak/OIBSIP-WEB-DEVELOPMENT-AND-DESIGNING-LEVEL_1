function convertTemperature() {
  const input = document.getElementById("temperatureInput").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");


  if (input === "" || isNaN(input)) {
    resultDiv.style.color = "red";
    resultDiv.innerText = "Please enter a valid number";
    return;
  }

  if (fromUnit === "" || toUnit === "") {
    resultDiv.style.color = "red";
    resultDiv.innerText = "Please select both units";
    return;
  }

  if (fromUnit ===toUnit) {
    resultDiv.style.color ="red";
    resultDiv.innerText = "Please select different units";
    return;
  }

  let temp =parseFloat(input);
  let result;


  if (fromUnit==="fahrenheit") {
    temp = (temp-32)*5/9;
  } else if (fromUnit==="kelvin") {
    temp = temp - 273.15;
  }


  if (toUnit==="fahrenheit") {
    result = (temp*9/5)+32;
  } else if (toUnit ==="kelvin") {
    result=temp + 273.15;
  } else {
    result =temp;
  }

  const unitSymbol = {
    celsius: "°C",
    fahrenheit: "°F",
    kelvin: "K"
  };

  resultDiv.style.color ="#202124";
  resultDiv.innerHTML =`${result.toFixed(2)} ${unitSymbol[toUnit]}`;
}
