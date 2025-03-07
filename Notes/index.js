var globalVar = "Global";

function test() {
    var functionVar = "Function Scope";
    if (true) {
        let blockVar = "Block Scope";
        var functionVar2 = "Still Function Scope";
    }
    console.log(globalVar);   // Global [Acessible]
    console.log(functionVar); // Functin Scope[Acessible]
    console.log(blockVar);    // [not Acessible]
    console.log(functionVar2); // [Acessible]
}

test();
console.log(globalVar);   // Global [Acessible]
console.log(functionVar); //[not Acessible] 