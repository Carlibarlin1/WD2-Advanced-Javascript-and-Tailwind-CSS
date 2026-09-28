/*
Names: Carl Ibarlin, Julian Knight-Alvarez, Yassine Ouzzi
Date:

Program Description:

*/

// Higher-order conversion function
const createConverter = (fromUnit, toUnit) => {
  if (fromUnit === "lb" && toUnit === "kg") {
    return (value) => {
      if (Array.isArray(value)) {
        return value.map((number) => number * 0.453592);
      }

      return value * 0.453592;
    };
  }

  if (fromUnit === "kg" && toUnit === "lb") {
    return (value) => {
      if (Array.isArray(value)) {
        return value.map((number) => number * 2.20462);
      }

      return value * 2.20462;
    };
  }

  if (fromUnit === "c" && toUnit === "f") {
    return (value) => {
      if (Array.isArray(value)) {
        return value.map((number) => (number * 9) / 5 + 32);
      }

      return (value * 9) / 5 + 32;
    };
  }

  if (fromUnit === "f" && toUnit === "c") {
    return (value) => {
      if (Array.isArray(value)) {
        return value.map((number) => ((number - 32) * 5) / 9);
      }

      return ((value - 32) * 5) / 9;
    };
  }
};

// Weight form elements
const weightForm = document.getElementById("weight-form");
const weightInput = document.getElementById("weight-input");
const weightDirection = document.getElementById("weight-direction");
const weightResult = document.getElementById("weight-result");

// Weight form conversion
weightForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = weightInput.value;

  // Check for empty input
  if (input.trim() === "") {
    weightResult.textContent = "Please enter a value.";
    return;
  }

  let value;

  if (input.includes(",")) {
    value = input.split(",").map((number) => Number(number));
  } else {
    value = Number(input);
  }

  // Check for invalid input
  if (Array.isArray(value)) {
    if (value.some((number) => isNaN(number))) {
      weightResult.textContent = "Please enter valid numbers.";
      return;
    }
  } else {
    if (isNaN(value)) {
      weightResult.textContent = "Please enter a valid number.";
      return;
    }
  }

  let converter;

  if (weightDirection.value === "lb-kg") {
    converter = createConverter("lb", "kg");
  } else {
    converter = createConverter("kg", "lb");
  }

  const result = converter(value);

  if (Array.isArray(result)) {
    weightResult.textContent = result
      .map((number) => number.toFixed(2))
      .join(", ");
  } else {
    weightResult.textContent = result.toFixed(2);
  }
});

//Julians part :)
// Distance from elements

const distanceForm = document.getElementById("distance-form");
const distanceInput = document.getElementById("distance-input");
const distanceDirection = document.getElementById("distance-direction");
const distanceResult = document.getElementById("distance-result");

// Distance form conversion 

distanceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = distanceInput.value;

  // Check for empty input

  if (input.trim() === "") {
    distanceResult.textContent = "Please enter a value.";
    return;
  }

  let value;

  // Check if the user entered a list or a single value

  if (input.includes(",")) {
    value = input.split(",").map((number) => Number(number));
  } else {
    value = Number(input);
  }

  // Check for invalid input

  if (Array.isArray(value)) {
    if (value.some((number) => isNaN(number))) {
      distanceResult.textContent = "Please enter valid numbers.";
      return;
    }
  } else {
    if (isNaN(value)) {
      distanceResult.textContent = "Please enter a valid number.";
      return;
    }
  }

  let converter;

  // Choose which distance conversion to use

  if (distanceDirection.value === "mi-km") {
    converter = createConverter("mi", "km");
  } else {
    converter = createConverter("km", "mi");
  }

  const result = converter(value);

  // Display the result

  if (Array.isArray(result)) {
    distanceResult.textContent = result
      .map((number) => number.toFixed(2))
      .join(", ");
  } else {
    distanceResult.textContent = result.toFixed(2);
  }
});


// Temperature form elements
const temperatureForm = document.getElementById("temperature-form");
const temperatureInput = document.getElementById("temperature-input");
const temperatureDirection = document.getElementById("temperature-direction");
const temperatureResult = document.getElementById("temperature-result");

// Temperature form conversion
temperatureForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = temperatureInput.value;

  // Check for empty input
  if (input.trim() === "") {
    temperatureResult.textContent = "Please enter a value.";
    return;
  }

  let value;

  if (input.includes(",")) {
    value = input.split(",").map((number) => Number(number));
  } else {
    value = Number(input);
  }

  // Check for invalid input
  if (Array.isArray(value)) {
    if (value.some((number) => isNaN(number))) {
      temperatureResult.textContent = "Please enter valid numbers.";
      return;
    }
  } else {
    if (isNaN(value)) {
      temperatureResult.textContent = "Please enter a valid number.";
      return;
    }
  }

  let converter;

  if (temperatureDirection.value === "c-f") {
    converter = createConverter("c", "f");
  } else {
    converter = createConverter("f", "c");
  }

  const result = converter(value);

  if (Array.isArray(result)) {
    temperatureResult.textContent = result
      .map((number) => number.toFixed(2))
      .join(", ");
  } else {
    temperatureResult.textContent = result.toFixed(2);
  }
});
// Changes the appearance of the active tab
const setActiveTab = (activeTab) => {
  weightTab.classList.remove("bg-white", "text-blue-600");
  distanceTab.classList.remove("bg-white", "text-blue-600");
  temperatureTab.classList.remove("bg-white", "text-blue-600");

  activeTab.classList.add("bg-white", "text-blue-600");
};
// Tab elements
const weightTab = document.getElementById("weight-tab");
const distanceTab = document.getElementById("distance-tab");
const temperatureTab = document.getElementById("temperature-tab");

// Converter sections
const weightSection = document.getElementById("weight-section");
const distanceSection = document.getElementById("distance-section");
const temperatureSection = document.getElementById("temperature-section");

// Weight tab
weightTab.addEventListener("click", () => {
  weightSection.classList.remove("hidden");
  distanceSection.classList.add("hidden");
  temperatureSection.classList.add("hidden");

  setActiveTab(weightTab);
});

// Distance tab
distanceTab.addEventListener("click", () => {
  weightSection.classList.add("hidden");
  distanceSection.classList.remove("hidden");
  temperatureSection.classList.add("hidden");

  setActiveTab(distanceTab);
});

// Temperature tab
temperatureTab.addEventListener("click", () => {
  weightSection.classList.add("hidden");
  distanceSection.classList.add("hidden");
  temperatureSection.classList.remove("hidden");

  setActiveTab(temperatureTab);
});

setActiveTab(weightTab);
