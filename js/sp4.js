$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    });
});

var thongtin = "S capuchino: 25Hồng Xanh Lưu Ly: 5";

$(document).ready(function(){
    $("#s4").mouseenter(function(){
        $(this).attr("title", thongtin);
    });
});