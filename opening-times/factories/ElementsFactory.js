import DayPanel from '../formElements/DayPanel.js';
// import OperatingHoursPanel from '../formElements/OperatingHoursPanel.js';
// import Textarea from './FormElements/textarea';
// import Select from './FormElements/select';

// const ELEMENTS = {
//     Email,
//     Textarea,
//     Select
// };

export default class ElementsFactory {
    static createInstance() {
        const element = DayPanel ? new DayPanel() : null;
        return element;
        // return element;
    //     const elementCreator = ELEMENTS[data.type];
    //     const element = elementCreator ? new elementCreator(data) : null;
        // const element = OperatingHoursPanel ? new OperatingHoursPanel() : null;
        // return element;
    }
}