$(function (){

    // ------------ mustSlider ------------
    let mustItemGap = parseInt($('.must-list').css('gap'));
    let mustItemWidth = $('.must-item').width() + mustItemGap;
    let mustItemCount = $('.must-item').length;
    let mustListWidth = mustItemWidth * mustItemCount;
    $('.must-list').width(mustListWidth);

    let sliderWidth = $('.must-list-wrapper').width();
    let centerViewWidth = mustItemWidth + $('.must-item').width() * 2;
    let offset = mustItemWidth + mustItemGap/2 - (sliderWidth - centerViewWidth) / 2;

    let clonedList = $(".must-list").clone();
    $(".must-list-wrapper").append(clonedList);

    let index = mustItemCount;
    $('.must-list').css('left',`${(mustItemWidth * index + offset) * -1}px`);

    let activeIndex = 3;
    $('.must-item').removeClass('active');
    $(`.must-item:nth-child(${activeIndex})`).addClass('active');

    let timer = setInterval(moveToNext, 3000);

    window.addEventListener('resize', () =>{
        mustItemGap = parseInt($('.must-list').css('gap'));
        mustItemWidth = $('.must-item').width() + mustItemGap;
        mustListWidth = mustItemWidth * mustItemCount;
        $('.must-list').width(mustListWidth);

        sliderWidth = $('.must-list-wrapper').width();
        centerViewWidth = mustItemWidth + $('.must-item').width() * 2;
        offset = mustItemWidth + mustItemGap/2 - (sliderWidth - centerViewWidth) / 2;

        $('.must-list').css('left',`${(mustItemWidth * index + offset) * -1}px`);
    })
    $('#mustSliderLeftBtn').click(function(){
        clearInterval(timer);
        index--;
        activeIndex == 1 ? activeIndex = mustItemCount : activeIndex--;

        $('.must-list').animate({
            left: (mustItemWidth * index + offset) * -1,
        });

        
        if(index == 0){
            index = mustItemCount;
            setTimeout(function() {
                $('.must-list').css('left', (mustItemWidth * index + offset) * -1);
            }, 500);
        }
        $('.must-item').removeClass('active');
        $(`.must-item:nth-child(${activeIndex})`).addClass('active');
        timer = setInterval(moveToNext, 3000);
    })

    $('#mustSliderRightBtn').click(function(){
        clearInterval(timer);
        index++;
        activeIndex == mustItemCount ? activeIndex = 1 : activeIndex++;

        $('.must-list').animate({
            left: (mustItemWidth * index + offset) * -1,
        });

        
        if(index == mustItemCount + 1){
            index = 1;
            setTimeout(function() {
                $('.must-list').css('left', (mustItemWidth * index + offset) * -1);
            }, 500);
        }
        $('.must-item').removeClass('active');
        $(`.must-item:nth-child(${activeIndex})`).addClass('active');
        timer = setInterval(moveToNext, 3000);
    })

    function moveToNext(){
        index++;
        activeIndex == mustItemCount ? activeIndex = 1 : activeIndex++;

        $('.must-list').animate({
            left: (mustItemWidth * index + offset) * -1,
        });

        if(index == 0 | index == mustItemCount + 1){
            index == 0 ? index = mustItemCount : index = 1;
            setTimeout(function() {
                $('.must-list').css('left', (mustItemWidth * index + offset) * -1);
            }, 500);
        }

        $('.must-item').removeClass('active');
        $(`.must-item:nth-child(${activeIndex})`).addClass('active');
    }

    let newItems = document.querySelectorAll('.new-item');
    newItems.forEach((newItem, index) =>{
        newItem.style.animationDelay = `${index++}s`;
    })


})