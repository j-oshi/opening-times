export default class Button {
    constructor(state) {
        this.node = state.text || 'enter name';
    }

    render() {
        let button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.textContent = this.node;
        return button;
    };
}