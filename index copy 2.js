    // Define variables for DOM elements
    const cityElement = document. getElementById('city');
    const startDateElement = document. getElementById('start-date');
    const endDateElement = document. getElementById('end-date');
    const calculateButton = document.getElementById('calculate');
    const resultElement = document. getElementById('result');
    const areaElement = document. getElementById('area');
    const efficiencyElement = document. getElementById('efficiency');
    const insolationElement = document. getElementById('insolation');
    const performanceRatioElement = document.getElementById('performance-ratio');
    const powerOutputElement = document. getElementById('power-output');
    const initialInvestmentElement = document. getElementById('initial-investment');
    const cashFlow1Element = document. getElementById('cash-flow-1');
    const cashFlow2Element = document. getElementById('cash-flow-2');
    const cashFlow3Element = document. getElementById('cash-flow-3');
    const cashFlow4Element = document. getElementById('cash-flow-4');
    const cashFlow5Element = document. getElementById('cash-flow-5');
    const discountRateElement = document.getElementById('discount-rate');
    const npvElement = document. getElementById('npv');
    
    // Add event listeners to elements
    calculateButton.addEventListener('click', calculateSum);
    areaElement.addEventListener('input', calculatePower);
    efficiencyElement. addEventListener('input', calculatePower);
    insolationElement.addEventListener('input', calculatePower);
    performanceRatioElement.addEventListener('input', calculatePower);
    initialInvestmentElement.addEventListener('input', calculateNPV);
    cashFlow1Element. addEventListener('input', calculateNPV);
    cashFlow2Element. addEventListener('input', calculateNPV);
    cashFlow3Element. addEventListener('input', calculateNPV);
    cashFlow4Element. addEventListener('input', calculateNPV);
    cashFlow5Element. addEventListener('input', calculateNPV);
    discountRateElement.addEventListener('input', calculateNPV);
    
    // Function to calculate the sum of solar energy data
    function calculateSum() {
      const city = cityElement. value;
      const startDate = startDateElement.value;
      const endDate = endDateElement. value;
      let sum = 0;
    
      // Fetch data from CSV file using Ajax
      fetch('https://raw.githubusercontent.com/Nahyeji/website/main/alldata.csv')
        .then(response => response.text())
        .then(data => {
          const rows = data.split('\n');
          const header = rows[0].split(',');
          const columnIndex = header. indexOf(city);
    
          for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(',');
            const date = row[0];
            if (date >= startDate && date <= endDate) {
              sum += Number(row[columnIndex]);
            }
          }
    
          // Update isolation element value
          insolationElement.value = sum.toFixed(2);
        });
    }
    
    // Function to calculate solar power output
    function calculatePower() {
      const area = areaElement. value;
      const efficiency = efficiencyElement. value;
      const insolation = insolationElement. value;
      const performanceRatio = performanceRatioElement.value;
      const powerOutput = area * efficiency * insolation * performanceRatio;
      powerOutputElement.innerHTML = powerOutput.toFixed(2) + ' W';
    }
    
    // Function to calculate NPV
    function calculateNPV() {
      const initialInvestment = Number(initialInvestmentElement.value);
      const cashFlow1 = Number(cashFlow1Element. value);
      const cashFlow2 = Number(cashFlow2Element. value);
      const cashFlow3 = Number(cashFlow3Element. value);
      const cashFlow4 = Number(cashFlow4Element. value);
      const cashFlow5 = Number(cashFlow5Element. value);
      const discountRate = Number(discountRateElement.value) / 100;
      const cashFlows = [initialInvestment, cashFlow1, cashFlow2, cashFlow3, cashFlow4, cashFlow5];
      
      let npv = -initialInvestment;
    
      for (let i = 1; i < cashFlows.length; i++) {
        const cashFlow = cashFlows[i];
        const presentValue = cashFlow / Math.pow(1 + discountRate, i);
        npv += presentValue;
      }
    
      npvElement.innerHTML = npv.toFixed(2);
    }
    function changeMap() {
      var image = document.getElementById("myImage");
      var map = document.getElementsByName("myMap")[0];
      var coords1 = "720,513,866,597";
      var coords2 = "665,592,866,748";
      var city = document.getElementById("city");
    
      // check if clicked coordinates are within the first area tag
      if (map.name === "myMap" && coordsWithinArea(event.offsetX, event.offsetY, coords1)) {
        image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map2.png";
        city.value = "Jeonbuk"; // select Jeonbuk in the city dropdown
      }
      // check if clicked coordinates are within the second area tag
      else if (map.name === "myMap" && coordsWithinArea(event.offsetX, event.offsetY, "700,500,850,650")) {
        image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map3.png";
        city.value = "Jeonnam"; // select Jeonnam in the city dropdown
      }
      // switch back to myMap
      else {
        image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map.png";
        city.value = ""; // clear the city dropdown value when switching back to myMap
      }
    }
    
    function coordsWithinArea(x, y, coords) {
      var coordsArr = coords.split(",");
      var x1 = parseInt(coordsArr[0]);
      var y1 = parseInt(coordsArr[1]);
      var x2 = parseInt(coordsArr[2]);
      var y2 = parseInt(coordsArr[3]);
      return x >= x1 && x <= x2 && y >= y1 && y <= y2;
    }
    
      // update coordinates for the area
      var area = map.getElementsByTagName("area")[0];
      area.coords = coords;
    