input.onButtonPressed(Button.B, function () {
    PTKidsBITRobot.ForwardTIME(
    500,
    50,
    100,
    0.01,
    0
    )
    PTKidsBITRobot.ForwardLINE(
    Find_Line.Center,
    50,
    100,
    0.01,
    0
    )
    PTKidsBITRobot.ForwardTIME(
    100,
    50,
    100,
    0.01,
    0
    )
    PTKidsBITRobot.motorStop()
    basic.pause(100)
    PTKidsBITRobot.TurnLINE(
    Turn_Line.Left,
    50,
    Turn_ADC.ADC2,
    200
    )
    PTKidsBITRobot.motorStop()
    basic.pause(100)
    PTKidsBITRobot.servoWrite(Servo_Write.P8, 110)
    basic.pause(100)
})
basic.showIcon(IconNames.Yes)
PTKidsBITRobot.setSensorColorAll(LED_Color.Green)
PTKidsBITRobot.SensorCalibrate()
PTKidsBITRobot.servoWrite(Servo_Write.P8, 15)
PTKidsBITRobot.servoWrite(Servo_Write.P12, 170)
