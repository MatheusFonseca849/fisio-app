import StyledEvaluationHeader from "./evaluationHeaderForm.js";
const EvaluationHeaderForm = () => {

    return(

        <StyledEvaluationHeader>

                <div className="headerForm_column">

                    <div className="headerForm_inputContainer">

                        <label htmlFor="ID">ID</label>
                        <input type="text" id="ID" placeholder="Insira o ID" required />
                        
                    </div>

                    <div className="headerForm_inputContainer">

                        <label htmlFor="date">Data:</label>
                        <input type="date" id="date" required />

                    </div>

                </div>

                <div className="headerForm_column">

                    <div className="headerForm_inputContainer">

                        <label htmlFor="name">Nome:</label>
                        <input type="text" id="name" placeholder="Insira o nome do paciente" required />

                    </div>

                </div>

                <div className="headerForm_column">

                    <div className="headerForm_inputContainer">

                        <label htmlFor="poplitealAngle">Ângulo poplíteo:</label>
                        <input type="number" id="poplitealAngle" required /><span>°</span>

                    </div>

                    <div className="headerForm_inputContainer">

                        <label htmlFor="tat_perimetry">Perimetria TAT</label>
                        <select name="Perimetria" id="tat_perimetry">
                            <option value="5">5cm</option>
                            <option value="10">10cm</option>
                            <option value="15">15cm</option>
                        </select>

                    </div>

                </div>

            </StyledEvaluationHeader>

    )

}

export default EvaluationHeaderForm