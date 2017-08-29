var div_top = $('#skills').offset().top;
var started = false;

$(window).scroll(function(){
    if($(window).scrollTop() > div_top && !started){
        animateSkills();
        started = true;
    }
});
$(document).ready(function(){
    if($(window).scrollTop() > div_top && !started){
        animateSkills();
        started = true;
    }
});


function animateSkills(){
    $(('.count')).each(function (index) {
        var self = $(this);
        setTimeout(function () {
            $({ Counter: 0 }).animate({ Counter: self.text() }, {
                duration: 5000,
                easing: 'linear',
                step: function () {
                    self.text(Math.ceil(this.Counter)+ "%");
                }
            });
        }, index * 2);
    });

    $('.animated').each(function (index) {
        var self = Snap(this);
        setTimeout(function () {
            var progress = self.select('.progress');
            var stroke = progress.attr('stroke-dasharray');
            if(stroke == 'none'){ progress.attr({strokeDasharray: '0, 251.2'}); }
            var max = parseInt(progress.attr('stroke-dasharray').split(',')[0]);
            max = max == 0 ? 251.2 : max;
            Snap.animate(0,max, function( value ) {
                progress.attr({ 'stroke-dasharray':value+',251.2'});
            }, 5000);
        }, index * 2);
    });
}