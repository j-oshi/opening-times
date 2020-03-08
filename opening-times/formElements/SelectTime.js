export default class SelectTime {
    constructor(state) {
        this.name = state.period;
        this.storedTime = state.time || null;
    }

    // Create select button
    selectButton(array) {
        let button = document.createElement('div');
        button.setAttribute('class', 'custom-select');
        button.addEventListener('change',function(){
            console.log(this.closest('.time-container'));
        });

        // Create and append select list
        let selectList = document.createElement("select");
        selectList.setAttribute('class', 'select-css');
        button.appendChild(selectList);

        // Create and append the options
        for (let i = 0; i < array.length; i++) {
            let option = document.createElement("option");
            option.value = array[i];
            option.text = this.padNumber(array[i]);
            selectList.appendChild(option);
        }

        return button;
    };

    padNumber(c) {
        if (c > 9) {
          return c;
        } else {
          return `${0}${c}`;
        }
    };

    render() {
        // Time button
        let hour = [...Array(24).keys()];
        let minute = [...Array(60).keys()];

        let content = document.createElement('div');
        let span = document.createElement("SPAN");
        let spanText = document.createTextNode(' : ');

        span.appendChild(spanText);
        content.setAttribute('class', `time-panel ${this.name}`);
        content.appendChild(this.selectButton(hour));
        content.appendChild(span);
        content.appendChild(this.selectButton(minute));

        return content;
    }
}