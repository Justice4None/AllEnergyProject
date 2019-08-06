var audio = {
    acolytes: ["acolyte-chant-1", "acolyte-chant-2", "acolyte-chant-3", "acolyte-chant-4", "acolyte-chant-5", "acolyte-chant-6", "acolyte-chant-7", "acolyte-chant-8", "acolyte-chant-9", "acolyte-chant-10", "acolyte-chant-11", "acolyte-chant-12", "acolyte-chant-13", "acolyte-chant-long", "acolyte-march-footsteps-1", "desolving"],
    monsters: ["monster-sound-1", "monster-sound-2", "monster-sound-3", "monster-sound-4", "monster-sound-5", "monster-sound-6", "monster-sound-7", "monster-sound-8", "monster-sound-9", "monster-sound-10"],
    wizards: ["nature-wizard-dull", "nature-wizard-metallic"],
    towers: [],
    menus: [],
    succubus: [],
    archers: [],
    swordsman: [],
    ambiance: [],
    misc: [],
    titan: [],
    creatures: [],
    mama: [],
    //EXAMPLE MASTERS SOUNDS, NOT REPRESENTATIVE OF FINAL AUDIO
    masterSounds: ["music-track-1", "music-track-2"],
    activeSounds: [],
    load: function () {
        for (i = 0; i < this.masterSounds.length; i++) {
            masterSounds[i] = new Audio("audio/sfx/master" + masterSounds[i] + ".mp3")
        }
        for (i = 0; i < this.acolytes.length; i++) {
            acolytes[i] = new Audio("audio/sfx/acolytes" + acolytes[i] + ".mp3")
        }
        for (i = 0; i < this.monsters.length; i++) {
            monsters[i] = new Audio("audio/sfx/monsters" + monsters[i] + ".mp3")
        }
        for (i = 0; i < this.wizards.length; i++) {
            wizards[i] = new Audio("audio/sfx/wizards/fire" + wizards[i] + ".mp3")
        }
        for (i = 0; i < this.wizards.length; i++) {
            wizards[i] = new Audio("audio/sfx/wizards/ice" + wizards[i] + ".mp3")
        }
        for (i = 0; i < this.wizards.length; i++) {
            wizards[i] = new Audio("audio/sfx/wizards/nature" + wizards[i] + ".mp3")
        }
        for (i = 0; i < this.towers.length; i++) {
            towers[i] = new Audio("audio/sfx/towers" + towers[i] + ".mp3")
        }
        for (i = 0; i < this.menus.length; i++) {
            menus[i] = new Audio("audio/sfx/menus" + menus[i] + ".mp3")
        }
        for (i = 0; i < this.succubus.length; i++) {
            succubus[i] = new Audio("audio/sfx/succubus" + succubus[i] + ".mp3")
        }
        for (i = 0; i < this.archers.length; i++) {
            archers[i] = new Audio("audio/sfx/archers" + archers[i] + ".mp3")
        }
        for (i = 0; i < this.swordsman.length; i++) {
            swordsman[i] = new Audio("audio/sfx/swordsman" + swordsman[i] + ".mp3")
        }
        for (i = 0; i < this.ambiance.length; i++) {
            ambiance[i] = new Audio("audio/sfx/ambiance" + ambiance[i] + ".mp3")
        }
        for (i = 0; i < this.misc.length; i++) {
            misc[i] = new Audio("audio/sfx/misc" + misc[i] + ".mp3")
        }
        for (i = 0; i > this.titan.length; i++) {
            titan[i] = new Audio("audio/sfx/titan" + titan[i] + ".mp3")
        }
        for (i = 0; i < this.creatures.length; i++) {
            creatures[i] = new Audio("audio/sfx/creatures" + creatures[i] + ".mp3")
        }
        for (i = 0; i < this.mama.length; i++) {
            mama[i] = new Audio("audio/sfx/mama" + mama[i] + ".mp3")
        }
    },
    play: function () {

    },
    pause: function () {

    },
}

// var my_audio = new Audio("assets/audio/sfx/" + files.length[i] + ".mp3");
// my_audio.src()
// my_audio.play()
// my_audio.pause()