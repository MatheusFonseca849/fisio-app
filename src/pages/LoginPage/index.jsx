import Header from "../../components/Header";
import LoginForm from "../../components/LoginForm";
import LoginPageFooter from "../../components/LoginRegisterFooter";

const LoginPage = () => {
  return (
    <>
      <Header>
        <h1>Login</h1>
      </Header>
      <LoginForm />
      
      <LoginPageFooter>
      <h3>Ainda não tem uma conta?</h3>
            <span>Cadastre-se <a href="">aqui</a></span>
      </LoginPageFooter>
      
    </>
  );
};

export default LoginPage;
