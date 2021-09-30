import { ScriptSnapshot } from "typescript";

enum DiaSemana {Segunda, Terca, Quarta, Quinta, Sexta, Sabado, Domingo};
let DS : DiaSemana;
DS = DiaSemana.Domingo;

namespace DiaSemana{
    function IsDiaUtil(DS: DiaSemana):boolean{
        if (DS == DiaSemana.Sabado || DS == DiaSemana.Domingo){
            return false;
        }
        else{
            return true;
        }
    }
}
