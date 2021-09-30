var Estados;
(function (Estados) {
    Estados[Estados["PI"] = 0] = "PI";
    Estados[Estados["MA"] = 1] = "MA";
    Estados[Estados["CE"] = 2] = "CE";
})(Estados || (Estados = {}));
;
var E;
E = Estados.PI;
var i = 0;
for (i; i < 3; i++) {
    console.log(Estados[i]);
}
