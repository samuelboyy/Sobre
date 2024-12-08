$(document).ready(function () {
    //--------- Header --------
    let header = document.querySelector('header');
    let lastScrollY = 0;
    let scrollTimeout;

    let scrollTop = document.querySelector('#scrollTop');

    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 80) {
            header.classList.add('headerScroll');
        } else {
            header.classList.remove('headerScroll');
        }

        if (currentScrollY < lastScrollY) {
            header.classList.add('headerScroll');
        }

        scrollTimeout = setTimeout(() => {
            if (currentScrollY > 80) { // Only reset if we're past the threshold
                header.classList.remove('headerScroll');
            }
        }, 200);

        lastScrollY = currentScrollY;

        //scrollTop
        if(window.scrollY > 100){
            $(scrollTop).css('display', 'flex');
        }else{
            $(scrollTop).css('display', 'none');
        }
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({top: 0});
    })

    //--------- Hamburger Menu -------- 
    let menuHam = document.querySelector('#menuHam');
    let menuHamLine1 = $(menuHam).find('.line1');
    let menuHamLine2 = $(menuHam).find('.line2');
    let menuHamLine3 = $(menuHam).find('.line3');
    let mainMenu = document.querySelector('nav ul');
    let pageOverlay = document.querySelector('#pageOverlay');


    window.addEventListener('resize', () =>{
        if(window.innerWidth >= 1100){
            closeMenu();
            $(mainMenu).css('display', 'flex');


        }
    })
    menuHam.addEventListener('click', (event) => {
        
        event.stopPropagation();

        if(!menuHam.classList.contains('expand')) {
            $(pageOverlay).css('display', 'block');

            menuHam.classList.add('expand');     
            $(mainMenu).css('display', 'flex');
            $(mainMenu).animate({
                left: 0
            }, 500)

            $(menuHamLine1).css({
                transform: 'translateY(10px) rotate(45deg)'
            });
            $(menuHamLine2).css({
                opacity: 0
            })
            $(menuHamLine3).css({
                width: '100%',
                transform: 'translateY(-10px) rotate(-45deg)'
            });

            pageOverlay.addEventListener('click', closeMenu);

        }else{
            closeMenu();
            setTimeout(() =>{
                $(mainMenu).css('display', 'none');
            }, 500);


            pageOverlay.removeEventListener('click', closeMenu);
            
        }
    })
    
    function closeMenu(){
        if(menuHam.classList.contains('expand')){
            $(pageOverlay).css('display', 'none');

            menuHam.classList.remove('expand');
            $(mainMenu).animate({
                left: '-40rem'
            }, 500);

            $(menuHamLine1).css({
                transform: 'none'
            });
            $(menuHamLine2).css({
                opacity: 1
            })
            $(menuHamLine3).css({
                width: 'calc(100% - 16px)',
                transform: 'none'
            });

            let expandMenuWithSubmenus = document.querySelectorAll('.menuWithSubmenu.expand');
            expandMenuWithSubmenus.forEach(menu => {
                menu.classList.remove('expand');
                let submenu = $(menu).find('.submenu');
                let menuHeight = parseInt($('nav li').css('height'));

                $(menu).css('height', menuHeight + 'px');

                let expandBtn = menu.querySelector('.subMenu-expandBtn');
                if (expandBtn.classList.contains('expand')){
                    expandBtn.classList.remove('expand');
                }
            });
        }
    }

    let expandBtns = document.querySelectorAll('.subMenu-expandBtn');

    expandBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            let menu = btn.parentElement;
            let submenuCount = $(menu).find('li').length;
            let menuHeight = parseInt($('nav li').css('height'));

            if (!menu.classList.contains('expand')) {
                menu.classList.add('expand');
                btn.classList.add('expand');

                $(menu).animate({
                    height: (submenuCount + 1) * menuHeight + 'px',
                }, 500);
            } else {
                btn.classList.remove('expand');

                $(menu).animate({
                    height: menuHeight + 'px',
                }, 500);
                
                setTimeout(() => {
                    menu.classList.remove('expand');
                }, 450)
            }
        })
    })
});
function getScrollY(item) {
    let rect = item.getBoundingClientRect();
    return rect.top + window.scrollY;
}
function isInViewPort(item){
    let rect = item.getBoundingClientRect();
    return rect.top >= 0 && (rect.top + window.innerHeight * 0.3) <= (window.innerHeight || document.documentElement.clientHeight);
}
function toCamelCase(str) {
    return str.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join('');
}