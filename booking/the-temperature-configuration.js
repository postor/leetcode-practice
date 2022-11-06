function processData(input) {
  //Enter your code here
  const { speed, inputs = [], endTime, initialTemperature } = JSON.parse(input)
  const miliToHour = 60 * 60 * 1000
  let cur = initialTemperature
  for (let i = 0; i < inputs.length; i++) {
    const { time, temperature } = inputs[i]
    cur = (i === inputs.length - 1)
      ? heat(cur, temperature, time, endTime)
      : heat(cur, temperature, time, inputs[i + 1].time)
  }
  return cur

  function heat(cur, target, start, end) {
    let hours = (new Date(end) - new Date(start)) / miliToHour
    let fullRun = hours * speed
    let diff = target - cur
    if (fullRun >= Math.abs(diff)) return target
    return diff > 0 ? cur + fullRun : cur - fullRun
  }

}

console.log(processData(`{"speed":10,"inputs":[{"time":"2016-09-11 11:00","temperature":25},{"time":"2016-09-11 12:00","temperature":35}],"endTime":"2016-09-11 12:30","initialTemperature":15}`))