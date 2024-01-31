function Loop () {
    while (PTKidsBITRobot.distanceRead() > 9) {
        if (startState == 0) {
            getOutFromStart()
        } else {
            PTKidsBITRobot.Follower(
            65,
            100,
            0.03,
            0.04
            )
        }
    }
    PTKidsBITRobot.motorStop()
    basic.pause(5000)
    Loop()
}
function getOutFromStart () {
    PTKidsBITRobot.motorGo(50, 50)
    basic.pause(300)
    PTKidsBITRobot.ForwardTIME(
    200,
    65,
    100,
    0.03,
    0.04
    )
    PTKidsBITRobot.motorStop()
    basic.pause(300)
    PTKidsBITRobot.ForwardLINECount(
    Find_Line.Center,
    1,
    65,
    100,
    0.03,
    0.04
    )
    PTKidsBITRobot.motorStop()
    basic.pause(2000)
    startState += 1
}
input.onButtonPressed(Button.B, function () {
    Loop()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 15)
    PTKidsBITRobot.servoWrite(Servo_Write.P12, 170)
})
let startState = 0
basic.showIcon(IconNames.Sad)
PTKidsBITRobot.setSensorColorAll(LED_Color.Blue)
PTKidsBITRobot.servoWrite(Servo_Write.P12, 3)
PTKidsBITRobot.servoWrite(Servo_Write.P8, 110)
PTKidsBITRobot.SensorCalibrate()
PTKidsBITRobot.servoWrite(Servo_Write.P12, 170)
PTKidsBITRobot.servoWrite(Servo_Write.P8, 15)
startState = 0
basic.showIcon(IconNames.Happy)
