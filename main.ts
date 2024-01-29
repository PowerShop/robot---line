input.onButtonPressed(Button.B, function () {
    while (PTKidsBITRobot.distanceRead() > 9) {
        PTKidsBITRobot.Follower(
        70,
        100,
        0.03,
        0.005
        )
    }
    PTKidsBITRobot.motorStop()
    basic.pause(300)
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 105)
    basic.pause(300)
    PTKidsBITRobot.servoWrite(Servo_Write.P12, 90)
    basic.pause(3500)
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 15)
    basic.pause(300)
    PTKidsBITRobot.ForwardLINE(
    Find_Line.Center,
    70,
    100,
    0.03,
    0
    )
    PTKidsBITRobot.ForwardTIME(
    200,
    50,
    100,
    0.03,
    0.01
    )
    PTKidsBITRobot.TurnLINE(
    Turn_Line.Left,
    70,
    Turn_ADC.ADC2,
    250
    )
    PTKidsBITRobot.ForwardTIME(
    200,
    70,
    100,
    0.03,
    0
    )
    basic.pause(1000)
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 110)
    basic.pause(300)
    PTKidsBITRobot.servoWrite(Servo_Write.P12, 170)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 15)
    PTKidsBITRobot.servoWrite(Servo_Write.P12, 170)
})
PTKidsBITRobot.setSensorColorAll(LED_Color.Blue)
PTKidsBITRobot.servoWrite(Servo_Write.P8, 110)
basic.pause(300)
PTKidsBITRobot.servoWrite(Servo_Write.P12, 3)
PTKidsBITRobot.SensorCalibrate()
PTKidsBITRobot.servoWrite(Servo_Write.P8, 15)
basic.pause(300)
PTKidsBITRobot.servoWrite(Servo_Write.P12, 170)
basic.showIcon(IconNames.Happy)
