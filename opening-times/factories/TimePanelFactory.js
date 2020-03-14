import TimePanel from '../formElements/TimePanel.js';

export default class TimePanelFactory {
    static createInstance() {
        const element = TimePanel ? new TimePanel() : null;
        return element;
    }
}