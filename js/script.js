$(document).ready(function(){
    //ustawienia
    var speed = 500; // fade speed
    var autoswitch = true; // automatyczne przechodzenie do kolejnego slajdu
    var autoswitch_speed = 3000; // szybkość slajdu

    //dodanie klasy aktywnej
    $(".slide").first().addClass("active");

    // ukrycie wszystkich slajdów
    $(".slide").hide();

    // pokazanie aktywnego slajdu
    $(".active").show();

    // on click on next
    $("#next").click(function(){
        nextSlide();
    });
    // on click on prev
    $("#prev").click(function(){
        prevSlide();
    });

    // automatyczne przechodzenie do kolejnego slajdu
    if (autoswitch == true) {
        setInterval(function(){
            nextSlide();
        }, autoswitch_speed);
    }

    // funkcja przejscia do kolejnego slajdu
function nextSlide() {
    $(".active").removeClass("active").addClass("oldActive");
        if ($(".oldActive").is(":last-child")) {
            $(".slide").first().addClass("active");
        }
        else {
            $(".oldActive").next().addClass("active");
        }
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
}
 // funkcja przejścia do poprzdniego slajdu
function prevSlide() {
    $(".active").removeClass("active").addClass("oldActive");
        if ($(".oldActive").is(":first-child")) {
            $(".slide").last().addClass("active");
        }
        else {
            $(".oldActive").prev().addClass("active");
        }
        $(".oldActive").removeClass("oldActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
}
});