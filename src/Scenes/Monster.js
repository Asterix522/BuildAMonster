class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        // Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redB.png");

        // Legs
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 100, this.bodyY + 120, "monsterParts", "leg_redB.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 100, this.bodyY + 120, "monsterParts", "leg_redB.png");
        my.sprite.leftLeg.setScale(-1, 1); // Flip horizontally

        // Arms
        my.sprite.rightArm = this.add.sprite(this.bodyX + 100, this.bodyY + 10, "monsterParts", "arm_redB.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 100, this.bodyY + 10, "monsterParts", "arm_redB.png");
        my.sprite.leftArm.setScale(-1, 1); // Flip horizontally

        // Eyes
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 10, "monsterParts", "eye_psycho_light.png");

        // Mouth
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouth_closed_happy.png");

        // Fang (hidden by default)
        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY + 50, "monsterParts", "mouthI.png");
        my.sprite.fang.setVisible(false);

        this.keys = this.input.keyboard.addKeys('S,F,A,D'); 
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (Phaser.Input.Keyboard.JustDown(this.keys.S)) {
            my.sprite.smile.setVisible(true);
            my.sprite.fang.setVisible(false);
        }
        if (Phaser.Input.Keyboard.JustDown(this.keys.F)) {
            my.sprite.smile.setVisible(false);
            my.sprite.fang.setVisible(true);
        }

        const moveSpeed = 5;
        if (this.keys.A.isDown) {
            this.bodyX -= moveSpeed;
        }
        if (this.keys.D.isDown) {
            this.bodyX += moveSpeed;
        }

        my.sprite.body.setPosition(this.bodyX, this.bodyY);
        my.sprite.rightLeg.setPosition(this.bodyX + 100, this.bodyY + 120);
        my.sprite.leftLeg.setPosition(this.bodyX - 100, this.bodyY + 120);
        my.sprite.rightArm.setPosition(this.bodyX + 100, this.bodyY + 10);
        my.sprite.leftArm.setPosition(this.bodyX - 100, this.bodyY + 10);
        my.sprite.eye.setPosition(this.bodyX, this.bodyY - 10);
        my.sprite.smile.setPosition(this.bodyX, this.bodyY + 50);
        my.sprite.fang.setPosition(this.bodyX, this.bodyY + 50);

       
    }


}