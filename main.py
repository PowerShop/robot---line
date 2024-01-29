def on_button_pressed_b():
    if PTKidsBITRobot.distance_read() >= 8:
        PTKidsBITRobot.forward_time(500, 50, 100, 0.03, 0.01)
        PTKidsBITRobot.forward_line(Find_Line.CENTER, 70, 100, KP, KD)
        PTKidsBITRobot.motor_stop()
        basic.pause(100)
        PTKidsBITRobot.forward_time(200, 50, 100, 0.05, 0.03)
        if randint(0, 1) == 1:
            PTKidsBITRobot.turn_line(Turn_Line.LEFT, 50, Turn_ADC.ADC3, 150)
            PTKidsBITRobot.motor_stop()
            basic.pause(100)
        else:
            PTKidsBITRobot.turn_line(Turn_Line.RIGHT, 50, Turn_ADC.ADC2, 150)
            PTKidsBITRobot.motor_stop()
            basic.pause(100)
    else:
        PTKidsBITRobot.servo_write(Servo_Write.P8, 110)
        basic.pause(2000)
        PTKidsBITRobot.servo_write(Servo_Write.P12, 0)
        basic.pause(2000)
        PTKidsBITRobot.servo_write(Servo_Write.P8, 15)
input.on_button_pressed(Button.B, on_button_pressed_b)

Distance = 0
KD = 0
KP = 0
PTKidsBITRobot.set_sensor_color_all(LED_Color.BLUE)
PTKidsBITRobot.servo_write(Servo_Write.P8, 110)
PTKidsBITRobot.servo_write(Servo_Write.P12, 3)
PTKidsBITRobot.sensor_calibrate()
PTKidsBITRobot.servo_write(Servo_Write.P8, 15)
PTKidsBITRobot.servo_write(Servo_Write.P12, 170)
KP = 0.08
KD = 0.06
basic.show_icon(IconNames.HAPPY)

def on_every_interval():
    global Distance
    Distance = 0
loops.every_interval(1, on_every_interval)
