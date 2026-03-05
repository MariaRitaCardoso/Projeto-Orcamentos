import Button from './Button'
import "./OrcamentoTable.css"

const OrcamentoTable = ({ data, Contas, info, infoClass, resetCalc }) => {

    return (
        <div id="result-container">

            <p id="orcamento-number">
                Orçamento Total:
                <span className={infoClass}> R$ {Contas}</span>
            </p>

            <p id="orcamento-info">
                Categoria do Projeto:
                <span className={infoClass}> {info}</span>
            </p>

            <h3>Confira as categorias:</h3>

            <div className="orcamento-table">

                <div className="table-header">
                    <h4>Categoria</h4>
                    <h4>Tipo de Projeto</h4>
                    <h4>Complexidade</h4>
                </div>

                {data.map((item) => (
                    <div className="table-data" key={item.info}>
                        <p>{item.classification}</p>
                        <p>{item.info}</p>
                        <p className={item.infoClass}>{item.infoClass}</p>
                    </div>
                ))}

            </div>

            <Button id="back-btn" text="Voltar" action={resetCalc} />

        </div>
    )
}

export default OrcamentoTable