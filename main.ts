pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (pins.digitalReadPin(DigitalPin.P0) != 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
