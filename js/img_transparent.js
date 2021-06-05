function previewFile(file) {
    // 追加先
    const previewArea = document.getElementById('preview');

    // キャンバスの準備
    const ctx = previewArea.getContext("2d");

    // FileRenderオブジェクトを作成
    const reader = new FileReader();

    // URLとして読み込まれたとき実行
    reader.onload = function(e) {
        const imageUrl = e.target.result;
        const img = document.createElement("img");
        img.src = imageUrl;
    }

    // ファイル読み込み
    reader.readAsDataURL(file);

    // Imageに変換
    const image = new Image();
    reader.onloadend = function() {
        image.src = reader.result;
        image.onload = () => {
            ctx.drawImage(image, 0, 0);
        }
    }

    // previewAreaがクリックされた時の処理
    previewArea.onclick = function(e) {
        var x = e.offsetX;	// 水平の位置座標
        var y = e.offsetY;	// 垂直の位置座標
    
        console.log(x+","+y);

        // クリックされた座標のRGB値を取得
        var index = (x + y * image.width) * 4;
    }
}