// 1. var
function ejemploVar() {
    console.log(variableVar); // Js no arroja error, pero imprime undefined
    var variableVar = 'Soy una variable de tipo var'
    console.log(variableVar);
}

ejemploVar();
variableVar = 'hola'; // js no arroja error
console.log(variableVar);

// // 2. let
function ejemploLet() {
    console.log(variableLet); // Js no arroja error, pero imprime undefined
    let variableLet = 'Soy una variable de tipo let'
    console.log(variableLet);
}

ejemploLet();
variableLet  = 'hola'; // js no arroja error
console.log(variableLet);

// 3. const
function ejemploConst() {
    //console.log(variableConst); // Js no arroja error, pero imprime undefined
    const variableConst = 'Soy una variable de tipo const'
    console.log(variableConst);
}

ejemploConst();
variableConst = 'Hola'; // js no arroja error
console.log(variableConst);
