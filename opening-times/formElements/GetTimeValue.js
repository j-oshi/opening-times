export default class GetTimeValue {
    constructor(elList) {
        this.elList = elList
    }

    result() {
        let time = this.elList.map(period => {
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
        return time;
    }
}