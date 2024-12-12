function AppendActivity(day) {
    ActivityHandler.pushActivity(day)
}

function RemoveActivity(id) {
    ActivityHandler.removeActivity(id)
}


function getContainerId(day) {
    switch (day) {
        case "Monday":
            return "activityContainerMonday";
        case "Tuesday":
            return "activityContainerTuesday";
        case "Wednesday":
            return "activityContainerWednesday";
        case "Thursday":
            return "activityContainerThursday";
        case "Friday":
            return "activityContainerFriday";
    }
}

class ActivityHandler {
    static activityDictionary = new Map()
    static counter = 0;
    
    

    static pushActivity(day) {
        this.counter += 1;
        let divId = day + this.counter.toString();
        let activityElement = new ActivityElement(divId);
        this.activityDictionary.set(divId, activityElement);

        let btnId = "Btn" + this.counter.toString();
        let containerId = getContainerId(day);
        let textId = day + "Txt" + this.counter.toString();
        let durId = day + "Dur" + this.counter.toString()
        
        activityElement.appendActivity(containerId, divId, btnId, textId, durId)
    }

    static removeActivity(activityElement) {
        
        if (this.activityDictionary.has(activityElement.id)) {
            activityElement.remove()
            console.log(this.activityDictionary.size)
        }

    }

}

class ActivityElement {
    htmlId = ""

    constructor(htmlTagId) {
        this.htmlId = htmlTagId;
    }

    appendActivity(dayId, divId, btnId, textId, durId) {
        document.getElementById(dayId).insertAdjacentHTML("beforeend",
            "           <div id='temp'> \n" +
            "                <label class=\"ActivityLabel col-container\">\n" +
            "                    <input class=\"Activity item\" id='temp2' name='temp2'>\n" +
            "                    <input class=\"Duration item\" id='temp3' name='temp3'>\n" +
            "                    <button type=\"button\" id='temp4' onclick='' class=\"btn btn-light btn-sm btnX\" \"\n" +
            "                            >\n" +
            "                        X\n" +
            "                    </button>\n" +
            "                </label>\n" +
            "           </div>"
        )

        let activityElement = document.getElementById('temp');
        let inputElem1 = document.getElementById('temp2');
        let inputElem2 = document.getElementById('temp3');
        let button = document.getElementById('temp4');
        activityElement.id = divId;
        inputElem1.id = textId;
        inputElem1.name = textId;
        inputElem2.id = durId;
        inputElem2.name = durId;
        button.id = btnId;
        button.addEventListener('click', () => ActivityHandler.removeActivity(activityElement))
    }

}