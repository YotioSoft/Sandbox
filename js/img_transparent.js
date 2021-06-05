function previewFile(file) {
    // 追加先
    const previewArea = document.getElementById('preview');

    // キャンバスの準備
    var ctx = previewArea.getContext("2d");

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
    var image_data = ctx.createImageData(256, 256);

    reader.onloadend = function() {
        image_data.src = reader.result;
        image_data.onload = () => {
            previewArea.width = image_data.width;
            previewArea.height = image_data.height;
            ctx.drawImage(image_data, 0, 0);
        }
    }

    // previewAreaがクリックされた時の処理
    previewArea.onclick = function(e) {
        var x = e.offsetX;	// 水平の位置座標
        var y = e.offsetY;	// 垂直の位置座標
    
        console.log(x+","+y);

        // クリックされた座標のRGB値を取得
        var index = (x + y * image_data.width) * 4;
        r = image_data.data[index];
        g = image_data.data[index + 1];
        b = image_data.data[index + 2];

        console.log(r+","+g+","+b)
    }
}