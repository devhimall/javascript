// defining TemperatureConversion function to convert temperature based on provided parameters/arguments.

function temperatureConversion(temp, convert) {
  return convert === "c"
    ? `${temp}°F is ${(temp - 32) * (5 / 9)}°C`
    : `${temp}°C is ${temp * (9 / 5) + 32}°F`
}

// storing the results into variables
let resultc = temperatureConversion(45, "c")
let resultf = temperatureConversion(90, "f")

// consoling the results
console.log(resultc)
console.log(resultf)
