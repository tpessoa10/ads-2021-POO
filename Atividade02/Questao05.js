function exibir() {
    var rest_paramenter = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest_paramenter[_i] = arguments[_i];
    }
    console.log(rest_paramenter);
}
exibir("a");
exibir("a", "b");
exibir("a", "b", "c");
