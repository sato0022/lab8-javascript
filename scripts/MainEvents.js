//The Program was splited in individuals files to separated the funcionalities 

// This is the main event of the program, it builds each element giving then and specific Event Listener
// using the class FormBuilder and giving a callback function in the Listeners file


function main() {
    new FormBuilder("myForm").buildIterator()
        // Inputs
        .filter(element => element.isField())
        .forEach(element =>{
            if(element.getType() ==="text"){
                element.addEventListener("blur", textOnUnfocusedListener)
            }else if(element.getType() === "select-one"){
                element.addEventListener("click", textOnUnfocusedListener)
            }

        } );
    // Buttons
    document.getElementById("myForm").addEventListener("submit", myFormOnSubmitListener);
    document.getElementById("reset-btn").addEventListener("click", resetButtonOnClickListener);
}

main();
