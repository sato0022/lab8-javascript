// Validate the form and return True or False

function Validator(form) {
    
    function validateProfile() {
        return new Iterator(form)
            .filter(element => element.isField())
            .reduce((x,y) => {
                return x && !!y.getValue();
            }, true);
    }

    return {
        validateProfile: validateProfile
    };
}
