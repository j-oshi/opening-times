export default function Day() {
    let button = document.createElement('div');
    button.setAttribute('class', 'custom-day-select');

    // Create and append select list
    let selectList = document.createElement("select");
    selectList.setAttribute('class', 'select-css');
    button.appendChild(selectList);

    // Create and append the options
    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    for (let i = 0; i < day.length; i++) {
        let option = document.createElement("option");
        option.value = day[i];
        option.text = day[i];
        selectList.appendChild(option);
    }

    return button;
}