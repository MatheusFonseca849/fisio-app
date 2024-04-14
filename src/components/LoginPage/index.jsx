import Header from "../Header";
import LoginForm from "../LoginForm";
import LoginPageFooter from "../LoginPageFooter";

const LoginPage = () => {
  return (
    <>
      <Header>
        <h1>Login</h1>
      </Header>
      <LoginForm />
      <span style={{marginTop: 12, marginBottom: 12}}>OU</span>
      <LoginPageFooter/>
      
    </>
  );
};

export default LoginPage;
