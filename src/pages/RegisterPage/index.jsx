import RegisterForm from "../../components/RegisterForm";
import Header from "../../components/Header"
import LoginRegisterFooter from "../../components/LoginRegisterFooter";
import { Link } from "react-router-dom";

const RegisterPage = () => {

    return(

        <>
            <Header><h1>Cadastre-se</h1></Header>
            <RegisterForm/>
            <LoginRegisterFooter>
                <h3>Já tem uma conta?</h3>
                <span>clique <Link to={'/'}>aqui</Link> para fazer o login.</span>
            </LoginRegisterFooter>
            
        </>

    )

}

export default RegisterPage