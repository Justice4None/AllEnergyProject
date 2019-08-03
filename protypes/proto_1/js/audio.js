var audio = {
    files: ["acolyte-chant-1", "acolyte-chant-2", "acolyte-chant-3", "acolyte-chant-4", "acolyte-chant-5", "acolyte-chant-6", "acolyte-chant-7", "acolyte-chant-8", "acolyte-chant-9", "acolyte-chant-10", "acolyte-chant-11", "acolyte-chant-12", "acolyte-chant-13", "acolyte-chant-long", "acolyte-march-footsteps-1", "arrow-impact-1", "bird-calls-high", "bird-calls-low", "desolving", "insect-swarm-1", "invalid-click", "level-up", "magic-spell-1", "monster-sounds-1", "monster-sounds-2", "monster-sounds-3", "monster-sounds-4", "monster-sounds-5", "monster-sounds-6", "monster-sounds-7", "monster-sounds-8", "monster-sounds-9", "monster-sounds-10", "new-map", "succubus-fire-1", "succubus-laugh-1"],
    noiseMakers: [],
    //EXAMPLE MASTERS SOUNDS, NOT REPRESENTATIVE OF FINAL AUDIO
    masterSounds: ["music-track-1", "music-track-2"],
    activeSounds: [],
    load: function () {
        for (i = 0; i < this.masterSounds.length; i++) {
            masterSounds[i] = new Audio("assets/audio/music" + masterSounds[i] + ".mp3")
        }
        for (i = 0; i < this.files.length; i++) {
            files[i] = new Audio("assets/audio/sfx" + files[i] + ".mp3")
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