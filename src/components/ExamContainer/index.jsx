import StyledExamContainer from "./examContainer.js";

const ExamContainer = ({ title, titleSize, children }) => {

    return (

        <StyledExamContainer $titleSize={titleSize}>

            <h2>{title}</h2>
            {children}

        </StyledExamContainer>

    )

}

export default ExamContainer