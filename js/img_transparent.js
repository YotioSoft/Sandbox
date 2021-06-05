function previewFile(file) {
    // 追加先
    const previewArea = document.getElementById('preview');

    // FileRenderオブジェクトを作成
    const render = new FileRender();

    // URLとして読み込まれたとき実行
    render.onload = function(e) {
        const imageUrl = e.target.result;
        const img = document.createElement("img");
        img.src = imageUrl;
        previewArea.appendChild(img);
    }

    // ファイル読み込み
    render.readAsDataURL(file);
}

document.getElementById('preview').onclick = function(event) {
	var x = event.pageX ;	// 水平の位置座標
	var y = event.pageY ;	// 垂直の位置座標

    document.write(x+","+y);
}