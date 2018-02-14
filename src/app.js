import "./styles/main.sass";
import * as jQuery from "jquery";
import "popper.js";
import "bootstrap";

var slider = $(".slide-show") ;
$(function () {
    $(window).resize(function () {

        if (slider.width() < 1200 & slider.css("display") != "none") {

            $('.wrapper').css('max-width', $('.slide-show').css('width'))
        }

        else {
            $('.wrapper').css('max-width', '1200px');
        }
    });

    $(window).resize();

    //  Page navigation

    $(".primary-header_navigation ul").on("click","a", function (event) {

        event.preventDefault();

        var id  = $(this).attr('href');

        var topSize = $(id).offset().top;

        $('body,html').animate({scrollTop: topSize}, 500);

    });

    // modal-window

    $("#modal-win-active, .modal-window_button").click(function(){

        $('.modal-window').toggleClass('modal-window-hide');
    })
});

// google maps

function initMap() {
    var khanino = { lat: 54.211260, lng: 36.618191 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: khanino,
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: khanino,
        map: map
    });
}
    
window.initMap = initMap;   