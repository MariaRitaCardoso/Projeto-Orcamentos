import Button from "./Button"
import "./OrcamentoCalc.css"
import { useState } from "react"

const OrcamentoCalc = ({ calcValor }) => {

    const [ValorH, setValorH] = useState("");
    const [EstimativaH, setEstimativaH] = useState("");
    const [Urgente, setUrgente] = useState(false);

    const clearForms = (e) => {
        e.preventDefault();
        setValorH("");
        setEstimativaH("");
        setUrgente(false);
    };

    // validar apenas números e vírgula
    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleEstimativaHChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setEstimativaH(updatedValue)
    };

    const handleValorHChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setValorH(updatedValue)
    };

   const handleUrgenteChange = (e) => {
    setUrgente(e.target.checked);
    };

    return (
        <div id="calc-container">
            <h2>Calculadora de Orçamento Freelancer</h2>

            <form id="orcamento-form">
                <div className="form-inputs">

                    <div className="form-control">
                        <label htmlFor="valorHora">Valor da sua Hora (R$): </label>
                        <input
                            type="text"
                            name="valorHora"
                            id="valorHora"
                            placeholder="Ex: 50"
                            onChange={handleValorHChange}
                            value={ValorH}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="estimativaHoras">Estimativa de Horas do Projeto: </label>
                        <input
                            type="text"
                            name="estimativaHoras"
                            id="estimativaHoras"
                            placeholder="Ex: 40"
                            onChange={handleEstimativaHChange}
                            value={EstimativaH}
                        />
                    </div>

                    <div className="form-urgente">
                        <label>
                            <input type="checkbox" onChange={handleUrgenteChange} checked={Urgente}/>
                            Projeto Urgente (+20%)
                        </label>
                    </div>

                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" action={(e) => calcValor(e, Urgente, ValorH, EstimativaH)} />
                    <Button id="clear-btn" text="Limpar" action={clearForms} />
                </div>
            </form>
        </div>
    )
}

export default OrcamentoCalc