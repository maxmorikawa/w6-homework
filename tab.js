(()=>{ //即時関数 ※グローバル関数が汚染されないために使う

const $doc = document;
const $tab = $doc.getElementById('js-tab');
const $nav = $tab.querySelectorAll('[data-nav]');
const $content = $tab.querySelectorAll('[data-content]');
const ACTIVE_CLASS = 'is-active';
const navLen = $nav.length;

//初期化
const init = () => {
    $content[0].style.display = "block";
};
init ();

//クリックしたら起こるイベント
const handleClick = (e) => {
    e.preventDefault(); //イベントのデフォルト動作を止める

    //クリックされたnavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;//その要素のDOM要素のデータ属性を取得

    //対象外のnav, content全て一旦リセットする
    let index = 0;
    while(index < navLen){
        console.log(index);
        $content[index].style.display = 'none';
        $nav[index].classList.remove(ACTIVE_CLASS);
        index++;
    }

    //対象のコンテンツをアクティブに化する
    $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';//クリックされたnavのデータ属性に応じて対応するコンテンツエリアのDOMを取得して表示させる
    $nav[targetVal].classList.add(ACTIVE_CLASS);//DOM属性についているclass属性の一覧を取得して、classListに”is-active”を追加する

    console.log('$nav[targetVal].classList', $nav[targetVal].classList);

};

//全nav要素に対して関数を適用・発火
let index = 0;
while(index < navLen) {
    $nav[index].addEventListener('click', (e) => handleClick(e));
    index++;
}

})();