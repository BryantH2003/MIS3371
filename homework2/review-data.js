function viewData () {
    let formContent = document.getElementById("patient-form");
    const formElements = formContent.elements

    let output = "<table class='review-data'>";

    for (i = 0; i < formElements.length; i++) {
        const datatype = formElements[i].type;
        
        switch (datatype) {
            case "checkbox":
                if (formElements[i].checked) {
                    output += "<tr> <td> <div class='form-element'>" + formElements[i].name + ":" + "</div> </td>";
                    output += "<td> <div class='form-element'> Yes </div> </td> </tr>"
                } else {
                    output += "<tr> <td> <div class='form-element'>" + formElements[i].name + ":" + "</div> </td>";
                    output += "<td> <div class='form-element'> No </div> </td> </tr>"
                }
                break;
            case "radio":
                if (formElements[i].checked) {
                    output += "<tr> <td> <div class='form-element'>" + formElements[i].name + ":" + "</div> </td>";
                    output += "<td> <div class='form-element'>" + formElements[i].value + "</div> </td> </tr>"
                }
                break;
            case "button":
                break;
            case "submit":
                break;
            case "reset":
                break;
            default:
                output += "<tr> <td> <div class='form-element'>" + formElements[i].name + ":" + "</div> </td>";
                output += "<td> <div class='form-element'>" + formElements[i].value + "</div> </td> </tr>"
        }
    }

    output += "</table>";

    document.getElementById("view-data").innerHTML = output;
}