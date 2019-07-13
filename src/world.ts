import "phaser";

export class World {

    shipVector: Phaser.Math.Vector2;
    goalVector: Phaser.Math.Vector2;

    constructor() {
        this.shipVector = new Phaser.Math.Vector2(0, 0);
        this.goalVector = new Phaser.Math.Vector2(2048, 2048);
    }
}