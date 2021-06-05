function previewFile(file) {
    // 追加先
    const previewArea = document.getElementById('preview');
    console.log("previewFile");

    // FileRenderオブジェクトを作成
    const reader = new FileReader();

    // URLとして読み込まれたとき実行
    reader.onload = function(e) {
        const imageUrl = e.target.result;
        const img = document.createElement("img");
        img.src = imageUrl;
        previewArea.appendChild(img);
    }

    // ファイル読み込み
    reader.readAsDataURL(file);

    // previewAreaがクリックされた時の処理
    previewArea.onclick = function(e) {
        var x = e.offsetX;	// 水平の位置座標
        var y = e.offsetY;	// 垂直の位置座標
    
        console.log(x+","+y);
    }
}