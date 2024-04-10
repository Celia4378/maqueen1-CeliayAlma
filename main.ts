basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.M2)
})
