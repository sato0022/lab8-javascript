// Element Class

function Element(id, name, type, warningMessage){

    // private
    this.id = id;
    this.name = name;
    this.type = type;
    this.warning = `${this.id}Warning`;
    this.getElement = (id) => document.getElementById(id);
    // if is not a button set a warning message
    this.setWarningMessageImpl = message => {
        if (this.getElement(this.warning) !== null) {
            this.getElement(this.warning).innerHTML = message;
        }
    };

    // public

    // Set
    this.setValue = value => {
        if (this.type === 'text')
            this.getElement(this.id).value = value;
        else if (this.type === 'select-one')
            this.getElement(this.id).selectedItem = value;
    };

    this.setWarningMessage = () => {
        this.setWarningMessageImpl(warningMessage);
    };

    // Get
    this.getType = () => {
        return this.type;
    };
    
    this.getValue = () => {
        if (this.type === 'text')
            return this.getElement(this.id).value;
        else if (this.type === 'select-one')
            return this.getElement(this.id).options[this.getElement(this.id).selectedIndex].text;
        return null;
    };

    this.getWarningMessage = () => {
        return this.getElement(this.warning) !== null ? this.getElement(this.warning).innerHTML : null;
    };

    // Reset
    this.resetWarningMessage = () => {
        this.setWarningMessageImpl('');
    };

    this.resetValue = () => {
        this.setValue('');
    };

    this.reset = () => {
        this.resetValue();
        this.resetWarningMessage();
    };

    // Element Status
    this.isField = () => {
        return this.type !== 'submit';
    };

    this.isEmpty = () => {
        return !this.getElement(this.id).value;
    };

    // Event Listener
    this.addEventListener = (type, listener) => {
        this.getElement(this.id).addEventListener(type,listener);
    };

    return {
        getType:this.getType,
        setValue: this.setValue,
        setWarningMessage: this.setWarningMessage,
        getValue: this.getValue,
        getWarningMessage: this.getWarningMessage,
        reset: this.reset,
        resetValue: this.resetValue,
        resetWarningMessage: this.resetWarningMessage,
        isEmpty: this.isEmpty,
        isField: this.isField,
        addEventListener: this.addEventListener
    };
}
