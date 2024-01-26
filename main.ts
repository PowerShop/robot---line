input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    PTKidsBITRobot.ForwardTIME(
    500,
    50,
    100,
    0.02,
    0
    )
    PTKidsBITRobot.ForwardLINE(
    Find_Line.Center,
    50,
    100,
    0.02,
    0
    )
    PTKidsBITRobot.ForwardTIME(
    100,
    50,
    100,
    0.02,
    0
    )
    PTKidsBITRobot.motorStop()
    basic.pause(100)
})
PTKidsBITRobot.SensorCalibrate()
PTKidsBITRobot.servoWrite(Servo_Write.P8, 110)
PTKidsBITRobot.servoWrite(Servo_Write.P12, 115)
