import OrcamentoTable from "./Components/OrcamentoTable"
import { data } from "./Data/projetoData.js"
import { useState } from "react"
import "./App.css"
import OrcamentoCalc from "./Components/OrcamentoCalc"

function App() {

  // Calculando Orçamento
    const calcValor = (e, Urgente, ValorH, EstimativaH) => {
    e.preventDefault();

    if (!EstimativaH || !ValorH) return;

    const ValorHFloat = +ValorH.replace(",", ".");
    const EstimativaHFloat = +EstimativaH.replace(",", ".");

    let total = ValorHFloat * EstimativaHFloat;

    if(Urgente){
      total = total * 1.2;
    } 

    setContas(total);

    data.forEach((item) => {
      if (total >= item.min && total <= item.max) {
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    });
  };

  const resetCalc = () => {
    setContas("");
    setInfo("");
    setInfoClass("");
  }

  const [Contas, setContas] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">

      {!Contas ? (
        <OrcamentoCalc calcValor={calcValor}/>
      ) : (
        <OrcamentoTable
          data={data}
          Contas={Contas}
          info={info}
          infoClass={infoClass}
          resetCalc={resetCalc}
        />
      )}

    </div>
  )
}

export default App