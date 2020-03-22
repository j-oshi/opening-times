export default function DataFromDisplay(tag) { 
    let els = document.querySelectorAll(tag);
    let elResult = [...els].map(el => {
        let elArray = [...el.childNodes];
        let [firstChild, ...restOfCildren] = elArray ;
        return {
            day: firstChild.innerText,
            operating: restOfCildren.map(spanEl => {
                return {
                    time: spanEl.innerText,
                }
            })
        }
    });
    return elResult;
}