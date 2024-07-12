$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    });
});

var thongtin = "tên sản phẩm: Bình hoa tươi - Bình hồng đỏ nhung \nGồm: 30 bông hoa hồng nhung cắm trong bình.";

$(document).ready(function(){
    $("#s1").mouseenter(function(){
        $(this).attr("title", thongtin);
    });
});
