import RegisterForm from "../../components/RegisterForm";
import Header from "../../components/Header"
import LoginRegisterFooter from "../../components/LoginRegisterFooter";

const RegisterPage = () => {

    return(

        <>
            <Header><h1>Cadastre-se</h1></Header>
            <RegisterForm/>
            <LoginRegisterFooter>
                <h3>Já tem uma conta?</h3>
                <span>clique <a href="">aqui</a> para fazer o login.</span>
            </LoginRegisterFooter>
            
        </>

    )

}

export default RegisterPage