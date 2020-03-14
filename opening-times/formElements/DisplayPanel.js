export default class DisplayPanel {
    constructor(state) {
        this.data = state
    }

    rearrangeByDay(array) {
        const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date();
        let n = d.getDay();
        let currentDay = day[n];
        let index = array.findIndex( el => el.day === currentDay );

        if (index !== -1) {
            let moveToBack = array.slice(0, index); 
            let moveToFront = array.slice(index, index + array.length);
            return moveToFront.concat(moveToBack);
        } else {
            return array;
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

            el.opened.forEach(timeElement);        console.log(div);

            div.appendChild(outerDiv);
        })
  
        return div;
    }
}