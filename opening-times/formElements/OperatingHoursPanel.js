import SelectTime from './SelectTime.js';
import Button from './Button.js';

export default class OperatingHoursPanel {
    render() {
        let startPeriod = {period: 'start', time: null};
        let start = new SelectTime(startPeriod);
        let endPeriod = {period: 'end', time: null};
        let end = new SelectTime(endPeriod);

        let span = document.createElement("SPAN");
        let spanText = document.createTextNode(' - ');
        span.appendChild(spanText);

        let div = document.createElement('div');
        div.setAttribute('class', 'time-container');
        div.appendChild(start.render());
        div.appendChild(span);
        div.appendChild(end.render());

        let removeFromOperatingPanel = Button('remove');
        removeFromOperatingPanel.className += " remove";
        removeFromOperatingPanel.addEventListener('click', function() {
            let el = this.closest('.time-container');
            el.parentNode.removeChild(el);
        });

        div.appendChild(removeFromOperatingPanel);
        return div;
    }
}