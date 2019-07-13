import "phaser";
import { GameScene } from "./scenes/GameScene";
import { Consts as _ } from "./Consts";

const gameScene: GameScene = new GameScene();

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	title: "Heat Signatures",
	width: _.GAME_WIDTH,
	height: _.GAME_HEIGHT,
	parent: "game",
	backgroundColor: "#000000",
	scene: [gameScene],
	input: {
		keyboard: true
	}
};

const game = new Phaser.Game(config);
