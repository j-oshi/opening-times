import loadScript from './loadScript.js';
import GetData from './formElements/PreviousState.js';
import ElementsFactory from './factories/ElementsFactory.js';
import Button from './formElements/Button.js';
import export2json from './formElements/ExportFile.js';

export default function addFormToBody(tag) {
    let nodeToMount = document.getElementById(tag);
    if (nodeToMount) {
        // Load css
        loadScript(); 

        // Add form wrapper
        let listPanel = document.createElement('div');
        listPanel.setAttribute('class', 'time-list-container');
        nodeToMount.appendChild(listPanel);

        // Add form control
        let listControl = document.createElement('div');
        listControl.setAttribute('class', 'time-list-control');
        let button = new Button({text: 'Add time panel'});
        let addToDayPanel = button.render();

        // Add operating panel
        addToDayPanel.addEventListener('click', function() {
            if ([...listPanel.childNodes].length < 7) {
                let addPanel = ElementsFactory.createInstance();
                let panel = addPanel.render();
                listPanel.appendChild(panel);
            }
        });
        listControl.appendChild(addToDayPanel);
        nodeToMount.appendChild(listControl);

        // Add form control
        let listResult = document.createElement('div');
        listResult.setAttribute('class', 'time-list-control');
        let buttonResult = new Button({text: 'Result'});
        let result = buttonResult.render();

        // Show result
        result.addEventListener('click', function() {
            let OpeningTimeTag = [...document.querySelectorAll('.time-list-container .panel')];
            if (OpeningTimeTag.length > 0) {
                let time = OpeningTimeTag.map(period => {
                    let header = [...period.getElementsByClassName('header')][0];
                    let day = header.getElementsByTagName('select')[0].value;
                    let scheduleTag = [...period.getElementsByClassName('list')][0];
                    let schedule = [...scheduleTag.getElementsByClassName('time-container')];
                    let opened = schedule.map(businessPeriod => {
                        let result = [...businessPeriod.getElementsByTagName('select')];
                        let periods = {
                            start: {
                                hour: result[0].value,
                                minute: result[1].value,
                            },
                            end: {
                                hour: result[2].value,
                                minute: result[3].value,
                            },
                        }
                        return periods;
                    });  

                    let Opening = {
                        day,
                        opened,
                    }
                    return Opening;

                });
                // console.log(time);
                if (time) {
                    export2json(time);
                }

            }
        });       

        listResult.appendChild(result);
        nodeToMount.appendChild(listResult);
    }
}