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

// 200ミリ秒ごとに新しいテキストとわたあめとキャンディを生成
setInterval(() => {
    createText();
    createWataame();
    createCandy();
}, 200);
