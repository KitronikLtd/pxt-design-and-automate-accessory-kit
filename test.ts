// test program for the Design And Automate Accessory Kit Blocks. Should exercise all IO on the Design And Automate Accessory Kit Board,
// as well as all blocks within the Design And Automate Accessory Kit extension. 

// infinite loop
basic.forever(function () {
    //print out the current detected moisture onto the micro:bit LED display (value between 1-1023)
    basic.showString("" + (designAndAutomate.soilProngMoisture()))
    //turn the pump output on 
    designAndAutomate.turnPump(designAndAutomate.PumpState.On)
    //set the servo to move to 0°
    designAndAutomate.setServoAngle(0)
    //pause for two seconds to allow for the servo to move and the pump to operate
    basic.pause(2000)
    //turn the pump output off
    designAndAutomate.turnPump(designAndAutomate.PumpState.Off)
    //set the servo to move to 180°
    designAndAutomate.setServoAngle(180)
    //pause for two seconds to allow for the servo to move and the pump to turn off
    basic.pause(2000)
    //loop back to the start
})
