/**
 * Module dependencies.
 */

exports.actuators = {
    red:{
        type:'pwm',
        pin:27
    },
    green:{
        type:'pwm',
        pin:18
    },
    blue:{
        type:'pwm',
        pin:22
    },
    fan:{
        type:'pwm',
        pin:23
    },
    sound:{
        type:'digital',
        pin:0//TODO, implement in hardware
    }
};
exports.sensors = {
    brightness:{
        type:'adc',
        pin:4
    },
    motionPrimary:{
        type:'adc',
        pin:0
    },
    motionSecondary:{
        type:'adc',
        pin:1
    },
    temperatureInner:{
        type:'adc',
        pin:5
    },
    temperatureOuter:{
        type:'adc',
        pin:6
    },
    button:{
        type:'digital',
        pin:17
    }
};

//obsolete, makes no sense inmodel, but useful for reference


/**
 * Article Schema
 */
/*var HardwareSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    modified: {
        type: Date,
        default: Date.now
    },


    actuators:{
        red: {
            mode:{
                type:String,
                default: 'pwm'
            },
            pin:{
                type:String,
                default:27
            }
        },
        green: {
            mode:{
                type:String,
                default: 'pwm'
            },
            pin:{
                type:String,
                default:22
            }

        },
        blue: {
            mode:{
                type:String,
                default: 'pwm'
            },
            pin:{
                type:String,
                default:18
            }

        },
        fan: {
            mode:{default:'pwm'},
            pin:23
        }
    },
    sensors: {
        //use only z-axis for accelerometer. Enough for motion detection
        accelerometer:{
            mode:{
                type:String,
                default: 'spi'
            },
            pin:{
                type:String,
                default:0
            }
        },
        secondaryAccelerometer:{
            mode:{
                type:String,
                default: 'spi'
            },
            pin:{
                type:String,
                default:1
            }
        },
        ambientLight:{
            mode:{
                type:String,
                default: 'spi'
            },
            pin:{
                type:String,
                default:2
            }
        },
        ambientTemperature:{
            mode:{
                type:String,
                default: 'spi'
            },
            pin:{
                type:String,
                default:3
            }
        },
        innerTemperature:{
            mode:{
                type:String,
                default: 'spi'
            },
            pin:{
                type:String,
                default:4
            }

        }

    }

});*/


/**
 * Statics
 */

