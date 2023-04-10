
const inputs = document.querySelectorAll("input:not([type='submit'])");
console.log(inputs)

inputs.forEach(input => {
    input.addEventListener('invalid', addErrorMessage); 

    input.addEventListener('blur', () => {
        input.checkVisibility();
    })

    input.addEventListener('focus', removeErrorMessage)

})


function addErrorMessage(e) {
    const name = e.target.getAttribute("name");
    var error_icon = document.createElement('span');
    error_icon.setAttribute("data-id", name);
    error_icon.classList.add("error-icon");
    error_icon.innerHTML = "<img src='images/icon-error.svg' alt=''>";

    var error_message = document.createElement('span');
    error_message.setAttribute("data-id", name);
    error_message.classList.add("error-message");

    if (e.target.value == "" || e.target.value == null) error_message.innerHTML = "" + e.target.getAttribute('placeholder') + "canot be empty.";
    else error_message.innerHTML = "Look like this is not an" + e.target.getAttribute("placeholder") + ".";

    e.target.after(error_message);
    e.target.after(error_icon);
    
    e.target.classList.add('error');
}

function removeErrorMessage(e) {
    var elements = document.querySelectorAll("[data-id='" + e.target.getAttribute("name") + "']");

    elements.forEach(error_element => {
        error_element.remove();
    })
    e.target.classList.remove('error');
}
