// script.js
let currentHolder = null; // 現在の鍵の所有者

// 要素の取得
const currentStatus = document.getElementById("current-status");
const nameInput = document.getElementById("name-input");
const borrowButton = document.getElementById("borrow-button");
const returnButton = document.getElementById("return-button");
const transferButton = document.getElementById("transfer-button");

// 鍵を借りる処理
borrowButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert("名前を入力してください。");
        return;
    }
    if (currentHolder) {
        alert("鍵は既に借りられています。");
        return;
    }
    currentHolder = name;
    updateStatus();
});

// 鍵を返却する処理
returnButton.addEventListener("click", () => {
    if (!currentHolder) {
        alert("鍵は誰も借りていません。");
        return;
    }
    const name = nameInput.value.trim();
    if (name !== currentHolder) {
        alert("現在の借主の名前を入力してください。");
        return;
    }
    currentHolder = null;
    updateStatus();
});

// 鍵を引き継ぐ処理
transferButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
        alert("新しい借主の名前を入力してください。");
        return;
    }
    if (!currentHolder) {
        alert("鍵は誰も借りていません。");
        return;
    }
    currentHolder = name;
    updateStatus();
});

// 状態を更新する関数
function updateStatus() {
    if (currentHolder) {
        currentStatus.textContent = `鍵は現在「${currentHolder}」さんが借りています。`;
    } else {
        currentStatus.textContent = "鍵は誰も借りていません。";
    }
    nameInput.value = ""; // 入力欄をクリア
}
