export default function Button(text) {
    let button = document.createElement('button');
    button.setAttribute('class', 'button');
    button.textContent = text;
    return button;
}


