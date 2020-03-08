export default function loadStyleSheet() {
    // Check if stylesheet exist before loading script
    let styleSheet = [...document.querySelectorAll("link")];
    let linkArray = styleSheet.map(style => style.href.includes("")).filter(linkExist => linkExist === true);
    if (linkArray.length < 1) {
        let styleTag = document.createElement('link');
        styleTag.type = 'text/css';
        styleTag.rel = 'stylesheet';
        styleTag.href = 'opening-times.css';
        document.getElementsByTagName('head')[0].appendChild(styleTag);
    }
}