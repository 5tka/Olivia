console.log('hello from script.js');
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;


$( document ).ready(function() { // начало document.ready

$('.guarantees__sertificates').owlCarousel({
        nav:true,
        responsive: {
            320:{
                items: 1,
            },
            480:{
                items: 2,
            },
            750: {
                items: 3,
            },
            1050: {
                items: 4,
            }
        }
    });

        // var menu = $(".header__top-line");

        // $(window).scroll(function(){
        //     if ( $(this).scrollTop() > 5){
        //         menu.removeClass("default").addClass("header__top-line--fixed");
        //     } else if($(this).scrollTop() <= 5 && menu.hasClass("header__top-line--fixed")) {
        //         menu.removeClass("header__top-line--fixed")
        //     }
        // });//scroll
    // $(window).on("load",function(){
    //     $(".header-mnu a").mPageScroll2id();
    // });

      $('.header-mnu a[href*="#"], .header-logo a').click(function(){
        var id=$(this).attr('href'),
            position = $(id).offset().top;
        $('body,html').animate({scrollTop: position}, 1000);
      });

    //Then assign the src to null, this then stops the video been playing
    // $('#video').attr('src', '');

    // Finally you reasign the URL back to your iframe, so when you hide and load it again you still have the link
    // $('#video').attr('src', url);


	$('.mnu-trigger #nav-icon').click(function(){
        $('.header-mnu').toggleClass('db');
		$(this).toggleClass('open');
	});

    $('.header-call .callBack, .modal-section .callBack, .vlogenie-title .btn, .preglagaem__buy-link').on('click',function(){
        $('.form-popup-valid').bPopup({
            modalClose: false,
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'callOut'
        });
        return false;
    });
    // страница благодарности
    $('.form-popup-valid button.callBack').click(function (event) {
        event.preventDefault();
        location.href = "thanks.html";
    });
    // $('.modal-section .callBack').on('click',function(){
    //     $('.form-popup-valid').bPopup({
    //         modalClose: false,
    //         transition: 'slideBack',
    //         transitionClose: 'slideIn',
    //         closeClass:'callOut'
    //     });
    //     return false;
    // });

    $('.video-preview .video-controls').on('click',function(){
        // $(".itWorks-video-popup #video")[0].src += "&autoplay=1";
        $('.itWorks-video-popup').bPopup({
            modalClose: false,
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'popup-close'
        });
        return false;
    });
    $('.video-preview .video-controls').on('click',function(){
        $('.itWorks-video-popup video')[0].play();
        
    });
    //First get theiframe URL
    var url = $('#video2').attr('src');
    // var url2 = $('#video2').attr('src');

    $('.img-wrap .play').on('click',function(){
        $(".itWorks-video-popup-2 #video2")[0].src += "&autoplay=1";
        $('.itWorks-video-popup-2').bPopup({
            modalClose: false,
            transition: 'slideBack',
            transitionClose: 'slideIn',
            closeClass:'popup-close'
        });
        return false;
    });

    $('.itWorks-video-popup .popup-close').on('click',function(){
        $('.itWorks-video-popup video')[0].pause();
    });
    $('.itWorks-video-popup-2 .popup-close').on('click',function(){
        $('.itWorks-video-popup-2 #video2').attr('src', '');
        $('.itWorks-video-popup-2 #video2').attr('src', url);
    });

    /* xeonalex start */
    function currentHashSlider() {
        $('.owl-item.active').find('*[data-hash]').each(function(){
            var hash=$(this).data('hash');
            $('a[href="#'+hash+'"]').click();
        })
    }
    $("a.fancybox").fancybox();

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        asNavFor: ".slider__for",
        focusOnSelect: true,
        prevArrow:'<button type="button" class="slick-prev">Previous</button>',
        nextArrow:'<button type="button" class="slick-next">Next</button>', 
          responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }
  ]
    });

    $('.slider__for').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".slider",
        focusOnSelect: true,
    });
    // $(".comment-slider").owlCarousel({
    //     items: 1,
    //     URLhashListener:true,
    //     dots: true,
    //     // autoplay: true,
    //     nav:true,
    //     loop: true,
    //     onTranslated : currentHashSlider
    // });
    // $(".hashNav-item").on('click',  function activeSlide(event) {
    //     // event.preventDefault();
    //     if (!$(this).hasClass('active')) {
    //         /* Act on the event */
    //         var current = $(this),
    //             prev= current.prev(),
    //             next= current.next(),
    //             parentHash = current.closest('.hashNav'),
    //             hashes = parentHash.find(".hashNav-item");
    //             // очистка
    //         parentHash.find('.active').removeClass('active');
    //         parentHash.find('.visible').removeClass('visible');
    //             //
    //         current.addClass('active visible');

    //         if (hashes.first().hasClass('active')) {
    //             next.addClass('visible').next().addClass('visible');
    //         }
    //         if (hashes.last().hasClass('active')) {
    //             prev.addClass('visible').prev().addClass('visible');
    //         } else {
    //             next.addClass('visible');
    //             prev.addClass('visible');
    //         }
    //     }
    //     // return false;
    // });

    // currentHashSlider();
    // // alert('1');
    // /* xeonalex END */








        $('.i-phone').mask("+9 (999) 999-99-99");

        var pattern = /^[A-Za-zА-Яа-я\w]{1,15}/;
		var mail = $('#name');
		var phone = $('#phone');
		var mail_h = $('#name_h');
		var phone_h = $('#phone_h');
		mail.focusout(function(){
            // console.log(mail.val());
			if(mail.val() != ''){
				if(mail.val().search(pattern) == 0){
                    $('.form-popup-valid .i-label').removeClass('error').addClass('ok');
				}else{
					mail.addClass('error');
				}
			}
            else{
                $('.form-popup-valid .i-label').removeClass('ok').addClass('error');
			}
		});

		phone.focusout(function(){
            // console.log(typeof(phone.val()));
            var vNumber = phone.val();

            if(vNumber.match(/\d/g) !== null && vNumber.match(/\d/g).length == 11){
                $('.form-popup-valid .p-label').removeClass('error').addClass('ok');
			}
            else{
                $('.form-popup-valid .p-label').removeClass('ok').addClass('error');
			}
		});





		mail_h.focusout(function(){
            // console.log(mail.val());
			if(mail_h.val() != ''){
				if(mail_h.val().search(pattern) == 0){
                    $('.intro-form .i-label').removeClass('error').addClass('ok');
				}else{
					mail_h.addClass('error');
				}
			}
            else{
                $('.intro-form .i-label').removeClass('ok').addClass('error');
			}
		});

		phone_h.focusout(function(){
            // console.log(typeof(phone.val()));
            var vNumber_h = phone_h.val();

            if(vNumber_h.match(/\d/g) !== null && vNumber_h.match(/\d/g).length == 11){
                $('.intro-form .p-label').removeClass('error').addClass('ok');
			}
            else{
                $('.intro-form .p-label').removeClass('ok').addClass('error');
			}
		});

}); // конец document.ready
// google map
function initialize() {
    //получаем наш div куда будем карту добавлять
    var mapCanvas = document.getElementById('map_canvas');
    // задаем параметры карты
    var mapOptions = {
        //Это центр куда спозиционируется наша карта при загрузке
        center: new google.maps.LatLng(55.0114716, 82.93961906),
        //увеличение под которым будет карта, от 0 до 18
        // 0 - минимальное увеличение - карта мира
        // 18 - максимально детальный масштаб
        zoom: 16,
        scrollwheel: false,
        disableDefaultUI: true,
        // styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]}]
        //Тип карты - обычная дорожная карта
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //Инициализируем карту
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Объявляем массив с нашими местами и маркерами
    var markers = [],
        myPlaces = [];
    //Добавляем места в массив
    myPlaces.push(new Place('ул. Зыряновская, 53, офис 107', 55.0114716, 82.9372195, 'Новосибирск'));
    //Теперь добавим маркеры для каждого места
    for (var i = 0, n = myPlaces.length; i < n; i++) {

				var companyImage = new google.maps.MarkerImage('img/icons/map_marker.png',
					new google.maps.Size(145,93),
					new google.maps.Point(0,0),
					new google.maps.Point(0,45)
				);

        var marker = new google.maps.Marker({
            //расположение на карте
            position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
            map: map,
            icon: companyImage,
            //То что мы увидим при наведении мышкой на маркер
            title: myPlaces[i].name
          });
        //Добавим попап, который будет появляться при клике на маркер
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + myPlaces[i].name + '</h5><br/>' + myPlaces[i].description
        });
        //привязываем попап к маркеру на карте
        makeInfoWindowEvent(map, infowindow, marker);
        markers.push(marker);
    }
}
function makeInfoWindowEvent(map, infowindow, marker) {
    //Привязываем событие КЛИК к маркеру
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}
//Это класс для удобного манипулирования местами
function Place(name, latitude, longitude, description){
    this.name = name;  // название
    this.latitude = latitude;  // широта
    this.longitude = longitude;  // долгота
    this.description = description;  // описание места
}
//Когда документ загружен полностью - запускаем инициализацию карты.
google.maps.event.addDomListener(window, 'load', initialize);
