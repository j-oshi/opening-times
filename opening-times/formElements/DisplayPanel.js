export default class DisplayPanel {
    constructor(state) {
        this.data = state
    }

    rearrangeByDay(array) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];      
        if (array.length < 1) {
            return;
        }

        // Remove duplicate days and fill in missing days
        let uniqueDays = [...new Set(array.map(date => date.day))].map(day => {return array.find(date => date.day === day)});
        let fillDays = days.map(day => {
            let foundDay = uniqueDays.find(date => date.day === day);
            if (foundDay) {
                return foundDay;
            } else {
                return {day, opened: 'closed'};
            }
        });

        let d = new Date();
        let n = d.getDay();
        let currentDay = days[n];

        let index = fillDays.findIndex( el => el.day === currentDay );

        if (index !== -1) {
            let moveToBack = fillDays.slice(0, index); 
            let moveToFront = fillDays.slice(index, index + fillDays.length);
            return moveToFront.concat(moveToBack);
        } else {
            return fillDays;
        }
    }

    render() {
        let currentTime = this.rearrangeByDay(this.data);
        let div = document.createElement('div');

        currentTime.forEach( el => {
            // Day title
            let outerDiv = document.createElement('div');
            outerDiv.setAttribute('class', 'o-time');
            let innerSpan = document.createElement('span');
            let divText = document.createTextNode(el.day);
            innerSpan.appendChild(divText);
            outerDiv.appendChild(innerSpan);

            const timeElement = innerEl => {
                let timeDiv = document.createElement('span');
                let timeText = document.createTextNode(`${innerEl.start.hour}:${innerEl.start.minute} - ${innerEl.end.hour}:${innerEl.end.minute}`);
                timeDiv.appendChild(timeText);
                outerDiv.appendChild(timeDiv);
            };

            const closed = () => {
                let closeDiv = document.createElement('span');
                let closeText = document.createTextNode('closed');
                closeDiv.appendChild(closeText);
                outerDiv.appendChild(closeDiv);
            }
            let process = ((typeof el.opened) === 'object') ? el.opened.length > 0 ?  el.opened.forEach(timeElement) : closed() : closed();

            div.appendChild(outerDiv);
        })
  
        return div;
    }
}