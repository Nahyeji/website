function calculatePower() {
  // Get the input values
  const area = parseFloat(document.getElementById("area").value) || 0;
  const efficiency = parseFloat(document.getElementById("efficiency").value) || 0;
  const insolation = parseFloat(document.getElementById("insolation").value) || 0;
  const performanceRatio = parseFloat(document.getElementById("performance-ratio").value) || 0;

  // Calculate the power output
  const powerOutput = area * efficiency * insolation * performanceRatio;

  // Update the power output value
  const powerOutputSpan = document.getElementById("power-output");
  powerOutputSpan.textContent = powerOutput.toFixed(2) + " W";
}

function calculateNPV() {
  // Get the input values
  const initialInvestment = parseFloat(document.getElementById("initial-investment").value) || 0;
  const cashFlows = [
    parseFloat(document.getElementById("cash-flow-1").value) || 0,
    parseFloat(document.getElementById("cash-flow-2").value) || 0,
    parseFloat(document.getElementById("cash-flow-3").value) || 0,
    parseFloat(document.getElementById("cash-flow-4").value) || 0,
    parseFloat(document.getElementById("cash-flow-5").value) || 0
  ];
  const discountRate = parseFloat(document.getElementById("discount-rate").value) || 0;

  // Calculate the NPV
  let npv = -initialInvestment;
  for (let i = 0; i < cashFlows.length; i++) {
    npv += cashFlows[i] / Math.pow(1 + discountRate / 100, i + 1);
  }

  // Update the NPV value
  const npvSpan = document.getElementById("npv");
  npvSpan.textContent = npv.toFixed(2);
}
// Find the map image and add a click event listener
const mapImage = document.querySelector('#map img');
mapImage.addEventListener('click', function() {
  // Change the image source to map2.png
  mapImage.setAttribute('src', 'images/map2.png');

  // Change the solar panel efficiency value to 0.4
  const efficiencyInput = document.getElementById("efficiency");
  efficiencyInput.value = 0.4;

  // Trigger the calculatePower() function with a value of 100
  const areaInput = document.getElementById("area");
  areaInput.value = 100;
  calculatePower();
});