info.onLifeZero(function () {
    info.setLife(10000)
    tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖2`)
})
let mySprite: Sprite = null
info.setLife(10000)
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
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`層級1`)
tiles.placeOnRandomTile(mySprite, assets.tile`我的貼圖2`)
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`我的貼圖15`)) {
        info.changeLifeBy(-1)
    } else {
        if (info.life() != 10000) {
            info.changeLifeBy(1)
        }
    }
    pause(100)
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, sprites.dungeon.floorLight0)) {
        info.setLife(10000)
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`我的貼圖16`)) {
        info.setLife(10000)
    }
})
