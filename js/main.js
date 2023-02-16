document.querySelector("#history-btn").addEventListener("click", function() {
    window.history.back(); //backward once
    //window.history.forward(); //forward once
    //window.history.go(-2); //back twice
    //window.history.go(2); //forward twice
    console.log(window.history.length); //returns the number of items in the history
});

document.querySelector("#save-btn").addEventListener("click", function() {
    localStorage.setItem("name", "John");
    sessionStorage.setItem("name", "John");
    setTimeout(function(){
        localStorage.removeItem("name");
        sessionStorage.removeItem("name", "John");
    }, 4000);
});

document.querySelector("#retrieve-btn").addEventListener("click", function() {
    let names = [localStorage.getItem("name", "John"), sessionStorage.getItem("name", "John")];
    console.log(names);
});

document.querySelector("#disposeone-btn").addEventListener("click", function() {
    localStorage.removeItem("name", "John");
    sessionStorage.removeItem("name", "John");
});

document.querySelector("#disposeall-btn").addEventListener("click", function() {
    localStorage.clear();
    sessionStorage.clear();
});

document.querySelector("#saveobj-btn").addEventListener("click", function() {
    let sampleObject = {
        sampleString: "One", //object properties will persist
        sampleNumber: 1,
        sampleBoolean: true,
        combine: function() { //object functions will not persist
            return this.sampleString + this.sampleNumber + this.sampleBoolean;
        }
    };

    let persistibleJSON = JSON.stringify(sampleObject); //convert to JavaScript Object Notation string
    localStorage.setItem("sampleObject", persistibleJSON);
});

document.querySelector("#retrieveobj-btn").addEventListener("click", function() {
    let parseableJSON = localStorage.getItem("sampleObject");
    let sampleObject = JSON.parse(parseableJSON); //converts to Object
    console.log(sampleObject.sampleString);
});

