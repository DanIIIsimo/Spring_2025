const canvasApp = {
    ctx: null,
    canvas: null,
    sprite: null,
    frame: 0,
    isReady: false,

    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.sprite = new Image();
        this.sprite.onload = () => {
            this.isReady = true;
        };
        this.sprite.onerror = () => {
            console.error("Не удалось загрузить изображение");
        };
        this.sprite.src = 'img/snc.png';
    },

    main() {
        setInterval(() => {
            this.frame++;
            if (this.frame > 22) {
                this.frame = 0;
            }
        }, 100);
    },

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.isReady) {
            this.ctx.drawImage(
                this.sprite,
                this.frame * 100, 0, 100, 100,
                0, 0, 800, 600
            );
        } else {
            this.ctx.fillStyle = 'black';
            this.ctx.font = '16px Arial';
            this.ctx.fillText('Загрузка...', 10, 30);
        }
    },

    run() {
        window.requestAnimationFrame(() => {
            this.render();
            this.run();
        });
    },

    start() {
        this.init();
        this.main();
        this.run();
    }
};

window.addEventListener('load', () => {
    canvasApp.start();
});