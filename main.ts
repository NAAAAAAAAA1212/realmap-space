let mySprite = sprites.create(img`
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
