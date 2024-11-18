// defining TemperatureConversion function to convert temperature based on provided parameters/arguments.

function TemperatureConversion(temp, convert) {
  return convert === "c"
    ? `${temp}°F is ${(temp - 32) * (5 / 9)}°C`
    : `${temp}°C is ${temp * (9 / 5) + 32}°F`
}

// storing the results into variables
let resultc = TemperatureConversion(45, "c")
let resultf = TemperatureConversion(90, "f")

// consoling the results
console.log(resultc)
console.log(resultf)
