'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        const n = Math.random();
        if (n < 0.01) {
            btn.textContent = '超大吉';
        }else if (n < 0.06){
            btn.textContent = '大吉';
        }else if (n < 0.21){
            btn.textContent = '中吉';
        }else {
            btn.textContent = '小吉';
        }
    });
}
