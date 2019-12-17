$(document).ready(function () {
    function randomCity() {
        var arr = [
            "Москва", "Санкт-Петербург", "Краснодар", "Свердловск", "Ростов", "Тюмень", "Челябинск", "Нижний Новгород", "Самара", "Красноярск", "Ставрополь", "Новосибирск", "Кемерово", "Пермь", "Волгоград",
            "Саратов", "Иркутск", "Барнаул", "Воронеж", "Оренбург", "Омск", "Владивосток", "Ханты-Мансийск", "Белгород", "Ижевск", "Тула", "Владимир", "Пенза", "Хабаровск", "Тверь", "Киров", "Ярославль",
            "Ульяновск", "Брянск", "Вологда", "Архангельск", "Липецк", "Рязань", "Курск", "Томск", "Тамбов", "Иваново", "Астрахань", "Калуга", "Калининград", "Смоленск", "Курган", "Благовещенск", "Мурманск",
            "Орел", "Кострома", "Псков", "Новгород", "Южно-Сахалинск", "Магадан", "Казань", "Ростов-на-Дону", "Уфа"
        ];
        var arrUkr = [
            "Винница", "Днепр", "Житомир", "Запорожье", "Ивано-Франковск", "Кропивницкий", "Луцк", "Львов", "Николаев", "Одесса", "Полтава", "Ровно", "Сумы", "Тернополь",
            "Ужгород", "Харьков", "Херсон", "Хмельницкий", "Черкассы", "Чернигов", "Черновцы"
        ];
        rand = Math.floor(Math.random() * arr.length);
        randUkr = Math.floor(Math.random() * arrUkr.length);

        countryCode = $("input[name='country_code']").val();

        if (countryCode == 'RU') {
            return arr[rand]
        }
        else return arrUkr[randUkr]
    }

    for (var i = 0; i < $('.random-city').length; i++) {
        var cityKey = 'city' + i;
        if (!localStorage.getItem(cityKey)) {
            localStorage.setItem(cityKey, randomCity());
        }
    }
    $('.random-city').each(function (i) {
        var cityKey = localStorage.getItem('city' + i);
        $(this).text(cityKey);
    });




    /* modal */
    $('.header-call').on('click', function (event) {
        event.preventDefault();
        $(".popup-callback").fadeIn(300);
    });
    $('.phone-call').on('click', function (event) {
        event.preventDefault();
        $(".popup-phone").fadeIn(300);
    });

    $('.close-modal,.popup-close').on('click', function (event) {
        event.preventDefault();
        $(".popup-callback").fadeOut(300);
        $(".popup-phone").fadeOut(300);
    });

    $('.popup-mouseleave .close-modal,.popup-mouseleave .popup-close').on('click', function (event) {
        event.preventDefault();
        $('.popup-mouseleave').addClass('hide');
    });



    $(".video-ancor").on("click", function () {
        var id = $(this).attr('data-scroll');
        var top = $('#'+id).offset();
            top = top.top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


});
