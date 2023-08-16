(() => {

    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');
    
    $trigger[0].addEventListener('click', (e) => clickHandler(e));

    //クリックしたら実行される処理
    const clickHandler = (e) => {
        e.preventDefault();
        console.log('Clicked');
    }
})();