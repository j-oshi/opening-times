import Button from './Button.js';
import Day from './Day.js';
import OperatingHoursPanel from './OperatingHoursPanel.js';

export default class TimePanel {
    render() {
        // Add panel
        let Panel = document.createElement('article');
        Panel.setAttribute('class', 'panel');

        let header = document.createElement('header');
        header.setAttribute('class', 'header');
        header.appendChild(Day());
        Panel.appendChild(header);

        let list = document.createElement('main');
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

        let removeDayPanel = Button('Remove');
        removeDayPanel.className += " removePanel";

        // Remove operating panel
        removeDayPanel.addEventListener('click', function() {
            let el = this.closest('.panel');
            el.parentNode.removeChild(el);
        });
        
        let control = document.createElement('footer');
        control.setAttribute('class', 'time-list-control');
        control.appendChild(addToDayPanel);
        control.appendChild(removeDayPanel);
        Panel.appendChild(control);

        return Panel;
    }
};