input.touchD0.onEvent(ButtonEvent.Click, function () {
    stepper += 1
})
let stepper = 0
let strip = light.createStrip(pins.A0, 12)
strip.setAll(0xffffff)
forever(function () {
    if (stepper == 1) {
        strip.setAll(0x7f00ff)
    } else if (stepper == 2) {
        strip.setAll(0x007fff)
        strip.setPhotonPosition(0)
        strip.setPhotonPenColor(0x7f00ff)
        for (let index = 0; index < 22; index++) {
            strip.setPhotonMode(PhotonMode.PenDown)
            strip.photonForward(1)
            pause(20)
        }
        strip.photonForward(-1)
        strip.setPhotonMode(PhotonMode.PenUp)
        pause(20)
        for (let index = 0; index < 21; index++) {
            strip.setPhotonMode(PhotonMode.PenDown)
            strip.photonForward(1)
            pause(20)
        }
        strip.photonFlip()
        strip.photonForward(-1)
        pause(20)
    } else if (stepper == 3) {
        strip.setPhotonMode(PhotonMode.Off)
        strip.showAnimationFrame(light.cometAnimation)
    } else if (stepper == 4) {
        strip.showAnimationFrame(light.rainbowAnimation)
    } else if (stepper == 5) {
        stepper = 1
    }
})
