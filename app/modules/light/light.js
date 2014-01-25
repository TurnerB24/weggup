/**
 * Created by wassi on 19.01.14.
 */

var _ = require('underscore');
var sharedResources = require('./../../services/sharedResources');

var lightAccess = require('./../../hardware/lightAccess');

var settingsManager = require('../../services/settings');
var running = false;





var lightControl = {
    start: function(){
        //TODO: custom color (from Model)
        lightAccess.setColor(255,255,255);
        running = true;
    },
    stop: function(){
        lightAccess.setColor(0,0,0);
        running = false;
    },
    isProcessRunning: function(){
        return running;
    }
};


exports.start = function(){
    sharedResources.light.run(lightControl);
};

exports.stop = function(){
    lightControl.stop();
};



exports.launch = function(){
    //TODO: fetch data from model, call setparams
    exports.start();
};

exports.getIdentifier = function(){
    return {name:"Lamp",identifier:"light/light"};
};