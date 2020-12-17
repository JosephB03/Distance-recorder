radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 36) {
        // Shows a tick so you know the signal was from the real sender
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
        // If the signal strength is less than the value stored at distance, it will store the new value and turn on P0, a green LED.
        // If the signal strength is greater than the value stored at distance, it will turn on P1, a red LED
        if (Distance > radio.receivedPacket(RadioPacketProperty.SignalStrength)) {
            Distance = radio.receivedPacket(RadioPacketProperty.SignalStrength)
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
        basic.pause(1000)
        All_Lights_Off()
    }
})
// Shows the value stored at distance
input.onButtonPressed(Button.A, function () {
    basic.showNumber(Distance)
    basic.pause(1000)
    basic.clearScreen()
})
// This function turns off all the LEDs
function All_Lights_Off () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(45)
})
// This sets the radio group and initially sets the Distance variable to 0, which will be used to store distance.
let Distance = 0
radio.setGroup(25)
Distance = 0
