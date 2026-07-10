document.querySelectorAll('.b1, .b2, .b3, .c1, .c2, .c3, .c4, .c5').forEach(function(el) {

    el.addEventListener('mouseover', function () {

        // 今の位置を取得
        const currentX = parseFloat(el.style.left) || 0;
        const currentY = parseFloat(el.style.top) || 0;

        // 逃げる距離（ここを調整すれば距離が変わる）
        const move = 30;  // ← 例えば 80px だけ逃げる

        // ランダムに左右どちらかへ
        const x = currentX + (Math.random() < 0.5 ? -move : move);
        const y = currentY + (Math.random() < 0.5 ? -move : move);

        // 位置を更新
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    });
});
