function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Define variables for DOM elements
const cityElement = document.getElementById('city');
const startDateElement = document.getElementById('start-date');
const endDateElement = document.getElementById('end-date');
const calculateButton = document.getElementById('calculate');
const resultElement = document.getElementById('result');
const areaElement = document.getElementById('area');
const efficiencyElement = document.getElementById('efficiency');
const insolationElement = document.getElementById('insolation');
const performanceRatioElement = document.getElementById('performance-ratio');
const powerOutputElement = document.getElementById('power-output');
const capacityElement = document.getElementById('capacity');
const slopeIrradiationRatioElement = document.getElementById('slope-irradiation-ratio');

// Add event listeners to elements
calculateButton.addEventListener('click', calculateSum);
areaElement.addEventListener('input', calculatePower);
efficiencyElement.addEventListener('input', calculatePower);
insolationElement.addEventListener('input', calculatePower);
performanceRatioElement.addEventListener('input', calculatePower);

// Define variables for DOM elements
const citySelect = document.getElementById('city');
const regionItems = document.querySelectorAll('.region-list li');

// Function to change the value of the city select element
function changeCity(city) {
  citySelect.value = city;
}


// Get the image element
const image = document.getElementById("myImage");






// Add a click event listener to the image element
image.addEventListener("click", function(event) {
  // Get the x and y coordinates of the click event
  const x = event.offsetX;
  const y = event.offsetY;

  // Check if the click event is in the first region
  if (x >= 144 && x <= 221 && y >= 245 && y <= 303) {
    // Change the image source to map1.png
    image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map1.png";

    // Get the region list element
    const regionList = document.querySelector(".region-list ul");

    // Clear the current list of regions
    regionList.innerHTML = "";

    // Create a new list of regions based on the new map image
    const regions = ["전주시", "군산시", "익산시", "정읍시", "남원시", "김제시", "완주군", "진안군", "무주군", "장수군", "임실군", "순창군", "고창군", "부안군"];
    regions.forEach(function(region) {
      const li = document.createElement("li");
      li.textContent = region;
      regionList.appendChild(li);
    });
  }
  // Check if the click event is in the second region
  else if (x >= 127 && x <= 225 && y >= 333 && y <= 397) {
    // Change the image source to map2.png
    image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map2.png";

    // Get the region list element
    const regionList = document.querySelector(".region-list ul");

    // Clear the current list of regions
    regionList.innerHTML = "";

    // Create a new list of regions based on the new map image
    const regions = ["목포시", "여수시", "순천시", "나주시", "광양시", "담양군", "곡성군", "구례군", "고흥군", "보성군", "화순군", "장흥군", "강진군", "해남군", "영암군", "무안군", "함평군", "영광군", "장성군", "완도군", "진도군", "신안군"];
    regions.forEach(function(region) {
      const li = document.createElement("li");
      li.textContent = region;
      regionList.appendChild(li);
    });
  }

  // Check if the click event is in the second region
  else if (x >= 226 && x <= 342 && y >= 27 && y <= 125) {
    // Change the image source to map3.png
    image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map3.png";

    // Get the region list element
    const regionList = document.querySelector(".region-list ul");

    // Clear the current list of regions
    regionList.innerHTML = "";

    // Create a new list of regions based on the new map image
    const regions = ["춘천시", "원주시", "강릉시", "동해시", "태백시", "속초시", "삼척시", "홍천군", "횡성군", "영월군", "평창군", "정선군"];
    regions.forEach(function(region) {
      const li = document.createElement("li");
      li.textContent = region;
      regionList.appendChild(li);
    });
  }

  

  // Check if the click event is in the second region
  else if (x >= 187 && x <= 232 && y >= 41 && y <= 155) {
    // Change the image source to map4.png
    image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map4.png";

    // Get the region list element
    const regionList = document.querySelector(".region-list ul");

    // Clear the current list of regions
    regionList.innerHTML = "";

    // Create a new list of regions based on the new map image
    const regions = ["수원시", "성남시", "의정부시", "안양시", "부천시", "광명시", "평택시", "동두천시", "안산시", "고양시", "과천시", "구리시", "남양주시", "오산시", "시흥시", "군포시", "의왕시", "하남시", "용인시", "파주시", "이천시", "안성시", "김포시", "화성시", "광주시", "양주시", "포천시", "여주시", "연천군", "가평군", "양평군"];
    regions.forEach(function(region) {
      const li = document.createElement("li");
      li.textContent = region;
      regionList.appendChild(li);
    });
  }

  // Check if the click event is in the second region
  else if (x >= 235 && x <= 308 && y >= 282 && y <= 344) {
    // Change the image source to map5.png
    image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map5.png";

    // Get the region list element
    const regionList = document.querySelector(".region-list ul");

    // Clear the current list of regions
    regionList.innerHTML = "";

    // Create a new list of regions based on the new map image
    const regions = ["진주시", "통영시", "사천시", "김해시", "밀양시", "거제시", "양산시", "창원시", "의령군", "함안군", "창녕군", "고성군", "남해군", "하동군", "산청군", "함양군", "거창군", "합천군"];
    regions.forEach(function(region) {
      const li = document.createElement("li");
      li.textContent = region;
      regionList.appendChild(li);
    });
  }

  // Check if the click event is in the second region
  else if (x >= 289 && x <= 359 && y >= 145 && y <= 244) {
    // Change the image source to map6.png
    image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map6.png";

    // Get the region list element
    const regionList = document.querySelector(".region-list ul");

    // Clear the current list of regions
    regionList.innerHTML = "";

    // Create a new list of regions based on the new map image
    const regions = ["포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "군위군", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"];
    regions.forEach(function(region) {
      const li = document.createElement("li");
      li.textContent = region;
      regionList.appendChild(li);
    });
  }

 // Check if the click event is in the second region
  else if (x >= 151 && x <= 176 && y >= 317 && y <= 334) {
  // Change the image source to map7.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map7.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["동구", "서구", "남구", "북구", "광산구"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}

 // Check if the click event is in the second region
  else if (x >= 281 && x <= 302 && y >= 247 && y <= 278) {
  // Change the image source to map8.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map8.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}

 // Check if the click event is in the second region
  else if (x >= 195 && x <= 205 && y >= 215 && y <= 225) {
  // Change the image source to map9.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map9.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["동구", "중구", "서구", "유성구", "대덕구"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}

 // Check if the click event is in the second region
  else if (x >= 316 && x <= 348 && y >= 305 && y <= 333) {
  // Change the image source to map10.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map10.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}

 // Check if the click event is in the second region
  else if (x >= 166 && x <= 187 && y >= 90 && y <= 113) {
  // Change the image source to map11.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map11.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구", "강동구"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}

 // Check if the click event is in the second region
  else if (x >= 330 && x <= 358 && y >= 273 && y <= 301) {
  // Change the image source to map12.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map12.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["중구", "남구", "동구", "북구", "울주군"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}
 // Check if the click event is in the second region
  else if (x >= 131 && x <= 156 && y >= 88 && y <= 115) {
  // Change the image source to map13.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map13.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["중구", "동구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}
 // Check if the click event is in the second region
  else if (x >= 106 && x <= 175 && y >= 467 && y <= 513) {
  // Change the image source to map14.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map14.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["제주시","서귀포시"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}
 // Check if the click event is in the second region
  else if (x >= 122 && x <= 189 && y >= 155 && y <= 233) {
  // Change the image source to map15.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map15.png";

  // Get the region list element
  const regionList = document.querySelector(".region-list ul");

  // Clear the current list of regions
  regionList.innerHTML = "";

  // Create a new list of regions based on the new map image
  const regions = ["천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군", "영암군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"];
  regions.forEach(function(region) {
    const li = document.createElement("li");
    li.textContent = region;
    regionList.appendChild(li);
  });
}

// Check if the click event is in the second region
else if (x >= 212 && x <= 252 && y >= 145 && y <= 221) {
  // Change the image source to map16.png
  image.src = "https://raw.githubusercontent.com/Nahyeji/website/main/images/map16.png";
  
  // Get the region list element
  const regionList = document.querySelector(".region-list ul");
  
  // Clear the current list of regions
  regionList.innerHTML = "";
  
  // Create a new list of regions based on the new map image
  const regions = ["청주시", "충주시", "제천시", "청원군", "보은군", "옥천군", "영동군", "진천군", "괴산군", "음성군", "단양군", "증평군"];
  
  regions.forEach(function(region) {
  const li = document.createElement("li");
  li.textContent = region;
  regionList.appendChild(li);
  });
  }

});

document.querySelectorAll('.region-list li').forEach((region) => {
  region.addEventListener('click', (event) => {
    // Deselect the previous selected region
    const selectedRegion = document.querySelector('.region-list li.selected');
    if (selectedRegion) {
      selectedRegion.classList.remove('selected');
    }

    // Select the clicked region
    event.target.classList.add('selected');
  });
});





function calculateSum() {
  const regionList = document.querySelector(".region-list ul");
  const selectedRegion = regionList.querySelector("li.selected");
  const regionName = selectedRegion.textContent;
  const startDate = startDateElement.value;
  const endDate = endDateElement.value;
  let sum = 0;

  // Fetch data from CSV file using Ajax
  fetch(document.getElementById('csv-file').value)
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n');
      const header = rows[0].split(',');
      const columnIndex = header.indexOf(regionName);

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',');
        const date = row[0];
        if (date >= startDate && date <= endDate) {
          sum += Number(row[columnIndex]);
        }
      }

      // Calculate solar insolation in W/m²
      const insolation = (sum * 24) / 1000;

      // Update insolation element value
      insolationElement.value = insolation.toFixed(2);

      // Calculate power output and store it in a variable
      const area = areaElement.value;
      const efficiency = efficiencyElement.value;
      const performanceRatio = performanceRatioElement.value;
      const powerOutputValue = area * efficiency * sum * performanceRatio

      // Update power output element with the calculated value
      powerOutputElement.innerHTML = powerOutputValue.toFixed(2) + ' kW';
    });
}

// Add click event listener to region list
const regionList = document.querySelector(".region-list ul");
regionList.addEventListener("click", function(event) {
  // Remove "selected" class from all regions
  const regions = regionList.querySelectorAll("li");
  regions.forEach(function(region) {
    region.classList.remove("selected");
  });
  // Add "selected" class to clicked region
  const clickedRegion = event.target;
  clickedRegion.classList.add("selected");
});


const calculateDateButton = document.getElementById("calculate-date");
calculateDateButton.addEventListener("click", () => {
  const startDateInput = document.getElementById("start-date");
  const endDateInput = document.getElementById("end-date");
  const numYearsInput = document.getElementById("num-years");

  const startDate = new Date(startDateInput.value);
  const numYears = parseInt(numYearsInput.value);

  if (isNaN(numYears) || numYears < 1) {
    alert("Please enter a valid number of years.");
    return;
  }

  const endDate = new Date(startDate);
  endDate.setFullYear(startDate.getFullYear() + numYears);
  endDateInput.value = endDate.toISOString().slice(0, 10);

  const diffInMilliseconds = endDate.getTime() - startDate.getTime();
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  const resultElement = document.getElementById("result");
  resultElement.innerText = `설치 기간 : ${diffInDays} `;
});

const csvInput = document.getElementById('csv-file');

csvInput.addEventListener('change', () => {
  // Clear capacity input field
  capacityElement.value = '';
});

function calculatePower() {
  const capacity = capacityElement.value;
  const area = (capacity * 5.4).toFixed(2);
  areaElement.innerText = parseFloat(area).toLocaleString();

  const efficiency = efficiencyElement.value;
  const insolation = insolationElement.value;
  const performanceRatio = performanceRatioElement.value;
  const slopeIrradiationRatio = slopeIrradiationRatioElement.value;
  const powerOutput = area * efficiency * insolation * performanceRatio * slopeIrradiationRatio;

  // Update power output element with the calculated value
  const formattedPowerOutput = parseFloat(powerOutput).toLocaleString('en-US');
  powerOutputElement.innerHTML = `${formattedPowerOutput} kW`;

  // Remove all previous child elements from power-output-container
  const powerOutputContainer = document.getElementById('power-output-container');
  powerOutputContainer.innerHTML = '';

  // Store the calculated power output value in a new container element
  const newPowerOutput = document.createElement('p');
  const formattedPowerOutputKWh = parseFloat(powerOutput / 1000).toFixed(2).toLocaleString('en-US');
  newPowerOutput.innerText = `Power output: ${formattedPowerOutputKWh} MWh`;
  powerOutputContainer.appendChild(newPowerOutput);
}

  const copyButton = document.getElementById('Copy Generation');
  const powerOutput = document.getElementById('power-output');
  
  copyButton.addEventListener('click', () => {
    var copy = powerOutput.innerText;
    navigator.clipboard.writeText(copy)
      .then(() => {
        console.log('Copied to clipboard:', copy);
        alert('태양광 발전량 값 복사했습니다.'  + copy);
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert('에러. ' + copy);
      });
  });



calculateButton.addEventListener('click', calculatePower);

function updateCostsBasedOnCapacity() {
  const facilityCapacity = document.getElementById('facility-capacity').value;
  const installationCost = facilityCapacity * 1300000;
  const omCost = facilityCapacity * 20000;
  const inverterReplacementCost = facilityCapacity * 100000;

  document.getElementById('installation-cost').value = installationCost;
  document.getElementById('om-cost').value = omCost;
  document.getElementById('inverter-replacement-cost').value = inverterReplacementCost;
}



function calculateCashFlow1(scenario, years, solarPowerGenerationValues, installationCost, farmlandPrice, omCost, inverterReplacementCost, electricitySalesPrice, panelEfficiencyReduction, inflation, discountRate) {
  const sellFarmland = document.getElementById('sell-farmland').value === 'sell';
  const npvValues = [];
  const bcValues = []; 
  const breakEvenPoints = [];


  solarPowerGenerationValues.forEach((solarPowerGeneration, index) => {
    const cashFlows = [];
    let totalBenefits = 0;
    let totalCosts = 0;
    let cumulativeCashFlows = 0;

    for (let year = 0; year <= years; year++) {
      let cashFlow = 0;

      // Installation cost and farmland price in year 0
      if (year === 0) {
        cashFlow -= installationCost;
        cashFlow -= farmlandPrice;
      }

      // OM cost and inverter replacement cost
      if (year > 0) {
        cashFlow -= omCost * Math.pow(1 + inflation, year - 1);

        if (year % 7 === 0) {
          cashFlow -= inverterReplacementCost * Math.pow(1 + inflation, year - 1);
        }
      }

      // Solar power generation and electricity sales price
      if (year > 0) {
        const annualSolarPowerGeneration = solarPowerGeneration / years;
        const adjustedGeneration = annualSolarPowerGeneration * Math.pow(1 - panelEfficiencyReduction, year);
        cashFlow += adjustedGeneration * electricitySalesPrice * Math.pow(1 + inflation, year - 1);
      }

      // Farmland sale in the last year
      if (year === years) {
      if (sellFarmland) {
      const adjustedSaleValue = farmlandPrice * Math.pow(1 + inflation, year - 1);
      cashFlow += adjustedSaleValue;
      }

      
}
  // Calculate the present value of cash flows and add it to the array
      cashFlows.push(cashFlow);
      cumulativeCashFlows += cashFlow;

      if (!breakEvenPoints[index] && cumulativeCashFlows >= 0) {
        breakEvenPoints[index] = year;
      }
      
      if (cashFlow > 0) {
        totalBenefits += cashFlow / Math.pow(1 + discountRate, year);
      } else {
        totalCosts -= cashFlow / Math.pow(1 + discountRate, year);
      }
    }

    // Calculate the BC ratio
    const bcRatio = totalBenefits / totalCosts;
    bcValues.push(bcRatio);

    console.log("Cash flow for scenario " + scenario + " - Solar Power Generation " + (index + 1) + ": ", cashFlows);
    const npv = cashFlows.reduce((acc, curr, i) => {
      return acc + curr / Math.pow(1 + discountRate, i); // Apply the discount rate here
    }, 0);

    npvValues.push(npv);
    
    // Display the NPV value
    const npvResult = document.getElementById('npv-result-' + (index + 1));
    npvResult.innerHTML = 'NPV는 ' + numberWithCommas(npv.toFixed(2)) + '입니다.';
  
    // Display the break-even point
    const breakEvenResult = document.getElementById('break-even-result-' + (index + 1));
    const breakEvenPoint = cashFlows.findIndex(value => value >= 0);
    if (breakEvenPoint !== -1) {
      breakEvenResult.innerHTML = 'Break-even point는 ' + numberWithCommas(breakEvenPoint) + '년 입니다.';
    } else {
      breakEvenResult.innerHTML = 'Break-even point가 없습니다.';
    }

    // Create an array of years for the chart labels
    const yearsArray = Array.from({ length: years + 1 }, (_, i) => i);

    // Reset the canvas before creating a new chart
    resetCanvas('cash-flow-chart-' + (index + 1));

    createChart('cash-flow-chart-' + (index + 1), yearsArray, cashFlows, index + 1, solarPowerGeneration);

  });
}
const npvResults = {
  'RCP2.6': document.getElementById('npv-result-1').textContent,
  'RCP4.5': document.getElementById('npv-result-2').textContent,
  'RCP6.0': document.getElementById('npv-result-3').textContent,
  'RCP8.5': document.getElementById('npv-result-4').textContent,
};

const bcResults = {
  'RCP2.6': document.getElementById('bc-result-1').textContent,
  'RCP4.5': document.getElementById('bc-result-2').textContent,
  'RCP6.0': document.getElementById('bc-result-3').textContent,
  'RCP8.5': document.getElementById('bc-result-4').textContent,
};

console.log("Total benefits: ", totalBenefits);
console.log("Total costs: ", totalCosts);


function resetCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (canvas) {
    canvas.parentElement.removeChild(canvas);
  }

  const newCanvas = document.createElement('canvas');
  newCanvas.id = canvasId;
  document.body.appendChild(newCanvas);
}

function createChart(chartId, labels, data, datasetLabel, solarPowerGeneration) {
  const scenarioLabels = ['2.6', '4.5', '6.0', '8.5'];
  const ctx = document.getElementById(chartId).getContext('2d');

  const backgroundColors = data.map(value => value < 0 ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 0, 255, 0.2)');
  const borderColors = data.map(value => value < 0 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Cash Flow - Scenario ' + scenarioLabels[datasetLabel - 1] + ' - Solar Power Generation ' + solarPowerGeneration,
        data: data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

