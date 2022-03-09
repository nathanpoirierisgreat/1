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
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(0, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(622, music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(0, music.beat(BeatFraction.Quarter))
        }
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(0, music.beat(BeatFraction.Quarter))
        music.playTone(415, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Double))
        music.playTone(0, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Double))
        music.playTone(0, music.beat(BeatFraction.Quarter))
        music.playTone(392, music.beat(BeatFraction.Quarter))
        music.playTone(349, music.beat(BeatFraction.Quarter))
        music.playTone(311, music.beat(BeatFraction.Quarter))
        music.playTone(294, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(0, music.beat(BeatFraction.Quarter))
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 18; index++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # .
            . # # . .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # #
            . . # # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
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
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(0, music.beat(BeatFraction.Eighth))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Double))
    music.playTone(0, music.beat(BeatFraction.Eighth))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(0, music.beat(BeatFraction.Eighth))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Double))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
}
for (let index = 0; index < 3; index++) {
    music.playTone(622, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(0, music.beat(BeatFraction.Eighth))
}
for (let index = 0; index < 2; index++) {
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Double))
    music.playTone(0, music.beat(BeatFraction.Sixteenth))
}
music.playTone(311, music.beat(BeatFraction.Whole))
music.playTone(415, music.beat(BeatFraction.Whole))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(311, music.beat(BeatFraction.Whole))
music.playTone(311, music.beat(BeatFraction.Breve))
basic.forever(function () {
	
})
