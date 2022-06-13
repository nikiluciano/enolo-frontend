export function findTheCurrentProcess(conferments: any) {
    interface looseConfermentsObj {
        [key: string]: any
    }

    var obj: looseConfermentsObj = {};

    obj = conferments;
    console.log(obj)
    obj.forEach(element => {
        if (element.status == "READY") {
            element.current_process = "Pronto"
            element.progressBarValue = 6 / 6
            element.numberOfTheProgress = 6

        }
        else if (element.status == "DELIVERED") {
            element.current_process = "Non iniziato"
            element.progressBarValue = 0 / 6
            element.numberOfTheProgress = 0

        }

        else if (element.status == null) {
            element.current_process = "Non iniziato"
            element.progressBarValue = 0 / 6
            element.numberOfTheProgress = 0

        }

        else {
            switch (element.current_process) {
                case "wine_pressing_process":
                    element.current_process = "Pigiatura"
                    element.progressBarValue = 1 / 6
                    element.numberOfTheProgress = 1
                    break;

                case "destemming_process":
                    element.current_process = "Diraspatura"
                    element.progressBarValue = 2 / 6
                    element.numberOfTheProgress = 2
                    break;

                case "winemaking_process":
                    element.current_process = "Vinificazione"
                    element.progressBarValue = 3 / 6
                    element.numberOfTheProgress = 3
                    break;

                case "racking_process":
                    element.current_process = "Svinatura"
                    element.progressBarValue = 4 / 6
                    element.numberOfTheProgress = 4
                    break;

                case "refinement_process":
                    element.current_process = "Affinamento"
                    element.progressBarValue = 5 / 6
                    element.numberOfTheProgress = 5
                    break;
                case "bottling_process":
                    element.current_process = "Imbottigliamento"
                    element.progressBarValue = 6 / 6
                    element.numberOfTheProgress = 6
                    break;
            }
        }
    });
    console.log(obj)
    return obj;
}


export function findTheCurrentProcessForAConferment(conferment: any) {
    interface looseConfermentsObj {
        [key: string]: any
    }

    var obj: looseConfermentsObj = {};

    obj = conferment;

    if (conferment.status == "READY") {
        conferment.current_process = "Pronto"
        conferment.progressBarValue = 6 / 6
        conferment.numberOfTheProgress = 6

    }
    else if (conferment.status == "DELIVERED") {
        conferment.current_process = "Non iniziato"
        conferment.progressBarValue = 0 / 6
        conferment.numberOfTheProgress = 0

    }

    else if (conferment.status == null) {
        conferment.current_process = "Non iniziato"
        conferment.progressBarValue = 0 / 6
        conferment.numberOfTheProgress = 0

    }

    else {
        switch (conferment.current_process) {
            case "wine_pressing_process":
                conferment.current_process = "Pigiatura"
                conferment.progressBarValue = 1 / 6
                conferment.numberOfTheProgress = 1
                break;

            case "destemming_process":
                conferment.current_process = "Diraspatura"
                conferment.progressBarValue = 2 / 6
                conferment.numberOfTheProgress = 2
                break;

            case "winemaking_process":
                conferment.current_process = "Vinificazione"
                conferment.progressBarValue = 3 / 6
                conferment.numberOfTheProgress = 3
                break;

            case "racking_process":
                conferment.current_process = "Svinatura"
                conferment.progressBarValue = 4 / 6
                conferment.numberOfTheProgress = 4
                break;

            case "refinement_process":
                conferment.current_process = "Affinamento"
                conferment.progressBarValue = 5 / 6
                conferment.numberOfTheProgress = 5
                break;
            case "bottling_process":
                conferment.current_process = "Imbottigliamento"
                conferment.progressBarValue = 6 / 6
                conferment.numberOfTheProgress = 6
                break;
        }
    }
    return obj;
}


export type bottlingDataPatch = {
    bottles: {
      bottles_quantity: number,
      format: string
    }
    caps_quantity: number;
    tags_quantity: number
  }