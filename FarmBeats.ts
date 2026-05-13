/**
 * Blocks for Driving the Design & Automate Accessory Kit
 */
//% weight=100 color=#00A654 icon="\uf06c" block="FarmBeats"
//% group = '["Pump",  "Servo", "Soil Prong"]'

namespace designAndAutomate {

    let isPumpOn: boolean = false; // Track whether the pump is on or off
    
    /**
     * Turn Pump ON and OFF
     */
    export enum PumpState {
        //% block="on"
        On,
        //% block="off"
        Off
    }

    //////////////////
    ///Pump-ON-OFF///
    ////////////////

    /**
     * turn pump [pumpstate]: turns the design and automate accessory kit board pump output on or off, as defined by a drop down menu.
     * @param pumpstate : on - turns the pump output on. off - turns the pump output off.
     */
    //% blockId=designandautomate_turnPump
    //% block="turn pump |%pumpstate||"
    //% weight=100 blockGap=8
    //% color=#00A654
    //% group="Pump"
    //% x.min=0 x.max=1
    //% x.fieldOptions.precision=1
    export function turnPump(pumpstate: PumpState): void {
        isPumpOn = pumpstate === PumpState.On
        if (isPumpOn) {
            pins.digitalWritePin(DigitalPin.P0, 1);
        }

        else {
            pins.digitalWritePin(DigitalPin.P0, 0);
        }
    }

    //////////////
    ////SERVO/////
    //////////////

    /**
     * set servo angle [degree] degrees: moves an attached servo motor connected to the design and automate accessory kit board on the servo connector to the requested angle, defined by tbe parameter "degrees".
     * @param degrees : how many degrees the attached servo motor needs to turn, for example, 90° 
     */
    //% blockId=designandautomate_setServoAngle
    //% block="set servo angle |%degrees| degrees"
    //% color=#00A654
    //% degrees.min=0 degrees.max=180
    //% degrees.defl=90
    //% degrees.shadow="protractorPicker"
    //% weight=100 blockGap=8
    //% group="Servo"
    //% hiddenParts=microservo
    export function setServoAngle(degrees: number) {
        // Check if the degrees are greater than 180
        if (degrees > 180 || degrees < 0) {
            console.error("Error: Angle cannot be more than 180 degrees or less then 0");
            return;
        }

        // If degrees are within the valid range, set the servo angle
        pins.servoWritePin(AnalogPin.P1, degrees);

    }


    /////////////////////////
    ///SOIL-PRONG-MOISTURE///
    /////////////////////////

    /**
     * soil prong moisture: returns a numerical value between 1 and 1023, depending on the detected moisture from the soil prong.
     */

    //% blockId=designandautomate_soilProngMoisture
    //% block="soil prong moisture"
    //% weight=100 blockGap=8
    //% color=#00A654
    //% group="Soil Prong"
    //% x.min=0 x.max=1
    //% x.fieldOptions.precision=1
    export function soilProngMoisture(): number {
        let soilMoisture = pins.analogReadPin(AnalogPin.P2)
        return soilMoisture
    }

}
