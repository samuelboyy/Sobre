$(function () {
    let aboutContentWrapper = document.querySelectorAll('.about-content-wrapper');
    let animationTime = 4000;

    aboutContentWrapper.forEach(wrapper => {
        wrapper.addEventListener('mouseenter', () =>{
            if(window.innerWidth >= 900){
                if(!wrapper.classList.contains('animating')){
                    wrapper.classList.add('animating');
                    borderAnimationStart(wrapper);
                }
            }
        })
        wrapper.addEventListener('mouseleave', () => {
            if(window.innerWidth >= 900){
                if(wrapper.classList.contains('animating')){
                    borderAnimationEnd(wrapper);
                    setTimeout(() => {
                        wrapper.classList.remove('animating');
                    }, animationTime * 0.6)
                }
            }
        });
    });

    function borderAnimationStart(w){
        let currentWrapperWidth = $(w).width() + parseInt($(w).css('padding')) * 2;
        let currentWrapperHeight = $(w).height() + parseInt($(w).css('padding')) * 2;

        $(w).find('.about-border--topRight').css({
            borderTop: '8px solid var(--orange-500)',
            borderRight: '8px solid var(--orange-500)',
        }).animate({
            width: currentWrapperWidth + 8,
        }, animationTime * 0.25).animate({
            height: currentWrapperHeight + 8,
        }, animationTime * 0.25)

        $(w).find('.about-border--bottomLeft').css({
            borderBottom: '8px solid var(--orange-500)',
            borderLeft: '8px solid var(--orange-500)',
        }).animate({
            width: currentWrapperWidth + 8,
        }, animationTime * 0.25).animate({
            height: currentWrapperHeight + 8,
        }, animationTime * 0.25)
    }
    function borderAnimationEnd(w){
        let currentWrapperWidth = $(w).width() + parseInt($(w).css('padding')) * 2;
        let currentWrapperHeight = $(w).height() + parseInt($(w).css('padding')) * 2;

        $(w).find('.about-border--topRight').animate({
            left: currentWrapperWidth,
            width: 0,
        }, animationTime * 0.25).animate({
            top: currentWrapperHeight,
            width: 0,
            height: 0,
        }, animationTime * 0.25, function () {
            $(this).css({
                top: '-8px',
                left: '-8px',
                border: '0px',
            });
        })

        $(w).find('.about-border--bottomLeft').animate({
            right: currentWrapperWidth,
            width: 0,
        }, animationTime * 0.25).animate({
            bottom: currentWrapperHeight,
            width: 0,
            height: 0,
        }, animationTime * 0.25, function () {
            $(this).css({
                bottom: '-8px',
                right: '-8px',
                border: '0px',
            });
        })
    }
})