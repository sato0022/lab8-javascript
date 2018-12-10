// Builder of the program, recives the document name or id of the form and build the functionalities of each item

function FormBuilder(name) {
    this.formName = name;

    // Setters and Getters
    this.setFormName = (name) => {
        this.formName = name;
        return {
            build:         this.build,
            buildIterator: this.buildIterator
        };
    };

    this.getFormName = () => {
        return this.formName;
    };

    // Warning message
    function selectSetWarningMessage(type, name) {
        // text input
        if (type === 'text') {
            return '*' + name.charAt(0).toUpperCase() + name.slice(1) + ' cannot be empty';
        // dropdown input
        } else if (type === 'select-one') {
            return '*Please select your ' + name;
        }
        // button
        return null;
    }


    // Iterator properties
    this.buildIterator = () => {
        return new Iterator(this.build());
    };

    // Build Elements 
    this.build = () => {
        let elements = document.getElementById(this.formName).elements;
        return Object.keys(elements).map(index => {
            return new Element(
                elements[index].id,
                elements[index].name,
                elements[index].type,
                selectSetWarningMessage(elements[index].type, `${elements[index].name}`)
            );
        });
    };

    // Returning Methods
    return {
        build:         this.build,
        buildIterator: this.buildIterator,
        setFormName:   this.setFormName,
        getFormName:   this.getFormName
    };
}
