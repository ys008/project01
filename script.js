function createText() {
    const text = document.createElement('div');
    text.classList.add('text');
    text.textContent = 'しのぴこたろう';

    // ランダムなプロパティを設定
    const startX = Math.random() * window.innerWidth;
    const fontSize = Math.random() * 24 + 12; // 12pxから36px
    const duration = Math.random() * 5 + 4; // 4秒から9秒

    text.style.left = `${startX}px`;
    text.style.fontSize = `${fontSize}px`;
    text.style.animationDuration = `${duration}s`;

    document.body.appendChild(text);

    // アニメーション終了後に要素を削除
    setTimeout(() => {
        text.remove();
    }, duration * 1000);
}

function createWataame() {
    const wataame = document.createElement('div');
    wataame.classList.add('wataame-container');

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 4; // 4秒から9秒

    wataame.style.left = `${startX}px`;
    wataame.style.animationDuration = `${duration}s`;

    document.body.appendChild(wataame);

    setTimeout(() => {
        wataame.remove();
    }, duration * 1000);
}

function createCandy() {
    const candy = document.createElement('div');
    candy.classList.add('candy');

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 4; // 4秒から9秒

    candy.style.left = `${startX}px`;
    candy.style.animationDuration = `${duration}s`;

    document.body.appendChild(candy);

    setTimeout(() => {
        candy.remove();
    }, duration * 1000);
}

function createIceCream() {
    const iceCream = document.createElement('div');
    iceCream.classList.add('ice-cream-container');

    const cone = document.createElement('div');
    cone.classList.add('cone');

    const scoop = document.createElement('div');
    scoop.classList.add('ice-cream-scoop');

    iceCream.appendChild(cone);
    iceCream.appendChild(scoop);

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 4; // 4秒から9秒

    iceCream.style.left = `${startX}px`;
    iceCream.style.animationDuration = `${duration}s`;

    document.body.appendChild(iceCream);

    setTimeout(() => {
        iceCream.remove();
    }, duration * 1000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    heart.style.setProperty('--heart-color', randomColor);

    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 4; // 4秒から9秒

    heart.style.left = `${startX}px`;
    heart.style.animationDuration = `${duration}s`;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

function createRainbow() {
    const rainbow = document.createElement('div');
    rainbow.classList.add('rainbow');

    document.body.appendChild(rainbow);

    setTimeout(() => {
        rainbow.remove();
    }, 4000); // Rainbow disappears after 4 seconds
}

// 200ミリ秒ごとに新しいテキストとわたあめとキャンディとアイスクリームとハートを生成
setInterval(() => {
    createText();
    createWataame();
    createCandy();
    createIceCream();
    createHeart();
}, 200);

function createUnicorn() {
    const unicorn = document.createElement('div');
    unicorn.classList.add('unicorn');

    document.body.appendChild(unicorn);

    setTimeout(() => {
        unicorn.remove();
    }, 9000); // Unicorn disappears after 9 seconds
}

// 5秒ごとに虹を生成
setInterval(createRainbow, 5000);

// 10秒ごとにユニコーンを生成
setInterval(createUnicorn, 10000);
