scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖20`, function (sprite, location) {
    emergency_meeting = randint(1, 4)
    if (emergency_meeting == 1) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖22`)
    }
    if (emergency_meeting == 2) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖23`)
    }
    if (emergency_meeting == 3) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖24`)
    }
    if (emergency_meeting == 4) {
        tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖25`)
    }
    music.buzzer.play()
    pause(500)
    game.splash("EMERGENCY MEETING")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖17`, function (sprite, location) {
    tiles.setCurrentTilemap(blackhole)
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖2`)
})
info.onLifeZero(function () {
    info.setLife(180)
    tiles.setCurrentTilemap(blackhole)
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖18`, function (sprite, location) {
    tiles.setCurrentTilemap(normal)
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖2`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖21`, function (sprite, location) {
    music.powerUp.play()
    game.splash("YOU HAVE BEEN EJECTED")
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖2`)
})
let emergency_meeting = 0
let mySprite: Sprite = null
let blackhole: tiles.TileMapData = null
let normal: tiles.TileMapData = null
info.setLife(1800)
normal = tilemap`層級1`
blackhole = tilemap`層級9`
mySprite = sprites.create(img`
    . . . . . d d d d d d . . . . . 
    . . . . d . . . . . . d . . . . 
    . . . . d . d . . d . d . . . . 
    . . . . d . . . . . . d . . . . 
    . . . . d . d . . d . d . . . . 
    . . . . d . . d d . . d . . . . 
    . . . . d . . . . . . d . . . . 
    . . . . . d d d d d d . . . . . 
    . . . . . . . d d . . . . . . . 
    . . . . d . d d d d . d . . . . 
    . . . d . d . d d . d . d . . . 
    . . . . . . . d d . . . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . . d d . . d d . . . . . 
    . . . . d d . . . . d d . . . . 
    . . . . d d . . . . d d . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(normal)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(15)
tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖2`)
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`我的貼圖15`)) {
        info.changeLifeBy(-1)
    } else {
        if (info.life() != 1800) {
            info.changeLifeBy(1)
        }
    }
    pause(100)
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight0)) {
        info.setLife(1800)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`我的貼圖16`)) {
        info.setLife(1800)
    }
})
