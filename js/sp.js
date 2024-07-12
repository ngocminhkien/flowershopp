$(document).ready(function(){
    var thongtin;

    thongtin = "tên sản phẩm: Bình hoa tươi - Bình hồng đỏ nhung \nGồm: 30 bông hoa hồng nhung cắm trong bình.";
    $("#s1").mouseenter(function(){
        $(this).attr("title", thongtin);
    });

    thongtin = " tượng trưng cho tình yêu mãnh liệt và lâu dài. Hoa hồng đỏ biểu thị đam mê, trong khi lá bạc xanh tượng trưng cho sự tươi mới và sức sống. Bó hoa này là món quà lý tưởng để bày tỏ tình cảm sâu đậm và cam kết lâu dài.";
    $("#s2").mouseenter(function(){
        $(this).attr("title", thongtin);
    });

    thongtin = "tên sản phẩm: Bình hoa tươi - Hồng song hỷ cồ (30 bông)\nHồng Đà Lạt theo mùa.";
    $("#s3").mouseenter(function(){
        $(this).attr("title", thongtin);
    });

    thongtin = "Sản phẩm bao gồm:\nCẩm chướng đơn trắng: 15.\nCúc mẫu đơn trắng Cúc mẫu đơn xanh cốm: 10.\nHoa Cúc Lưới Xanh: 10.\nHồng capuchino: 25Hồng Xanh Lưu Ly: 5";
    $("#s4").mouseenter(function(){
        $(this).attr("title", thongtin);
    });
});
window.onload = function() {
    var images = document.querySelectorAll('.product img');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.5s';
        });
        images[i].addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.5s';
        });
    }
};
