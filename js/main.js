$(document).ready(function() {
    $('.header').height($(window).height());
})

$(".navbar a").click(function() {
    $("body,html").animate({
        scrollTop: $("#" + $(this).data('value')).offset().top
    }, 500)
})

function scrollToSection(element) {
  var sectionTo = $(element).attr('data-value');
  $('html, body').animate({
    scrollTop: $('.' + sectionTo).offset().top
  }, 500);
}

$(document).ready(function(){
    $(".myButton").click(function(){
        var filename = $(this).data('file');
        $.ajax({url: filename, success: function(result){
            $(".desc p").html(result);
        }});
    });
});

$(document).ready(function(){
    $("#loadData").click(function(){
        var count = new URLSearchParams(window.location.search).get('count');
        $.ajax({
            url: "http://localhost/project/data.php" + (count ? "?count=" + count : ""),
            type: "GET",
            success: function(result){
                // Очищуємо таблицю, залишаючи тільки заголовок
                $("#dataTable").find("tr:gt(0)").remove();
                // Додаємо нові рядки з даними
                $.each(result.data, function(i, item){
                    var row = $("<tr>").append(
                        $("<td>").text(item.id),
                        $("<td>").text(item.name),
                        $("<td>").text(item.date)
                    );
                    $("#dataTable").append(row);
                });
            }
        });
    });
});
