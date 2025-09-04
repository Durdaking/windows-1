namespace SpriteKind {
    export const Vidio_player = SpriteKind.create()
    export const Curser = SpriteKind.create()
    export const Butten = SpriteKind.create()
    export const Game_Selector = SpriteKind.create()
    export const Test_Game_Selector = SpriteKind.create()
    export const Test_Game_Player = SpriteKind.create()
    export const Ebook_Selector = SpriteKind.create()
    export const Test_Book = SpriteKind.create()
    export const Book_Glossery = SpriteKind.create()
    export const Turn_Page_Right = SpriteKind.create()
    export const Turn_Page_Left = SpriteKind.create()
    export const Exit_Book = SpriteKind.create()
    export const Book_Page = SpriteKind.create()
    export const Music_Start = SpriteKind.create()
    export const Fruit_Story_Movie = SpriteKind.create()
}
let Backdrop_selector = 0
let Games_Startup = 0
let Exit_Butten: Sprite = null
let The_Maze_Game_Test_Edition: Sprite = null
let Curser2: Sprite = null
let Page_Number = 0
let Player1: Sprite = null
let Book_Startup = 0
let Test_Book2: Sprite = null
let Play_Movie = 0
let Startup = 0
let Game_Selector2: Sprite = null
let Play_Movie_Fruit_Story: Sprite = null
let Vidio: Sprite = null
let Ebook: Sprite = null
let Music_Startup: Sprite = null
let _Page: Sprite = null
let _Page2: Sprite = null
let Exit_Book2: Sprite = null
let Read_Page: Sprite = null
// Loading screen
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Test_Game_Selector, function (sprite, otherSprite) {
    if (Backdrop_selector == 200) {
        if (Games_Startup == 0) {
            if (controller.A.isPressed()) {
                sprites.destroy(Exit_Butten)
                sprites.destroy(The_Maze_Game_Test_Edition)
                sprites.destroy(Curser2)
                Games_Startup = 10
                pause(500)
                scene.setBackgroundImage(assets.image`Games Loading screen 1`)
                pause(500)
                scene.setBackgroundImage(assets.image`Games Loading screen 2`)
                pause(500)
                scene.setBackgroundImage(assets.image`Games Startup screen 3`)
                pause(500)
                scene.setBackgroundImage(assets.image`Games Startup screen 4`)
                pause(500)
                scene.setBackgroundImage(assets.image`Games Startup screen 5`)
                pause(500)
                Backdrop_selector = 10
                Games_Startup = 1
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Turn_Page_Left, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Page_Number += -1
        pause(500)
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Turn_Page_Right, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Page_Number += 1
        pause(500)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.placeOnTile(Player1, tiles.getTileLocation(15, 11))
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Test_Book, function (sprite, otherSprite) {
    if (Backdrop_selector == 100) {
        if (Book_Startup == 0) {
            if (controller.A.isPressed()) {
                sprites.destroy(Exit_Butten)
                sprites.destroy(Test_Book2)
                sprites.destroy(Curser2)
                scene.setBackgroundImage(assets.image`Book Loading screen`)
                pause(500)
                scene.setBackgroundImage(assets.image`Book loading screen 2`)
                pause(500)
                scene.setBackgroundImage(assets.image`Book loading screen 4`)
                pause(500)
                Book_Startup = 1
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Fruit_Story_Movie, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Play_Movie = 1
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Butten, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Backdrop_selector = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Test Game Objective`, function (sprite, location) {
    Startup = 5
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Music_Start, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Backdrop_selector = 5
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Exit_Book, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Startup = 7
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Book_Page, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        if (Book_Startup == 2) {
            if (Page_Number == 0) {
                game.showLongText("0", DialogLayout.Full)
            }
            if (Page_Number == 1) {
                game.showLongText("1", DialogLayout.Full)
            }
            if (Page_Number == 2) {
                game.showLongText("2", DialogLayout.Full)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Ebook_Selector, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Backdrop_selector = 4
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Game_Selector, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Backdrop_selector = 3
    }
})
info.onLifeZero(function () {
    if (Games_Startup == 2) {
        Startup = 9
    }
})
sprites.onOverlap(SpriteKind.Curser, SpriteKind.Vidio_player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        Backdrop_selector = 2
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Test Game Exit tile`, function (sprite, location) {
    if (controller.A.isPressed()) {
        Startup = 3
    }
})
// Start Screen
forever(function () {
    if (Backdrop_selector == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Butten)
        sprites.destroy(Curser2)
        sprites.destroy(Game_Selector2)
        sprites.destroy(The_Maze_Game_Test_Edition)
        sprites.destroy(Test_Book2)
        sprites.destroy(Play_Movie_Fruit_Story)
        scene.setBackgroundImage(assets.image`Desktop Background`)
        Backdrop_selector = 1
        Vidio = sprites.create(assets.image`Vidio`, SpriteKind.Vidio_player)
        Vidio.setPosition(20, 106)
        Vidio.changeScale(0.01, ScaleAnchor.BottomLeft)
        Game_Selector2 = sprites.create(assets.image`Game Selector`, SpriteKind.Game_Selector)
        Game_Selector2.setPosition(40, 106)
        Game_Selector2.changeScale(0.01, ScaleAnchor.BottomLeft)
        Ebook = sprites.create(assets.image`E book Selector`, SpriteKind.Ebook_Selector)
        Ebook.setPosition(60, 106)
        Ebook.changeScale(0.01, ScaleAnchor.BottomLeft)
        Music_Startup = sprites.create(assets.image`Music Start Up`, SpriteKind.Music_Start)
        Music_Startup.setPosition(140, 105)
        Music_Startup.changeScale(0.001, ScaleAnchor.BottomLeft)
        Curser2 = sprites.create(assets.image`Curser`, SpriteKind.Curser)
        Curser2.setStayInScreen(true)
        controller.moveSprite(Curser2)
        Backdrop_selector = 10
    }
})
forever(function () {
    if (Backdrop_selector == 2) {
        scene.setBackgroundImage(assets.image`Vidio Player App opend`)
        sprites.destroy(Vidio)
        sprites.destroy(Game_Selector2)
        sprites.destroy(Curser2)
        sprites.destroy(Ebook)
        sprites.destroy(Music_Startup)
        Exit_Butten = sprites.create(assets.image`Butten`, SpriteKind.Butten)
        Exit_Butten.setPosition(125, 23)
        Exit_Butten.changeScale(0.3, ScaleAnchor.BottomLeft)
        Play_Movie_Fruit_Story = sprites.create(assets.image`Fruit Story Movie`, SpriteKind.Fruit_Story_Movie)
        Play_Movie_Fruit_Story.setPosition(30, 60)
        Play_Movie_Fruit_Story.changeScale(0.3, ScaleAnchor.BottomLeft)
        Curser2 = sprites.create(assets.image`Curser`, SpriteKind.Curser)
        Curser2.setStayInScreen(true)
        controller.moveSprite(Curser2)
        Backdrop_selector = 10
    }
})
// Game Selection Screen
forever(function () {
    if (Backdrop_selector == 3) {
        scene.setBackgroundImage(assets.image`Test Game Menu`)
        sprites.destroy(Game_Selector2)
        sprites.destroy(Vidio)
        sprites.destroy(Curser2)
        sprites.destroy(Ebook)
        sprites.destroy(Music_Startup)
        The_Maze_Game_Test_Edition = sprites.create(assets.image`Test Game Selector`, SpriteKind.Test_Game_Selector)
        The_Maze_Game_Test_Edition.setPosition(38, 75)
        The_Maze_Game_Test_Edition.changeScale(0.3, ScaleAnchor.BottomLeft)
        Exit_Butten = sprites.create(assets.image`Butten`, SpriteKind.Butten)
        Exit_Butten.setPosition(124, 25)
        Exit_Butten.changeScale(0.4, ScaleAnchor.BottomLeft)
        Curser2 = sprites.create(assets.image`Curser`, SpriteKind.Curser)
        Curser2.setStayInScreen(true)
        controller.moveSprite(Curser2)
        Backdrop_selector = 200
    }
})
// Ebook Selection Screen
forever(function () {
    if (Backdrop_selector == 4) {
        scene.setBackgroundImage(assets.image`Book Selection Sreen`)
        sprites.destroy(Game_Selector2)
        sprites.destroy(Music_Startup)
        sprites.destroy(Vidio)
        sprites.destroy(Curser2)
        sprites.destroy(Ebook)
        Exit_Butten = sprites.create(assets.image`Butten`, SpriteKind.Butten)
        Exit_Butten.setPosition(125, 27)
        Exit_Butten.changeScale(0.3, ScaleAnchor.BottomLeft)
        Test_Book2 = sprites.create(assets.image`Test Book`, SpriteKind.Test_Book)
        Test_Book2.setPosition(33, 72)
        Test_Book2.changeScale(0.1, ScaleAnchor.BottomLeft)
        Curser2 = sprites.create(assets.image`Curser`, SpriteKind.Curser)
        Curser2.setStayInScreen(true)
        controller.moveSprite(Curser2)
        Backdrop_selector = 100
    }
})
forever(function () {
    if (Backdrop_selector == 5) {
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111118888881111111111111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111111118888888888888888888881111111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111111111188888888888888888888888888881111111111111111111111111111111111111111111111fffff
            fffff111111111111111111111111111111111111111111111111111111111111111111111118888888888888888855888888888888888111111111111111111111111111111111111111111111fffff
            fffff1111111ddddd111111111111111111111111111111111111111111111111111111118888888888888855555555555555558888888881111111111111111111111111111111111111111111fffff
            fffff1111111ddddddddddddddddddddd111111111111111111111dddddddddddddddddddddddddddddd55555555555555dddddddddddddddddddddddd111111111111111111111111111111111fffff
            fffff1111111dddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111fffff
            fffff1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111ddddddddddd66666dddddddddddddddddddddddddddddddddd666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111dddddddddd6666666dd666666dddddddddddddddddddddddd6666ddddd666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111dddddd666666666666d666666ddddddddddddddddddddddd66666ddddd666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111dddddd6666666666666666666ddddddddddddddddddddddd6666dddddd666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111dddddd666666dd66666666666dddddddddddddddddddddd6666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111dddddd66666dddd666666d666dddddddddddddddddddddd6666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd66666dddd666666d666dddddddddddd666ddddddd666dddddddddddddddddd666dddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd6666ddddd66666dd666dddd666ddddd666ddddddd666ddddddddddddddddd6666dddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd6666dddddd6666dd666dddd666ddddd666ddddddd6666ddddddddd666ddd66666dddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd6666dddddd666ddd666dddd666ddddd666ddddddd6666666dddddd666ddd66666dddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd6666dddddd666ddd666dddd6666ddd6666ddddddd66666666ddddd666ddd666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd6666dddddd666ddd66666dd66666d66666ddddddddd6666666dddd666ddd666dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd666ddddddd666ddd66666ddd6666666666dddddddddddd6666dddd666ddd6666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd666dddddddddddddd6666dddd6666666666dddddddddddd666dddd666ddd666666d66666ddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111dddddd666dddddddddddddddddddddd6666666666ddddddddddd6666ddd6666ddd666666666666ddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111ddddddddddddddddddddddddddddddddddddd6666ddddddddd666666ddd6666ddddd6666666666ddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff11111111ddddddddddddddddddddddddddddddddddddd666ddddd6666666666ddd666dddddddd66666dddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff11111111dddffffffffffffffffffffffdddddddddddddddddddd66666666ddddd666ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff11111111dddfffffffffffffffffffffffffffffffddddddddddd666666dfffffdddddddddddddddddddddddfffffddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff111111111ddfffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddffffffffffffffffffddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff111111111ddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff111111111dddddddddddddddddddddddddddddffffffffffffffffffffffffdfffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffdddddffffffdddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111fffff
            fffff1111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff1111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff11111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff1111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111fffff
            fffff111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffff11111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111fffff
            fffffbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbfffff
            fffffbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbfffff
            fffffbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbfffff
            fffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbfffff
            fffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbfffff
            fffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbfffff
            fffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbfffff
            fffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbfffff
            fffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbfffff
            fffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbfffff
            fffffbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbfffff
            fffffbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbfffff
            fffffbbbbbbbddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbfffff
            fffffbbbbbbbdddddddddddbbbbbbbddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbfffff
            fffffbbbbbbbbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbfffff
            fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbfffff
            fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff
            fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff
            fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff
            fffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        sprites.destroy(Vidio)
        sprites.destroy(Music_Startup)
        sprites.destroy(Game_Selector2)
        sprites.destroy(Curser2)
        sprites.destroy(Ebook)
        Exit_Butten = sprites.create(assets.image`Butten`, SpriteKind.Butten)
        Exit_Butten.setPosition(125, 23)
        Exit_Butten.changeScale(0.3, ScaleAnchor.BottomLeft)
        Curser2 = sprites.create(assets.image`Curser`, SpriteKind.Curser)
        Curser2.setStayInScreen(true)
        controller.moveSprite(Curser2)
        Backdrop_selector = 10
    }
})
forever(function () {
    if (Page_Number <= -1) {
        Page_Number = 0
    }
})
forever(function () {
    if (Book_Startup == 2) {
        info.setScore(Page_Number)
    }
})
forever(function () {
    if (Startup == 0) {
        if (controller.A.isPressed()) {
            Startup = 1
        }
    }
})
forever(function () {
    if (Play_Movie == 1) {
        Play_Movie = 100
        sprites.destroy(Play_Movie_Fruit_Story)
        sprites.destroy(Exit_Butten)
        sprites.destroy(Curser2)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
    }
})
forever(function () {
    if (Book_Startup == 1) {
        Page_Number = 0
        scene.setBackgroundImage(assets.image`Book Backdrop 1`)
        Book_Startup = 2
        _Page = sprites.create(assets.image`Page Right`, SpriteKind.Turn_Page_Right)
        _Page.setPosition(140, 20)
        _Page2 = sprites.create(assets.image`Page Left`, SpriteKind.Turn_Page_Left)
        _Page2.setPosition(120, 20)
        Exit_Book2 = sprites.create(assets.image`Exit Book`, SpriteKind.Exit_Book)
        Exit_Book2.setPosition(30, 20)
        Read_Page = sprites.create(assets.image`Book Page`, SpriteKind.Book_Page)
        Read_Page.setPosition(70, 70)
        Read_Page.setScale(2, ScaleAnchor.Middle)
        Curser2 = sprites.create(assets.image`Curser`, SpriteKind.Curser)
        Curser2.setStayInScreen(true)
        controller.moveSprite(Curser2)
    }
})
forever(function () {
    if (Startup == 3) {
        tiles.setCurrentTilemap(tilemap`level3`)
        scene.centerCameraAt(0, 0)
        sprites.destroy(Player1)
        Startup = 4
        scene.setBackgroundImage(assets.image`Game exit 1`)
        pause(500)
        scene.setBackgroundImage(assets.image`Game exit 2`)
        pause(500)
        scene.setBackgroundImage(assets.image`Game exit 3`)
        pause(500)
        scene.setBackgroundImage(assets.image`Power Off Screen`)
        pause(500)
        game.gameOver(false)
    }
})
forever(function () {
    if (Startup == 7) {
        Startup = 8
        Page_Number = 100
        sprites.destroy(Curser2)
        sprites.destroy(Exit_Book2)
        sprites.destroy(_Page)
        sprites.destroy(_Page2)
        sprites.destroy(Read_Page)
        scene.setBackgroundImage(assets.image`Book Exit Screen 1`)
        pause(500)
        scene.setBackgroundImage(assets.image`Book Exit 2`)
        pause(500)
        scene.setBackgroundImage(assets.image`Book Exit 3`)
        pause(500)
        scene.setBackgroundImage(assets.image`Book ExitScreen 4`)
        pause(500)
        game.gameOver(false)
    }
})
forever(function () {
    if (Startup == 1) {
        Startup = 2
        scene.setBackgroundImage(assets.image`StartUp screen 1`)
        pause(500)
        scene.setBackgroundImage(assets.image`Startup screen 2`)
        pause(500)
        scene.setBackgroundImage(assets.image`Startup screen 6`)
        pause(500)
        scene.setBackgroundImage(assets.image`Startup Screen 7`)
        pause(500)
        scene.setBackgroundImage(assets.image`Startup Screen 11`)
        pause(500)
        Backdrop_selector = 1
    }
})
forever(function () {
    if (Startup == 5) {
        tiles.setCurrentTilemap(tilemap`level3`)
        scene.centerCameraAt(0, 0)
        sprites.destroy(Player1)
        Startup = 6
        scene.setBackgroundImage(assets.image`Game exit 1`)
        pause(500)
        scene.setBackgroundImage(assets.image`Game over win`)
        pause(500)
        game.gameOver(true)
    }
})
forever(function () {
    if (Startup == 9) {
        sprites.destroy(Player1)
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.centerCameraAt(0, 0)
        scene.setBackgroundImage(assets.image`You Lose`)
        pause(500)
        game.gameOver(false)
    }
})
forever(function () {
    if (Games_Startup == 1) {
        Games_Startup = 2
        tiles.setCurrentTilemap(tilemap`Maze Game tile map`)
        Player1 = sprites.create(assets.image`Test Player`, SpriteKind.Player)
        controller.moveSprite(Player1)
        scene.cameraFollowSprite(Player1)
        tiles.placeOnTile(Player1, tiles.getTileLocation(15, 11))
        Player1.setScale(0.5, ScaleAnchor.Middle)
        info.setLife(3)
    }
})
forever(function () {
    if (Book_Startup == 2) {
        if (Page_Number == 0) {
            scene.setBackgroundImage(assets.image`Test Book Page 0`)
        }
        if (Page_Number == 1) {
            scene.setBackgroundImage(assets.image`Test Book P 1`)
        }
        if (Page_Number == 2) {
            scene.setBackgroundImage(assets.image`Test Book P 2`)
        }
    }
})
