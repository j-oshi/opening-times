import SelectTime from './SelectTime.js';

export default class OperatingHoursPanel {
    constructor(element) {
        // this.name = element.name;
        // this.text = element.text;
    }
    
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
        return div;
    }
}