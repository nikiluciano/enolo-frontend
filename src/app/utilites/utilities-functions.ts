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