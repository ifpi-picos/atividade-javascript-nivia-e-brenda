document.getElementById("lampada-01").addEventListener("click", function () {
if (this.src.includes("imagem/lampada-on.jpg")) {
    this.src = "imagem/lampada.jpg";
} else {
    this.src = "imagem/lampada-on.jpg";
}
});

document.getElementById("lampada-02").addEventListener("mouseover", function () {
    this.src = "imagem/lampada-on.jpg";
});

document.getElementById("lampada-02").addEventListener("mouseout", function() {
     this.src = "imagem/lampada.jpg";
});
