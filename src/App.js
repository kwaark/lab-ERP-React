import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container" >
    <a className="links" id="paracadastro"></a>
    <a className="links" id="paralogin"></a>
    
    <div className="content">      
      <div id="login">
        <form method="post" action=""> 
          <h1>Login</h1> 
          <p> 
            <label htmlFor="email_login">Seu e-mail</label>
            <input id="email_login" name="email_login" required="required" type="text" placeholder="dev@ops.com"/>
          </p>
          
          <p> 
            <label htmlFor="senha_login">Sua senha</label>
            <input id="senha_login" name="senha_login" required="required" type="password" placeholder="1234" /> 
          </p>
          
          <p> 
            <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
            <label for="manterlogado">Manter-me logado</label>
          </p>
          
          <p> 
            <input type="submit" value="Logar" /> 
          </p>
          
          <p className="link">
            Ainda não tem conta?
            <a href="#paracadastro">Cadastre-se</a>
          </p>
        </form>
      </div>

        <div id="cadastro">
        <form method="post" action=""> 
          <h1>Cadastro</h1> 
          
          <p> 
            <label htmlFor="nome_cad">Seu nome</label>
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Luiz Kelvin" />
          </p>
          
          <p> 
            <label htmlFor="email_cad">Seu e-mail</label>
            <input id="email_cad" name="email_cad" required="required" type="email" placeholder="dev@ops.com"/> 
          </p>
          
          <p> 
            <label htmlFor="senha_cad">Sua senha</label>
            <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="1234"/>
          </p>
          
          <p> 
            <input type="submit" value="Cadastrar"/> 
          </p>
          
          <p className="link">  
            Já tem conta?
            <a href="#paralogin"> Ir para Login </a>
          </p>
        </form>
      </div>
    </div>
  </div> 
  );
}

export default App;
