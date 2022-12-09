scene.onOverlapTile(SpriteKind.Player, assets.tile`我的貼圖27`, function (sprite, location) {
    if (admin_lock == 0) {
        admin_lock = 1
        tiles.setTileAt(tiles.getTileLocation(5, 29), assets.tile`我的貼圖35`)
        tiles.setTileAt(tiles.getTileLocation(5, 31), assets.tile`我的貼圖35`)
        tiles.setTileAt(tiles.getTileLocation(5, 33), assets.tile`我的貼圖35`)
        tiles.setTileAt(tiles.getTileLocation(5, 35), assets.tile`我的貼圖35`)
        tiles.setTileAt(tiles.getTileLocation(5, 37), assets.tile`我的貼圖35`)
        tiles.setTileAt(tiles.getTileLocation(5, 39), assets.tile`我的貼圖35`)
        tiles.setTileAt(tiles.getTileLocation(5, 41), assets.tile`我的貼圖35`)
        tiles.setWallAt(tiles.getTileLocation(5, 29), true)
        tiles.setWallAt(tiles.getTileLocation(5, 31), true)
        tiles.setWallAt(tiles.getTileLocation(5, 33), true)
        tiles.setWallAt(tiles.getTileLocation(5, 35), true)
        tiles.setWallAt(tiles.getTileLocation(5, 37), true)
        tiles.setWallAt(tiles.getTileLocation(5, 39), true)
        tiles.setWallAt(tiles.getTileLocation(5, 41), true)
        pause(10000)
        admin_lock = 0
        tiles.setTileAt(tiles.getTileLocation(5, 29), assets.tile`我的貼圖32`)
        tiles.setTileAt(tiles.getTileLocation(5, 31), assets.tile`我的貼圖32`)
        tiles.setTileAt(tiles.getTileLocation(5, 33), assets.tile`我的貼圖32`)
        tiles.setTileAt(tiles.getTileLocation(5, 35), assets.tile`我的貼圖32`)
        tiles.setTileAt(tiles.getTileLocation(5, 37), assets.tile`我的貼圖32`)
        tiles.setTileAt(tiles.getTileLocation(5, 39), assets.tile`我的貼圖32`)
        tiles.setTileAt(tiles.getTileLocation(5, 41), assets.tile`我的貼圖32`)
        tiles.setWallAt(tiles.getTileLocation(5, 29), false)
        tiles.setWallAt(tiles.getTileLocation(5, 31), false)
        tiles.setWallAt(tiles.getTileLocation(5, 33), false)
        tiles.setWallAt(tiles.getTileLocation(5, 35), false)
        tiles.setWallAt(tiles.getTileLocation(5, 37), false)
        tiles.setWallAt(tiles.getTileLocation(5, 39), false)
        tiles.setWallAt(tiles.getTileLocation(5, 41), false)
    }
})
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
let emergency_meeting = 0
let mySprite: Sprite = null
let blackhole: tiles.TileMapData = null
let normal: tiles.TileMapData = null
let admin_lock = 0
admin_lock = 0
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
