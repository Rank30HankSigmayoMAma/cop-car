input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    pins.analogWritePin(AnalogPin.P8, 1023)
    basic.pause(2500)
    pins.digitalWritePin(DigitalPin.P8, 0)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
        pins.analogWritePin(AnalogPin.P8, 1023)
        basic.pause(2500)
    }
    pins.digitalWritePin(DigitalPin.P8, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P8, 1023)
    basic.pause(2500)
    pins.digitalWritePin(DigitalPin.P8, 0)
})
let volt = 0
let random = randint(100, 1023)
basic.forever(function () {
    volt = pins.analogReadPin(AnalogPin.P1)
    volt = pins.map(
    volt,
    0,
    1023,
    2000,
    1000
    )
    pins.analogSetPeriod(AnalogPin.P0, volt)
    pins.analogWritePin(AnalogPin.P0, 512)
})
