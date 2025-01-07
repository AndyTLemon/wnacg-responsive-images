// ==UserScript==
// @name         wnacg image fits screen size
// @name:zh-TW   wnacg圖片符合螢幕尺寸
// @name:zh-CN   wnacg图片符合屏幕尺寸
// @name:ja      wnacg画像を画面サイズに合わせる
// @version      1.0.0
// @description  Adjust wnacg website images to fit screen size
// @description:zh-TW 調整 wnacg 網站圖片以符合螢幕尺寸
// @description:zh-CN 调整 wnacg 网站图片以符合屏幕尺寸
// @description:ja      wnacgサイトの画像を画面サイズに合わせる
// @author       AndyTLemon
// @match        http*://*.wnacg.com/photos-view-id-*.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wnacg.com
// @grant        none
// @license      GPL-3.0-or-later
// @namespace    https://greasyfork.org/users/1193722
// ==/UserScript==

function main() {
    const style = document.createElement('style');
    style.innerHTML = `
        .photo_body {
            max-height: 90vh;
            max-width: 90vw;
            display: block;
            margin-left: auto !important;
            margin-right: auto !important;
        }
        .photo_body #imgarea {
            display: flex;
            justify-content: center;
            align-items: center;
            max-height: 90vh;
            max-width: 90vw;
            overflow: visible;
        }
        .photo_body #imgarea img,
        .photo_body #imgarea a {
            max-height: 90vh;
            max-width: 90vw;
            object-fit: contain;
            padding: 0 !important;
        }
        .photo_body #tuzaoblock {
            display: none;
        }
    `;
    document.head.appendChild(style);
    scrollToCenter("picarea");
}

function scrollToCenter(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;

        const scrollTop = window.scrollY || window.pageYOffset;
        const centerPosition = rect.top + scrollTop - (window.innerHeight / 2) + (elementHeight / 2);

        window.scrollTo({
            top: centerPosition
        });
    }
}

(function() {
    window.onload = main;
})();
