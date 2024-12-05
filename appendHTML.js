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
        console.log(this.activityDictionary.size)

        let btnId = "Btn" + this.counter.toString();
        let containerId = getContainerId(day);
        activityElement.appendActivity(containerId, divId, btnId)
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

    appendActivity(dayId, divId, btnId) {
        document.getElementById(dayId).insertAdjacentHTML("beforeend",
            "           <div id='temp'> \n" +
            "                <label class=\"ActivityLabel\">\n" +
            "                    <input class=\"Activity item\" id=\"TuesdayActivity1\" name=\"MondayActivity1\">\n" +
            "                    <input class=\"Duration item\" id=\"TuesdayDuration1\" name=\"MondayDuration1\">\n" +
            "                    <button type=\"button\" id='temp2' onclick='' class=\"btn btn-light btn-sm\" \"\n" +
            "                            style=\"margin-left: 4%; margin-bottom: 0.5%;\">\n" +
            "                        X\n" +
            "                    </button>\n" +
            "                </label>\n" +
            "           </div>"
        )

        let activityElement = document.getElementById('temp');
        activityElement.id = divId;
        let button = document.getElementById('temp2');
        button.id = btnId;
        //button.addEventListener('click', () => activityElement.remove())
        button.addEventListener('click', () => ActivityHandler.removeActivity(activityElement))
    }

}