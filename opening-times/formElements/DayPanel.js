// import OperatingHoursPanel from './OperatingHoursPanel';
import Button from './Button.js';
import Day from './Day.js';
import OperatingHoursPanel from './OperatingHoursPanel.js';

export default class DayPanel {
    constructor() {

    }

    render() {
        // Add panel
        let Panel = document.createElement('div');
        Panel.setAttribute('class', 'panel');

        let header = document.createElement('div');
        header.setAttribute('class', 'header');
        header.appendChild(Day());
        Panel.appendChild(header);

        let list = document.createElement('div');
        list.setAttribute('class', 'list');
        Panel.appendChild(list);

        let button = new Button({text: 'Add time'});
        let addToDayPanel = button.render();
        addToDayPanel.addEventListener('click', function() {
            if ([...list.childNodes].length < 10) {
                let addHour = new OperatingHoursPanel();
                let openHour = addHour.render();
                list.appendChild(openHour);
            }
        });
        Panel.appendChild(addToDayPanel);

        return Panel;
    }
};