// test program for the Kitronik FarmBeats Expansion Board Blocks. Should exercise all IO on the FarmBeats Pump Board,
// as well as all blocks within the FarmBeats Kit extension. 

// infinite loop
basic.forever(function () {
    //print out the current detected moisture onto the micro:bit LED display (value between 1-1023)
    basic.showString("" + (kitronikFarmBeats.soilProngMoisture()))
    //turn the pump output on 
    kitronikFarmBeats.turnPump(kitronikFarmBeats.PumpState.On)
    //set the servo to move to 0°
    kitronikFarmBeats.setServoAngle(0)
    //pause for two seconds to allow for the servo to move and the pump to operate
    basic.pause(2000)
    //turn the pump output off
    kitronikFarmBeats.turnPump(kitronikFarmBeats.PumpState.Off)
    //set the servo to move to 180°
    kitronikFarmBeats.setServoAngle(180)
    //pause for two seconds to allow for the servo to move and the pump to turn off
    basic.pause(2000)
    //loop back to the start
})
