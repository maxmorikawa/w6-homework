(() => {

    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');
    
    $trigger[0].addEventListener('click', (e) => clickHandler(e));

    //クリックしたら実行される処理
    const clickHandler = (e) => {
        e.preventDefault();
        
        const $content =$trigger[0].nextElementSibling;
        if($content.style.display === 'block') {
            $content.style.display = 'none';
        } else {
            $content.style.display = 'block';
        }
    }
})();