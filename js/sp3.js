$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    });
});

var thongtin = "tên sản phẩm: Bình hoa tươi - Hồng song hỷ cồ (30 bông)\nHồng Đà Lạt theo mùa.";

$(document).ready(function(){
    $("#s3").mouseenter(function(){
        $(this).attr("title", thongtin);
    });
});
 