function hero () {
    heroawsome = sprites.create(img`
. . . . f f f f f f . . . . . . 
. . . f 2 2 2 2 2 2 f . . . . . 
. . f 2 2 2 2 2 2 2 2 f . . . . 
. f 2 2 2 2 2 2 2 2 2 2 f . . . 
. f 2 f 2 2 2 2 f 2 2 2 f . . . 
. f 2 2 f 2 2 f 2 2 2 2 f . . . 
. f 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . f 2 2 2 2 2 f 2 2 2 f f . . 
. . . f f f f f f 2 2 f 2 2 f . 
. . f 2 2 2 2 2 2 f f 2 2 2 2 f 
. f 2 2 2 2 2 f f f 2 2 2 2 f f 
f 2 2 2 2 2 2 f f f 2 2 2 f . . 
f 2 2 2 2 2 2 2 f 2 2 2 2 f . . 
f f 2 2 2 2 2 2 2 2 2 2 f f . . 
. f f 2 2 2 2 2 2 2 2 2 f . . . 
. . f f f f f f f f f f . . . . 
`, SpriteKind.Player)
    heroawsome.setPosition(126, 89)
    controller.moveSprite(heroawsome)
}
function cloud () {
    Cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . b b b b . . . 
. . . . . . b b b 1 1 1 1 b . . 
. . . . . . b 1 1 1 1 1 1 b . . 
. . . . b b 1 1 1 1 1 b b 1 . . 
. . . . b 1 1 1 1 1 1 b b 1 b . 
. . . . 1 1 1 1 1 1 b b 1 b 1 . 
. . . b 1 1 b b b b 1 1 b 1 1 . 
. . b b 1 1 1 b 1 1 b 1 1 1 1 . 
. b b 1 1 1 b b b b b b 1 1 1 1 
. 1 1 1 1 1 1 1 b 1 b 1 1 1 b 1 
. 1 b 1 1 1 b b 1 b 1 1 1 b b 1 
1 b 1 1 1 1 b 1 1 b b b b b 1 1 
1 1 b b b 1 1 b 1 1 b b b b 1 1 
1 1 1 1 1 1 1 1 1 b b b b 1 1 . 
. 1 1 1 1 b b b b b b b 1 1 . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
`, 39, 2)
}
function score () {
    info.changeScoreBy(1)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball()
})
function raindrop () {
    Rain = sprites.createProjectileFromSprite(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 8 1 1 8 8 8 8 8 8 8 1 1 8 8 8 
8 8 1 8 1 8 8 8 8 8 1 8 1 8 8 8 
8 8 1 8 8 1 8 8 8 1 8 8 1 8 8 8 
8 8 1 8 8 8 1 8 1 8 8 8 1 8 8 8 
8 8 1 8 8 8 8 1 8 8 8 8 1 8 8 8 
8 8 1 8 8 8 1 8 1 8 8 8 1 8 8 8 
8 8 1 8 8 1 8 8 8 1 8 8 1 8 8 8 
8 8 1 8 1 8 8 8 8 8 1 8 1 8 8 8 
8 8 1 1 8 8 8 8 8 8 8 1 1 8 8 8 
8 8 1 1 1 1 1 1 1 1 1 1 1 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, Cloud, 100, 100)
    Rain.y += 3
    Rain.x += Math.randomRange(0, 10)
}
function ball () {
    p = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . 
. . . . . . . . . . . . . . . . . . . . b b f f f b . . . . . . 
. . . . . . . . . . . . . . . . . b b b f f f 8 f f b . . . . . 
. . . . . . . . . . . . . . . . b b f f f f f f 8 f a . . . . . 
. . . . . . . . . . . . . . b b f f f f 2 e e e e 8 b a . . . . 
. . . . . . . . . . . . b b b f f f f 2 f e e e 2 e f a . . . . 
. . . . . . . . . . b b 8 f f f f f f e 2 2 2 2 2 e 8 f a . . . 
. . . . . . . b b b 8 8 f f f f f f f e 2 2 2 2 2 e 8 8 a . . . 
. . . . . . b b f 8 f f f f f f f f f b e 2 2 2 e b f 8 f a . . 
. . . b b b f 8 8 f f f f f f f f f f f b e e e b f f 8 f a . . 
. . b f 8 8 8 f f f f f f f f f f f f f f f f f f f f 8 8 a . . 
8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f 8 8 f a . 
8 f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f 8 f a . 
8 8 f f f f f f f 8 8 8 8 8 f f f f f f f f f f f f f f 8 8 a . 
8 8 8 8 8 8 8 f f f 8 8 f f 8 8 8 8 8 8 8 8 8 8 f f f f 8 8 b a 
8 2 2 2 2 f 8 8 8 8 8 8 f f f f 8 8 f f f f f 8 8 8 f f 8 8 f a 
8 2 2 2 2 2 2 2 2 2 2 2 f 8 8 8 8 8 8 8 8 f f f f f 8 8 8 8 f a 
8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 a a a a a 8 f 8 f 8 a 
8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 f f 8 a 
8 f 8 8 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 a 
8 f f f f f 8 8 8 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 a 
8 2 2 2 2 2 f f f f f f 8 8 8 f 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 a 
8 2 2 2 2 2 2 2 2 2 2 f f f f 8 8 8 8 8 f 2 2 2 2 2 2 2 2 8 f a 
8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 8 8 8 8 8 8 f 2 8 f a 
8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 8 8 8 8 8 f a 
8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 8 f a 
. . . 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 f a 
. . . . . . . 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 f a 
. . . . . . . . . . . 8 8 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f a 
. . . . . . . . . . . . . . . 8 8 8 8 2 2 2 2 2 2 2 2 2 8 f 8 a 
. . . . . . . . . . . . . . . . . . . 8 8 8 8 2 2 2 2 2 f 8 a . 
. . . . . . . . . . . . . . . . . . . . . . . 8 8 8 a a a a . . 
`, heroawsome, 0, -50)
}
let p: Sprite = null
let Rain: Sprite = null
let Cloud: Sprite = null
let heroawsome: Sprite = null
hero()
ball()
score()
cloud()
raindrop()
game.onUpdateInterval(100, function () {
    raindrop()
})
