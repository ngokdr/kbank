$(function(){
    $('.btnSearch').on('click',function(){
        $('#searchBox').css({'visibility': 'visible'});
    });
    $('.btnClose').on('click',function(){
        $('#searchBox').css({'visibility': 'hidden'});
    });
    
    $('#searchBox li').on('click',function(){
        $(this).addClass('act');
        $(this).siblings().removeClass('act');
        
        var idx = $(this).index();
        
        $('[class^=tabCon]').hide();
        $('[class^=tabCon]').eq(idx).show();
        
    });
    
    
});