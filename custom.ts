
/**
 * Use this file to define custom functions and graph blocks.
 * For more information, please go to https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    P1=DigitalPin.P1,
    P2=DigitalPin.P2,
    P3=DigitalPin.P3,
    P4=DigitalPin.P4,
    P5=DigitalPin.P5,
    P6=DigitalPin.P6,
    P7=DigitalPin.P7,
    P8=DigitalPin.P8,
    P9=DigitalPin.P9,
    P10=DigitalPin.P10,
    P11=DigitalPin.P11,
    P12=DigitalPin.P12,
    P13=DigitalPin.P13 
}

/**
* Self-defining graphic blocks
*/
//% weight=100 color=#0fbc11 icon=""
namespace custom {
/**
* TOD1: reset 0 for three color pins of LED or three keys
* @param e1: LED red pin or key
* @param e2: LED Green pin or key
* @param e3: LED Blue pin or key
*/
//% block
export function Reset0pin3(e1: DigitalPin, e2: DigitalPin, e3: DigitalPin): 
void {pins.digitalWritePin(e1, 0);
     pins.digitalWritePin(e2, 0);
     pins.digitalWritePin(e3, 0);
    }

/**
* TOD2: reset 1 for three color pins of LED or three keys
* @param e4: LED red pin or key
* @param e5: LED Green pin or key
* @param e6: LED Blue pin or key
*/
//% block
export function Reset1pin3(e4: DigitalPin, e5: DigitalPin, e6: DigitalPin): 
void {pins.digitalWritePin(e4, 1);
     pins.digitalWritePin(e5, 1);
     pins.digitalWritePin(e6, 1);
    }

/**
* TOD3: reset 0 for two color pins of LED or two keys
* @param e7: LED pin or key
* @param e8: LED pin or key
*/
//% block
export function Reset0pin2(e7: DigitalPin, e8: DigitalPin): 
void {pins.digitalWritePin(e7, 0);
     pins.digitalWritePin(e8, 0);
    }

/**
* TOD4: reset 1 for two color pins of LED or two keys
* @param e9: LED pin or key
* @param e10: LED pin or key
*/
//% block
export function Reset1pin2(e9: DigitalPin, e10: DigitalPin): 
void {pins.digitalWritePin(e9, 1);
     pins.digitalWritePin(e10, 1);
    }
}
