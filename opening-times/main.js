import loadScript from './loadScript.js';
import GetData from './formElements/PreviousState.js';
import TimePanelFactory from './factories/TimePanelFactory.js';
import Button from './formElements/Button.js';
import export2json from './formElements/ExportFile.js';
import GetTimeValue from './formElements/GetTimeValue.js';
import DisplayPanel from './formElements/DisplayPanel.js';
import DataFromDisplay from './formElements/DataFromDisplay.js';

export default function addFormToBody(tag) {
    let nodeToMount = document.getElementById(tag);
    if (nodeToMount) {
        // Load css
        loadScript();

        // Create and add form control
        let listControl = document.createElement('footer');
        listControl.setAttribute('class', 'time-list-control');
        let addToDayPanel = Button('Add time panel');

        // List panel
        let listPanel = document.getElementById('time-list-container');

        // Add add button to footer in operating panel
        addToDayPanel.addEventListener('click', function () {
            if ([...listPanel.childNodes].length < 7) {
                let addPanel = TimePanelFactory.createInstance();
                let panel = addPanel.render();
                listPanel.appendChild(panel);
            }
        });
        listControl.appendChild(addToDayPanel);
        nodeToMount.insertAdjacentElement('afterend', listControl);

        // Add form control
        let buttonResult = Button('Result');
        let nodeToSide = document.getElementById('o-Hours');

        // Show result
        buttonResult.addEventListener('click', function () {
            let OpeningTimeTag = [...document.querySelectorAll('#time-list-container .panel')];
            if (OpeningTimeTag.length > 0) {
                let load = new GetTimeValue(OpeningTimeTag);
                let displayOpening = new DisplayPanel(load.result());
                let table = displayOpening.render();

                if (nodeToSide.firstChild) {
                    nodeToSide.removeChild(nodeToSide.firstChild);
                }

                nodeToSide.appendChild(table);
            }
        });

        listControl.appendChild(buttonResult);

        let listSave = document.createElement('div');
        listSave.setAttribute('class', 'time-display-control');
        let buttonSave = Button('Save');
        listSave.appendChild(buttonSave);
        nodeToSide.parentNode.appendChild(listSave);

        listSave.addEventListener('click', function () {
            let data = DataFromDisplay('#o-Hours .o-time');
            if (data) {
                export2json(data);
            }
        })
    }
}