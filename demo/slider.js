$(function () {
    let divWidth = $('#sliderBoard').width()
    let imgCount = $('#content li').length
    
    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append(`<li></li>`)
    }
    $('#contentButton li:first').addClass(`clicked`)

    $(`#content li`).width(divWidth)    // li 的寬度
    $(`#content`).width(divWidth * imgCount)    // ul 的寬度

    let index = 0

    let timer = setInterval(moveToNext, 2000);

    $('#contentButton li').click(function(){
        clearInterval(timer);
        
        index = $(this).index()
        // alert(index)
        
        $(`#content`).animate({
            left: divWidth * index * -1,
        })
        
        $(this).addClass(`clicked`)
        $('#contentButton li').not(this).removeClass(`clicked`);
        
        timer = setInterval(moveToNext, 2000);
    })

    function moveToNext(){
        if(index < imgCount -1){
            index++;
        }else{
            index = 0;
        }

        $('#content').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked');
        $(`#contentButton li`).not(`#contentButton li:eq(${index})`).removeClass('clicked');
    }
});

// let timer = setInterval(某函數, 多少毫秒)