def on_button_pressed_a():
    basic.show_string("A")
    PTKidsBITRobot.forward_time(500, 50, 100, 0.02, 0)
    PTKidsBITRobot.forward_line(Find_Line.CENTER, 50, 100, 0.02, 0)
    PTKidsBITRobot.forward_time(100, 50, 100, 0.02, 0)
    PTKidsBITRobot.motor_stop()
    basic.pause(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

PTKidsBITRobot.sensor_calibrate()
PTKidsBITRobot.servo_write(Servo_Write.P8, 110)
PTKidsBITRobot.servo_write(Servo_Write.P12, 115)
PTKidsBITRobot.motor_write(Motor_Write.MOTOR_LEFT, 0)
PTKidsBITRobot.motor_write(Motor_Write.MOTOR_RIGHT, 0)