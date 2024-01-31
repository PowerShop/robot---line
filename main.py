def checkLine():
    if PTKidsBITRobot.get_position() != 3000 or PTKidsBITRobot.get_position() != 0:
        if PTKidsBITRobot.adc_read(ADC_Read.ADC3) >= 20 or PTKidsBITRobot.adc_read(ADC_Read.ADC3) <= 45:
            PTKidsBITRobot.follower(65, 100, 0.03, 0.04)
        else:
            PTKidsBITRobot.motor_go(-50, -50)
            basic.pause(300)
    else:
        PTKidsBITRobot.motor_stop()
def Loop():
    while PTKidsBITRobot.distance_read() > 9:
        if startState == 0:
            getOutFromStart()
        else:
            checkLine()
    PTKidsBITRobot.motor_stop()
    basic.pause(5000)
    Loop()
def getOutFromStart():
    global startState
    PTKidsBITRobot.motor_go(50, 50)
    basic.pause(300)
    PTKidsBITRobot.forward_time(200, 65, 100, 0.03, 0.04)
    PTKidsBITRobot.motor_stop()
    basic.pause(300)
    PTKidsBITRobot.forward_line_count(Find_Line.CENTER, 1, 65, 100, 0.03, 0.04)
    PTKidsBITRobot.motor_stop()
    basic.pause(2000)
    startState += 1

def on_button_pressed_b():
    Loop()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    PTKidsBITRobot.servo_write(Servo_Write.P8, 15)
    PTKidsBITRobot.servo_write(Servo_Write.P12, 170)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

startState = 0
basic.show_icon(IconNames.SAD)
PTKidsBITRobot.set_sensor_color_all(LED_Color.BLUE)
PTKidsBITRobot.servo_write(Servo_Write.P12, 3)
PTKidsBITRobot.servo_write(Servo_Write.P8, 110)
PTKidsBITRobot.sensor_calibrate()
PTKidsBITRobot.servo_write(Servo_Write.P12, 170)
PTKidsBITRobot.servo_write(Servo_Write.P8, 15)
startState = 0
basic.show_icon(IconNames.HAPPY)