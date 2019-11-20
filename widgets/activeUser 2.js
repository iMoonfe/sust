var helper = new Helper();

var balls = {
    backCall: 0,
    countUser: 0,
    createOrder: 0
};

var countUser = 10;

function name() {
    var propOwn = Object.getOwnPropertyNames(settings.names);
    var man = settings.names[helper.randomInteger(0, propOwn.length - 1)];

    if (man == undefined) {
        console.log(settings.names, helper.randomInteger(0, settings.names.length - 1), settings.names.length)
    } else {
        var f = man['f'] ? man['f'] : '';
        var l = man['l'] ? man['l'] : '';

        return f + " " + l;
    }

    return " ";
}

//склонения слов в зависимости от числа
function declOfNum(number, titles)
{
    cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}

function doAction(options) {
    // принять решение показывать блок или нет

    var r = helper.randomInteger(1, 100);

    var backCallShow = r < balls.backCall;
    var countUserShow = r > balls.backCall && r < balls.countUser + balls.backCall;
    var createOrderShow = (r > balls.countUser + balls.backCall && r < balls.countUser + balls.backCall + balls.createOrder) && posibleShow('createOrder') && settings.count > 0;

    backCallShow = backCallShow && posibleShow('feedback');
    countUserShow = countUserShow && posibleShow('feedback');
    createOrderShow = createOrderShow && posibleShow('feedback');

    if (options.countUser && countUserShow) {
        var p = Math.round(countUser / 4);
        p = (p == 0) ? 1 : p;
        if (helper.randomInteger(1, 2) == 1) {
            countUser += helper.randomInteger(5, 5 + p);
        } else {
            countUser -= helper.randomInteger(5, 5 + p);
        }

        //по дефолту показываем от 50 до 150
        countUser = helper.randomInteger(50, 150);

        var human_cnt = Math.abs(countUser);

        options.text = "На сайте <b>" + human_cnt + "</b> " + declOfNum(human_cnt,['человек','человека','человек']);
        options.type = 'countUser';
        popup(options);
    }

    if (options.createOrder && createOrderShow) {
        if (settings.count <= 50 && posibleShow('reservCount')) {
            $('body').trigger('reservCount', settings.count);
        } else {
            count = helper.randomInteger(4, 10);
            if (settings.count - count > 0) {
                settings.count -= count;
            } else {
                $('body').trigger('bonusCount');
                count = settings.count;
                settings.count = Math.round(settings.countAll / 2);
            }
            //order = settings.price * count;

            var selectedCountry = window.allPrices[$('.orderFormWrapperCountry').val()];
            var currentCurrency = selectedCountry.currency.trim();
            var currentCost = selectedCountry.cost * 1;

            order = currentCost * count;

            //изменение кол-ва оставшихся упаковок
            if($('.lastpack').length > 0) {
                var current_count = $('.lastpack').html() * 1;
                $('.lastpack').html(current_count - count);
            }
            
            $('body').trigger('changeCount', settings.count);
            options.text = "<span class='name'><b>" + name() + "</b></span><span>сделал(а) заказ <b>" + count + " " + settings.unit + "</b> " + " на <b>" + order + currentCurrency + "</b></span>";
            options.type = 'createOrder';
            popup(options);
        }
    }

    if (options.backCall && backCallShow) {
        options.text = "<span class='name'><b>" + name() + "</b></span><span>заказал(а) звонок</span>";
        options.type = 'backCall';
        popup(options);
    }
}


function popup(options) {
    var type = (options.type) ? options.type : '';
    if (posibleShow(type)) {
        statusPopup[type] = true;
        $().toastmessage('showToast', {
            text: options.text,
            position: 'top-right',
            type: 'success',
            stayTime: 10000,
            closeText: '',
            close: function () {
            },
            autoClose: function () {
                statusPopup[type] = false;
            }
        });
    } else {
    }
}


function ActiveUserWidget(options) {
    var index = 0;
    var limit = options.sleepStart;

    options.backCallShow = isNaN(options.backCallShow) ? 0 : options.backCallShow;
    options.countUserShow = isNaN(options.countUserShow) ? 0 : options.countUserShow;
    options.createOrderShow = isNaN(options.createOrderShow) ? 0 : options.createOrderShow;

    var totalBalls = options.backCallShow + options.countUserShow + options.createOrderShow;
    if (totalBalls > 0) {
        balls.backCall = Math.round(100 / totalBalls * options.backCallShow);
        balls.countUser = Math.round(100 / totalBalls * options.countUserShow);
        balls.createOrder = Math.round(100 / totalBalls * options.createOrderShow);
    }
    var timer = window.setInterval(function () {
        index++;
        if (index >= limit) {
            $('body').trigger('timer');
            index = 0;
            limit = options.sleepStart + helper.randomInteger(1, options.sleepEnd);
        }
    }, 1000);
    $('body').on('timer', function () {
        // Пора делать какое то действие
        doAction(options);
    });
}