let conductividad = 0
let proporcionalidad = 0
basic.forever(function () {
    basic.clearScreen()
    conductividad = pins.analogReadPin(AnalogPin.P0)
    proporcionalidad = pins.map(
    0,
    0,
    1023,
    0,
    100
    )
    if (proporcionalidad >= 20 && proporcionalidad <= 50) {
        led.plot(0, 4)
    } else if (proporcionalidad > 50) {
        led.plot(0, 4)
        led.plot(0, 3)
        led.plot(0, 2)
        led.plot(0, 1)
        led.plot(0, 0)
    }
    basic.pause(500)
})
