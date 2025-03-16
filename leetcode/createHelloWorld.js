var createHelloWorld = function() {
    return function(){
        return "Hello World";
    };
};




const f = createHelloWorld();
console.log(f());
console.log(f({},null,42))
