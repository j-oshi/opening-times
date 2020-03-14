// import OperatingHoursPanel from './OperatingHoursPanel';
import Button from './Button.js';
import Day from './Day.js';
import OperatingHoursPanel from './OperatingHoursPanel.js';

export default class TimePanel {
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

        let addToDayPanel = Button('Add time');
        addToDayPanel.addEventListener('click', function() {
            if ([...list.childNodes].length < 4) {
                let addHour = new OperatingHoursPanel();
                let openHour = addHour.render();
                list.appendChild(openHour);
            }
        });
        
        let control = document.createElement('div');
        control.setAttribute('class', 'time-list-control');
        control.appendChild(addToDayPanel);
        Panel.appendChild(control);

        return Panel;
    }
};