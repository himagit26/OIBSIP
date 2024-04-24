    function showMessage(type) {
      var messageElement = document.getElementById('message');
      var temperatureInput = document.getElementById('temperature');
      var unitLabel = document.getElementById('unitLabel');
      var unitSelect = document.getElementById('unit');
      var convertButton = document.getElementById('convertButton');
      
      if (type === 'hot') {
        messageElement.innerHTML = "<p>It's certainly hot! Enter the temperature to convert from:</p>";
      } else if (type === 'cool') {
        messageElement.innerHTML = "<p>It's certainly cool! Enter the temperature to convert from:</p>";
      }
      
      messageElement.style.display = 'block';
      temperatureInput.style.display = 'block';
      unitLabel.style.display = 'block';
      unitSelect.style.display = 'block';
      convertButton.style.display = 'block';
    }
    
    function convertTemperature() {
      var temperature = parseFloat(document.getElementById('temperature').value);
      var unit = document.getElementById('unit').value;
      var resultElement = document.getElementById('result');
      
      if (isNaN(temperature)) {
        resultElement.innerHTML = "<span style='color: red;'>Please enter a valid temperature.</span>";
        return;
      }
      
      var convertedTemperature;
      var convertedUnit;
      
      if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';
      } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
      } else if (unit === 'kelvin') {
        convertedTemperature = temperature - 273.15;
        convertedUnit = 'Celsius';
      }
      
      resultElement.innerHTML = "Converted temperature: <strong>" + convertedTemperature.toFixed(2) + "</strong> " + convertedUnit;
    }
  