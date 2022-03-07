input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . # . .
        # . . . #
        # # # # #
        `)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("F F A A D D F F ", 120)
            music.playMelody("G G A A C C E E ", 120)
        }
        music.playMelody("F F F - F E D E ", 120)
        music.playMelody("F G A A A - A G ", 120)
        music.playMelody("F G A B C5 F C5 B ", 120)
        music.playMelody("G G F F G A B C5 ", 120)
        music.playMelody("B A G C D E F F ", 120)
    }
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # .
        . # . # .
        . . # # .
        . # . . .
        . # # # .
        `)
})
for (let index = 0; index < 2; index++) {
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
	
})
