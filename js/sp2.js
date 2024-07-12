$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).hide();
    });
});

var thongtin = " tượng trưng cho tình yêu mãnh liệt và lâu dài. Hoa hồng đỏ biểu thị đam mê, trong khi lá bạc xanh tượng trưng cho sự tươi mới và sức sống. Bó hoa này là món quà lý tưởng để bày tỏ tình cảm sâu đậm và cam kết lâu dài.";

$(document).ready(function(){
    $("#s2").mouseenter(function(){
        $(this).attr("title", thongtin);
    });
});

