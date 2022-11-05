input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    kitronik_servo_lite.forward()
    basic.pause(1000)
    kitronik_servo_lite.stop()
})
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    kitronik_servo_lite.left()
    basic.pause(1000)
    kitronik_servo_lite.stop()
})
