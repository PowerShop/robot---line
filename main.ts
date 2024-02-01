function Loop () {
    while (PTKidsBITRobot.distanceRead() > 9) {
        if (startState == 0) {
            getOutFromStart()
        } else {
            PTKidsBITRobot.Follower(
            65,
            100,
            0.03,
            0.015
            )
        }
    }
    PTKidsBITRobot.motorStop()
    basic.pause(5000)
    Loop()
}
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    servos.P1.setAngle(170)
})
function getOutFromStart () {
    PTKidsBITRobot.motorGo(50, 50)
    basic.pause(300)
    PTKidsBITRobot.ForwardTIME(
    200,
    65,
    100,
    0.03,
    0.015
    )
    PTKidsBITRobot.motorStop()
    basic.pause(300)
    PTKidsBITRobot.ForwardLINECount(
    Find_Line.Center,
    2,
    65,
    100,
    0.03,
    0.015
    )
    PTKidsBITRobot.motorStop()
    randomLeftRight()
    basic.pause(2000)
    startState += 1
}
function randomLeftRight () {
    if (randint(0, 1) == 0) {
        PTKidsBITRobot.TurnLINE(
        Turn_Line.Left,
        70,
        Turn_ADC.ADC1,
        200
        )
        PTKidsBITRobot.motorStop()
    } else {
        PTKidsBITRobot.TurnLINE(
        Turn_Line.Right,
        70,
        Turn_ADC.ADC4,
        200
        )
        PTKidsBITRobot.motorStop()
    }
}
input.onButtonPressed(Button.B, function () {
    Loop()
})
let startState = 0
basic.showIcon(IconNames.Sad)
PTKidsBITRobot.setSensorColorAll(LED_Color.Blue)
PTKidsBITRobot.servoWrite(Servo_Write.P12, 90)
PTKidsBITRobot.servoWrite(Servo_Write.P8, 110)
PTKidsBITRobot.SensorCalibrate()
PTKidsBITRobot.servoWrite(Servo_Write.P12, 170)
PTKidsBITRobot.servoWrite(Servo_Write.P8, 15)
startState = 0
basic.showIcon(IconNames.Happy)
