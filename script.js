function createText() {
    const text = document.createElement('div');
    text.classList.add('text');
    if (Math.random() > 0.5) {
        text.textContent = 'しのぴこたろう';
    } else {
        text.textContent = 'わたあめ';
        text.classList.add('wataame');
    }

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

// 200ミリ秒ごとに新しいテキストを生成
setInterval(createText, 200);
