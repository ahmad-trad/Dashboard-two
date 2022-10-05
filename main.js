let aside = document.querySelector('.container aside');
let menu = document.querySelector('.right .top-right .menu-btn');


menu.onclick = () =>{
    aside.classList.add('active');
    
}


//button close
let btnClose = document.querySelector('.container aside .top .icon');

btnClose.onclick = () =>{
    aside.classList.remove('active');
}

//dark mode
let buttonDarkMode = document.querySelector('.container .right .top-right .toggle-button');
let buttonActive = document.querySelectorAll('.container .right .top-right .toggle-button span');
let elementDark = document.querySelectorAll('.dark');

buttonDarkMode.onclick = () =>{
    buttonActive.forEach((el) =>{
        // el.className === 'active' ? el.classList.remove('active') : el.classList.add('active');
        if(el.className === 'material-symbols-sharp active'){
            el.classList.remove('active');
        }else{
            el.classList.add('active');
            if(el.innerHTML === 'dark_mode'){
                document.body.style.cssText = "background: #000; color: #fff;";
                elementDark.forEach((ele) =>{
                    ele.style.cssText = 'background: #181a1e; color: #fff;';
                })
                aside.style.cssText = "background: #000; color: #fff;";
            }else{
                document.body.style.removeProperty('background');
                document.body.style.removeProperty('color');
                document.body.style.cssText = "background: #f6f6f9; color: #363949";
                elementDark.forEach((ele) =>{
                    ele.style.removeProperty('background');
                    ele.style.removeProperty('color');
                    ele.style.cssText = 'background: #fff; color: #000;'
                })
            }
        }


        // if(el.innerHTML === 'light_mode'){
        //     document.body.style.removeProperty('background');
        //     document.body.style.removeProperty('color');
        //     document.body.style.cssText = "background: #f6f6f9; color: #363949";
        //     elementDark.forEach((ele) =>{
        //         ele.style.removeProperty('background');
        //         ele.style.removeProperty('color');
        //         ele.style.cssText = 'background: #fff; color: #000;'
        //     })
        // }
    })
}

console.log(elementDark);