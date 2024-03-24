import StyledExamContainer from "./examContainer.js";

const ExamContainer = ({ title, children }) => {

    return (

        <StyledExamContainer>

            <h2>{title}</h2>
            {children}

        </StyledExamContainer>

    )

}

export default ExamContainer