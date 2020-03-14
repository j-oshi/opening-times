import loadScript from './loadScript.js';
import GetData from './formElements/PreviousState.js';
import TimePanelFactory from './factories/TimePanelFactory.js';
import Button from './formElements/Button.js';
import export2json from './formElements/ExportFile.js';
import GetTimeValue from './formElements/GetTimeValue.js';
import DisplayPanel from './formElements/DisplayPanel.js';

export default function addFormToBody(tag) {
    let nodeToMount = document.getElementById(tag);
    if (nodeToMount) {
        // Load css
        loadScript(); 

        let data;

        // Add form wrapper
        let listPanel = document.createElement('div');
        listPanel.setAttribute('class', 'time-list-container');
        nodeToMount.appendChild(listPanel);

        // Add form control wrapper and add button
        let listControl = document.createElement('div');
        listControl.setAttribute('class', 'time-list-control');
        let addToDayPanel = Button('Add time panel');

        // Add operating panel
        addToDayPanel.addEventListener('click', function() {
            if ([...listPanel.childNodes].length < 7) {
                let addPanel = TimePanelFactory.createInstance();
                let panel = addPanel.render();
                listPanel.appendChild(panel);
            }
        });
        listControl.appendChild(addToDayPanel);
        nodeToMount.appendChild(listControl);

        // Add form control
        let listResult = document.createElement('div');
        listResult.setAttribute('class', 'time-list-control');
        let buttonResult = Button('Result');
        let nodeToSide = document.getElementById('o-Hours');

        // Show result
        buttonResult.addEventListener('click', function() {
            let OpeningTimeTag = [...document.querySelectorAll('.time-list-container .panel')];
            if (OpeningTimeTag.length > 0) {
                console.log(OpeningTimeTag);
                let load = new GetTimeValue(OpeningTimeTag);
                let displayOpening = new DisplayPanel(load.result());
                data = load.result()
                displayOpening.render();

                let table = displayOpening.render()
                if (nodeToSide.firstChild) {
                    nodeToSide.removeChild(nodeToSide.firstChild);
                }

                nodeToSide.appendChild(table);
            }
        });  
        
        let listSave = document.createElement('div');
        listSave.setAttribute('class', 'time-list-control');
        let buttonSave = Button('Save');
        listSave.appendChild(buttonSave);
        nodeToSide.parentNode.appendChild(listSave);

        listSave.addEventListener('click', function() {
            if (data) {
                export2json(data);
            }
        })

        listResult.appendChild(buttonResult);
        nodeToMount.appendChild(listResult);
    }
}