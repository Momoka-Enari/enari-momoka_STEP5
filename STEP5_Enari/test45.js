document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input45');
    const button = document.getElementById('button45');
    const tableBody = document.querySelector('#table45 tbody');
    const countDisplay = document.getElementById('countDisplay45');

    let addCount = 0; // 追加回数カウント

    // 表示ボタンクリック時の処理
    button.addEventListener('click', function () {
        const text = input.value.trim();

        if (text === '') {
            alert('入力が空です。');
            return;
        }

        // テーブルに新しい行を追加
        const newRow = document.createElement('tr');

        const textCell = document.createElement('td');
        textCell.textContent = text;

        const actionCell = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '削除';
        actionCell.appendChild(deleteBtn);

        newRow.appendChild(textCell);
        newRow.appendChild(actionCell);
        tableBody.appendChild(newRow);

        // 追加回数のカウント
        addCount++;
        countDisplay.textContent = `${addCount}回追加されました`;

        // 追加後、ボタン非表示条件チェック（設問4）
        if (addCount >= 3) {
            button.style.display = 'none';
        }

        // 削除ボタンの処理（設問5）
        deleteBtn.addEventListener('click', function () {
            tableBody.removeChild(newRow);
            addCount--;
            countDisplay.textContent = `${addCount}回追加されました`;

            // カウントが2以下になったら表示ボタンを再表示
            if (addCount < 3) {
                button.style.display = 'inline';
            }
        });

        input.value = ''; // 入力欄をリセット
    });
});