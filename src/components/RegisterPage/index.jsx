import RegisterForm from "../RegisterForm";
import Header from "../Header"
import LoginRegisterFooter from "../LoginRegisterFooter";

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