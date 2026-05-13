## pxt-design-and-automate-accessory-kit
Custom blocks for the Design & Automate Accessory Kit Board

The main Design & Automate Accessory Kit blocks include basic functionality to interact with an attached Pump, Servo or Soil Prong.

For more information and educational resources, please visit (https://kitronik.co.uk).

For information on the product, please visit (https://kitronik.co.uk/56140).

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open **[https://makecode.microbit.org/](https://makecode.microbit.org/)**
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **[pxt-design-and-automate-accessory-kit](https://github.com/KitronikLtd/pxt-design-and-automate-accessory-kit)** and import

# Main Design & Automate Accessory Kit Board Blocks

The following three blocks are available under the Design and Automate extension tab. 

### turn pump [on/off]

Turns the output labelled as "pump" on or off.
The state of the output can be toggled by a drop down menu. 
By default, the pump is set to off.

In this example, the pump output on the Design & Automate Accessory Kit Board is turned on for a second, before turning off:
```blocks
designAndAutomate.turnPump(designAndAutomate.PumpState.On)
basic.pause(1000)
designAndAutomate.turnPump(designAndAutomate.PumpState.Off)
```

### set servo angle [value] degrees

When active, the servo motor will move to the angle specified. 
This block is a wrapper to the standard Makecode "set servo [Pin] angle to [value]°"
In this case, the pin is predefined to pin P1. 

In the below example, a servo connected to the servo connection on the Design & Automate Accessory Kit Board moves to
the 0° position, and then to 180° five seconds later:
```blocks
designAndAutomate.setServoAngle(0)
basic.pause(5000)
designAndAutomate.setServoAngle(180)
```

### Soil Prong Moisture Level

Returns a value between 1 and 1023, dependent on the status of the soil prong. 

In the below example, when the moisture level falls below a threshold, the pump output turns on.
When the soil moisture threshold is exceeded, the pump turns off:
```blocks
let moisture = 0
basic.forever(function () {
    moisture = designAndAutomate.soilProngMoisture()
    if (moisture <= 400) {
        designAndAutomate.turnPump(designAndAutomate.PumpState.On)
    } else {
        designAndAutomate.turnPump(designAndAutomate.PumpState.Off)
    }
})
```

## License

MIT

## Supported targets

* for PXT/microbit
