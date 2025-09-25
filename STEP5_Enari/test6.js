document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input6');
    const button = document.getElementById('button6');
    const tableBody = document.querySelector('#table6 tbody');
    const countDisplay = document.getElementById('countDisplay6'); // 任意（あれば）

    let totalCount = 0; // 追加カウント

    button.addEventListener('click', function () {
        const text = input.value.trim();

        if (text === '') {
            alert('入力が空です。');
            return;
        }

        // 最大3件を超える場合は、先頭の行（最も古い行）を削除
        if (tableBody.rows.length >= 3) {
            tableBody.deleteRow(0);
        }

        // 行を追加
        const newRow = document.createElement('tr');

        const textCell = document.createElement('td');
        textCell.textContent = text;

        newRow.appendChild(textCell);
        tableBody.appendChild(newRow);

        // カウント更新（あれば）
        totalCount++;
        if (countDisplay) {
            countDisplay.textContent = `${totalCount}回追加されました`;
        }

        input.value = '';
    });
});