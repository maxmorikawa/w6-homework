(() => {

    class Accordion {
        //初期化
        constructor(obj){ //一番最初に実行される

            console.log('obj', obj.hookName);
            const $elm = document.querySelector(obj.hookName);
            const $trigger = $elm.getElementsByTagName(obj.tagName);
            
            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));//クラスの中で関数を使う場合は関数の前に”this.”が必要
                index++;
            }
        }

        //クリックしたら実行される処理
        clickHandler(e) { //関数にconstは不要となる
        e.preventDefault();
        
        const $target = e.currentTarget;
        const $content =$target.nextElementSibling;

            if($content.style.display === 'block') {
            $content.style.display = 'none';
            } else {
            $content.style.display = 'block';
            }
         }
    }

   const fuckingAccordion = new Accordion({
    hookName: '#js-faq',
    tagName: 'p'
   });

   const dummyAccordion = new Accordion({
    hookName: '#js-accordion',
    tagName: 'a'
   });

   const miniAccordion = new Accordion({
    hookName: '#js-accordion-mini',
    tagName: 'dt'
   });

})();