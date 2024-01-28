def on_button_pressed_b():
    PTKidsBITRobot.forward_line(Find_Line.CENTER, 50, 100, 0.01, 0)
    PTKidsBITRobot.turn_line(Turn_Line.LEFT, 50, Turn_ADC.ADC2, 200)
    PTKidsBITRobot.forward_line(Find_Line.CENTER, 40, 100, 0.01, 0)
    PTKidsBITRobot.turn_line(Turn_Line.RIGHT, 80, Turn_ADC.ADC3, 180)
    PTKidsBITRobot.forward_line(Find_Line.RIGHT, 40, 100, 0.01, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

PTKidsBITRobot.value_sensor_set([0, 1], [0, 1])
PTKidsBITRobot.sensor_calibrate()
PTKidsBITRobot.servo_write(Servo_Write.P8, 15)
PTKidsBITRobot.servo_write(Servo_Write.P12, 170)
