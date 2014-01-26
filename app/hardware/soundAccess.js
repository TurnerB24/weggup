/**
 * This controller controls the ringing. It creates cronjobs for the alarms of the currently active user
 * it is called each time, the alarms get modified
 */

/**
 * Module dependencies.
 */
var _ = require('underscore');

var spawn = require('child_process').spawn;


exports.play = function (soundFile, loop, volume) {
    var sound;
    var args = [];
    var player = {};
    player.sendCommand = function (cmd) {
       try{
        sound.stdin.write(cmd + "\n");
       }catch(e){}
    };
    player.setInfinite = function () {
        player.sendCommand('loop 0');
    };

    player.play = function () {
        player.sendCommand('pause');
    };
    player.pause = function () {
        player.sendCommand('pause');
    };
    player.volume = function (vol) {

        player.sendCommand('volume ' + vol + ' 1');
    };
    player.stop = function(){
        sound.removeAllListeners('exit');
        sound.kill('SIGTERM');
    };
    player.on = function(event,callback){
        sound.on(event,callback);
    };
    args.push('-slave');
    if(loop){
        args.push('-loop');
        args.push('0');
    }
    if(volume){
        args.push('-volume');
        args.push(volume+"");
    }
    args.push(soundFile);


    sound = spawn('mplayer', args);
    player.pause();




    return player;


};