//初始化适应


//加载

loader_Fun()



//加载

function loader_Fun() {

    var callbacks = [];
    var imgs = ['images/AdviseVertical.png', 'images/fyps-p1-1.png', 'images/fyps-p1-2.png', 'images/fyps-p1-3.png', 'images/fyps-p1-4.png', 'images/fyps-p1-5.png', 'images/fyps-p1-6.png', 'images/fyps-p1-7.png', 'images/fyps-p1-8.png', 'images/fyps-p1-9.png', 'images/fyps-p1-10.png', 'images/fyps-p1-11.png', 'images/fyps-p1-12.png', 'images/fyps-p1-13.png', 'images/fyps-p1-14.png', 'images/fyps-p1-15.png', 'images/fyps-p1-16.jpg', 'images/fyps-p1-20.png'];

    imgLoader(imgs, function(percentage) {

        var i = callbacks.length;
        callbacks.push(function() {
            setTimeout(function() {
                var percentT = percentage * 100;
                $('.loading span').html((parseInt(percentT)) + '%');
                if (percentage == 1) {
                    setTimeout(function() {


                        SH = $(window).height()
                        kevin_resize({ size: [640, 1136], full: 1 });
                        $('.loading').remove();
                        $('.main').css('display', 'block')

                        p1_Fun()

                        if ($(window).width() == 375 && $(window).height() == 724) {

                            $('.p1-video-mc').css('margin-top', '7.8rem');


                        } else {




                        }

                    }, 100);
                }
                callbacks[i + 1] && callbacks[i + 1]();
            }, 20);
        });

        if (percentage == 1) {

            callbacks[0]();
        }


    });

}


//横屏提示

function rotate() {
    var orientation = window.orientation;
    if (orientation == 90 || orientation == -90) {

        $('.orientation').show()
        $('.back_btn').hide()
    }

}

window.onorientationchange = function() {

    $('.orientation').hide()
    $('.back_btn').show()
    rotate();
};



function p1_Fun() {


    TweenMax.fromTo($('.light1'), 1, { alpha: 0, x: -500, y: 60, delay: 0, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: 500, y: -60, delay: 0, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.light2'), 1.5, { alpha: 0, x: 105, y: 500, delay: .1, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, x: -155, y: -700, delay: .1, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-line'), 1, { alpha: 0, delay: .2, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, delay: .2, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-line2'), 1, { alpha: 0, delay: .3, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, delay: .3, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-img3'), 1, { alpha: 0, delay: .2, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, delay: .2, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-img2'), 1, { alpha: 0, delay: .3, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, delay: .3, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-img1'), 1, { alpha: 0, delay: .4, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, delay: .4, ease: Strong.easeOut, transformOrigin: "center center" });

    TweenMax.fromTo($('.p1-pd1'), .5, { alpha: 0, y: 100, x: 20, delay: .5, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, y: 0, x: 0, delay: .5, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-pd2'), .5, { alpha: 0, y: 100, x: 20, delay: .2, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, y: 0, x: 0, delay: .2, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-pd3'), .5, { alpha: 0, y: 100, x: 20, delay: .4, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, y: 0, x: 0, delay: .4, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-pd4'), .5, { alpha: 0, y: 100, x: 20, delay: .3, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, y: 0, x: 0, delay: .3, ease: Strong.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-pd5'), 1, { alpha: 0, delay: .7, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, delay: .7, ease: Strong.easeOut, transformOrigin: "center center" });

    TweenMax.fromTo($('.p1-title1'), 1.5, { alpha: 0, scale: 2, delay: .5, ease: Elastic.easeOut, transformOrigin: "center center" }, { alpha: 1, scale: 1, delay: .5, ease: Elastic.easeOut, transformOrigin: "center center" });
    TweenMax.fromTo($('.p1-title2'), 1.5, { alpha: 0, scale: 2, delay: .6, ease: Elastic.easeOut, transformOrigin: "center center" }, { alpha: 1, scale: 1, delay: .6, ease: Elastic.easeOut, transformOrigin: "center center" });

    TweenMax.fromTo($('.p1-video-mc'), .8, { alpha: 0, y: 100, delay: .7, ease: Strong.easeOut, transformOrigin: "center center" }, { alpha: 1, y: 0, delay: .7, ease: Strong.easeOut, transformOrigin: "center center" });

}


function p1_Out() {


    TweenMax.to($('.p1-line'), 0, { alpha: 0 });
    TweenMax.to($('.p1-line2'), 0, { alpha: 0 });
    TweenMax.to($('.p1-img3'), 0, { alpha: 0 });
    TweenMax.to($('.p1-img2'), 0, { alpha: 0 });
    TweenMax.to($('.p1-img1'), 0, { alpha: 0 });

    TweenMax.to($('.p1-pd1'), 0, { alpha: 0 });
    TweenMax.to($('.p1-pd2'), 0, { alpha: 0 });
    TweenMax.to($('.p1-pd3'), 0, { alpha: 0 });
    TweenMax.to($('.p1-pd4'), 0, { alpha: 0 });
    TweenMax.to($('.p1-pd5'), 0, { alpha: 0 });

    TweenMax.to($('.p1-title1'), 0, { alpha: 0 });
    TweenMax.to($('.p1-title2'), 0, { alpha: 0 });

    TweenMax.to($('.p1-video-mc'), 0, { alpha: 0 });

}



$(document).ready(

    function() {
        //点击封面播放图
        $('.p1-video-mc-bg2').bind('click', function() {
            $(this).css('display', 'none'); //隐藏当前
            $('.p1-video').css('display', 'block'); //显示video并播放
            $('.p1-video').trigger('play');
        });

        //点击视频
        $('.p1-video').bind('click', function() {
            $('.p1-video').trigger('pause');
            $(this).css('display', 'none');
            $('.p1-video-mc-bg2').css('display', 'block');
        });

        //视频播放结束
        $('.p1-video').bind('ended', function() {
            $(this).css('display', 'none');
            $('.p1-video-mc-bg2').css('display', 'block');
        });


    }
)