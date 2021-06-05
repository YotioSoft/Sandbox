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