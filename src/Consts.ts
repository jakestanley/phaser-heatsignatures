import "phaser";

export class Consts {
    public static readonly TEXT_FONT: Phaser.GameObjects.TextStyle = {
        fontFamily: "Ubuntu Mono"
    };

    public static readonly STORY_FONT: Phaser.GameObjects.TextStyle = {
        fontFamily: "Century Schoolbook",
        fontStyle: "italic"
    };

    public static readonly GAME_WIDTH: number = 640;
    public static readonly GAME_HEIGHT: number = 480;
    public static readonly MAX_DAY = 300;
}
