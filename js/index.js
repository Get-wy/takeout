function loaded(){
    var isScroll=new IScroll('#content',{
        mouseWheel: true,
        scrollbars: true,
        shrinkScrollbars:'scale',
        click:true
    });
}
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});
