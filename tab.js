(()=>{ //即時関数 ※グローバル関数が汚染されないために使う

const $doc = document;
const $tab = $doc.getElementById("js-tab");
const $nav = $tab.querySelectorAll("[data-nav]");
const $content = $tab.querySelectorAll("[data-content]");

console.log("$content",$content);

})();