// Lister callback funtions

//Submit
function myFormOnSubmitListener(event) {
    event.preventDefault();
    // Variables
    let form = new FormBuilder("myForm").build();
    let message = 'Your Values are \n'

    // See if there is any blank field and call a warning message
    new Iterator(form)
        .filter(element => element.isField())
        .forEach(element => {
            element.resetWarningMessage();
            if (element.isEmpty()) {
                element.setWarningMessage();
            }
        });
    // If the form is valid send an alert with two messages
    if(Validator(form).validateProfile()){
        new Iterator(form)
            .filter(element => element.isField())
            .forEach(element => message += `${element.getValue()} \n`);  
        alert('Thank you')
        alert(message)
    }
}

// Reset
function resetButtonOnClickListener(event) {
    event.preventDefault();
    new FormBuilder("myForm").buildIterator()
        .filter(element => element.isField())
        .forEach(element => element.reset());
}

// Unfocus input
function textOnUnfocusedListener() {
    new FormBuilder("myForm").buildIterator()
        .filter(element => !element.isEmpty())
        .forEach(element => {
            if (!element.isEmpty()) {
                element.resetWarningMessage();
            }
        });
}
