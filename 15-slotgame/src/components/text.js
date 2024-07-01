// Initialize Pixi.js
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

// Load slot symbols
PIXI.loader
    .add('symbol1', 'assets/symbol1.png')
    .add('symbol2', 'assets/symbol2.png')
    .add('symbol3', 'assets/symbol3.png')
    .load(setup);

function setup() {
    // Create slot symbols textures
    const symbolTextures = [
        PIXI.Texture.from('symbol1'),
        PIXI.Texture.from('symbol2'),
        PIXI.Texture.from('symbol3'),
        // Add more symbols as needed
    ];

    // Create reels (containers for symbols)
    const reels = [];
    const reelWidth = 100;
    const reelHeight = 200;

    for (let i = 0; i < 3; i++) {
        const reel = new PIXI.Container();
        reel.x = i * reelWidth;
        reels.push(reel);
        app.stage.addChild(reel);

        // Create symbols in the reel
        for (let j = 0; j < 3; j++) {
            const symbol = new PIXI.Sprite(symbolTextures[Math.floor(Math.random() * symbolTextures.length)]);
            symbol.y = j * reelHeight;
            symbol.scale.x = symbol.scale.y = Math.min(reelWidth / symbol.width, reelHeight / symbol.height);
            symbol.anchor.y = 0.5;
            reel.addChild(symbol);
        }
    }

    // Add spin button
    const spinButton = new PIXI.Graphics();
    spinButton.beginFill(0x00FF00);
    spinButton.drawRect(0, 0, 100, 50);
    spinButton.endFill();
    spinButton.x = 350;
    spinButton.y = 450;
    spinButton.interactive = true;
    spinButton.buttonMode = true;
    spinButton.on('pointerdown', spinReels);
    app.stage.addChild(spinButton);

    // Function to spin reels
    function spinReels() {
        // Disable spin button during spin animation
        spinButton.interactive = false;

        // Define animation properties
        const reelSpeed = 5;
        const spins = 3; // Number of spins
        const spinDuration = 2000; // Duration of spin animation (ms)

        // Spin each reel
        for (let i = 0; i < reels.length; i++) {
            const reel = reels[i];
            const extraSpins = spins + i;
            const targetY = reel.y + reelHeight * extraSpins;
            
            // Tween animation to spin the reel
            TweenMax.to(reel, spinDuration / 1000, {
                pixi: {
                    y: targetY,
                },
                ease: Power4.easeOut,
                onComplete: onReelSpinComplete,
                onCompleteParams: [reel, i],
            });
        }
    }

    // Function called when a reel finishes spinning
    function onReelSpinComplete(reel, index) {
        // Reset position of the reel
        reel.y = -(reelHeight * 3);

        // Enable spin button after all reels finish spinning
        if (index === reels.length - 1) {
            spinButton.interactive = true;
        }
    }
}
