var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Segunda"] = 0] = "Segunda";
    DiaSemana[DiaSemana["Terca"] = 1] = "Terca";
    DiaSemana[DiaSemana["Quarta"] = 2] = "Quarta";
    DiaSemana[DiaSemana["Quinta"] = 3] = "Quinta";
    DiaSemana[DiaSemana["Sexta"] = 4] = "Sexta";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
;
var DS;
DS = DiaSemana.Domingo;
(function (DiaSemana) {
    function IsDiaUtil(DS) {
        if (DS == DiaSemana.Sabado || DS == DiaSemana.Domingo) {
            return false;
        }
        else {
            return true;
        }
    }
})(DiaSemana || (DiaSemana = {}));

