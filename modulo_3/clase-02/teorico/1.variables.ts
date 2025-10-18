// 1. var
function ejemploVar(): void {
    // console.log(variableVar); // Error!: ts arroja el error de que la variable se usa antes de asignarla
    var variableVar = 'Soy una variable de tipo var'
    console.log(variableVar);
}

ejemploVar();
// variableVar -> tampoco deja acceder fuera del scope de bloque

// 2. let
function ejemploLet(): void {
    // console.log(variableLet); // Error!: ts arroja el error de que la variable se usa antes de asignarla
    let variableLet = 'Soy una variable de tipo let'
    console.log(variableLet);
}

ejemploLet();
// variableLet -> tampoco deja acceder fuera del scope de bloque

// 3. const
function ejemploConst(): void {
    //console.log(variableConst); // Error!: ts arroja el error de que la variable se usa antes de asignarla
    const variableConst = 'Soy una variable de tipo const'
    console.log(variableConst);
    // variableConst = 'Hola' -> Error!: no se puede reasignar una constante
}

ejemploConst();
// variableConst -> tampoco deja acceder fuera del scope de bloque