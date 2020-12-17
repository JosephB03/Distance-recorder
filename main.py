def All_Lights_Off():
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P2, 0)

def on_received_string(receivedString):
    global Distance
    All_Lights_Off()
    if Distance < radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH):
        Distance = radio.received_packet(RadioPacketProperty.SIGNAL_STRENGTH)
        pins.digital_write_pin(DigitalPin.P0, 1)
    else:
        pins.digital_write_pin(DigitalPin.P1, 1)
radio.on_received_string(on_received_string)

Distance = 0
radio.set_group(25)
Distance = 0