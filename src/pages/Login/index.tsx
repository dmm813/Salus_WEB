import S from './Login.module.scss'
import { useState } from 'react';
import { IoLogoGoogleplus } from "react-icons/io";
import { LiaFacebookF } from "react-icons/lia";
import config from '../../config';

export default function Login() {
  const [status, setStatus] = useState('signIn');
  const [usernameSignUp, setUsernameSignUp] = useState('');
  const [passwordSignUp, setPasswordSignUp] = useState('');
  const [emailSignUp, setEmailSignUp] = useState('');
  const [passwordSignIn, setPasswordSignIn] = useState('');
  const [emailSignIn, setEmailSignIn] = useState('');
  //const [errorSignUp, setErrorSignUp] = useState<string | null>(null);
  const [errorSignIn, setErrorSignIn] = useState<string | null>(null);

  const handleSignIn = () => {
    setStatus('signIn');
  }

  const handleSignUp = () => {
    setStatus('signUp');
    setErrorSignIn(null);
  }

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      // Validação básica de login
      if (!passwordSignIn || !emailSignIn) {
        setErrorSignIn('Por favor, preencha todos os campos');
        return;
      }

      // Faz a requisição para o servidor para validar o login
      const response = await fetch(`${config.API_BASE_URL}/api/Auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailSignIn, senha: passwordSignIn }),
      });

      const data = await response.json();
      if (data.sucesso) {
        // Login válido, redireciona para a página protegida
        window.location.href = '/';
      } else {
        setErrorSignIn('Login inválido');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorSignIn('Erro ao fazer login ' + error.message);
      } else {
        setErrorSignIn('Erro ao fazer login');
      }
    }
  };

  return (
    <div className={S.center}>
      <div className={`${status === 'signUp' ? S.signUpToggleContainer : S.signInToggleContainer} ${S.container}`}>
        
        <div className={`${S.signUp}`}>
          <form onSubmit={handleLogin} className={S.form}>
            <h1 className={S.title}>Create Account</h1>
            <div className={S.socialIcons}>
              <a href="#" className={S.icon}><IoLogoGoogleplus   /></a>
              <a href="#" className={S.icon}><LiaFacebookF /></a>
            </div>

            <span className={`text-small ${S.text}`}>or use your email for registration</span>

            <input
              className={S.input}
              type="text"
              value={usernameSignUp}
              onChange={(event) => setUsernameSignUp(event.target.value)}
              placeholder="Name"
            />

            <input
              className={S.input}
              type="text"
              value={emailSignUp}
              onChange={(event) => setEmailSignUp(event.target.value)}
              placeholder="E-mail"
            />
            <input
              className={S.input}
              type="password"
              value={passwordSignUp}
              onChange={(event) => setPasswordSignUp(event.target.value)}
              placeholder="Password"
            />
            <button onClick={handleSignUp}  className={S.accountBtn}>Sign up</button>
          </form>
        </div>

        <div className={`${S.signIn}`}>
          <form onSubmit={handleLogin} className={S.form}>
            <h1 className={S.title}>Sign In</h1>
            <div className={S.socialIcons}>
              <a href="#" className={S.icon}><IoLogoGoogleplus   /></a>
              <a href="#" className={S.icon}><LiaFacebookF /></a>
            </div>
            <span className={`text-small  ${S.text}`}>or use your email password</span>
            <input
              className={S.input}
              type="text"
              value={emailSignIn}
              onChange={(event) => setEmailSignIn(event.target.value)}
              placeholder="E-mail"
            />
            <input
              className={S.input}
              type="password"
              value={passwordSignIn}
              onChange={(event) => setPasswordSignIn(event.target.value)}
              placeholder="Password"
            />
            <a className={`text-small  ${S.text} ${S.forgot}`} href="#">Forgot your password?</a>
            <button onClick={handleSignIn} className={S.accountBtn}>Sign in</button>
            {errorSignIn && <p className={S.error}>{errorSignIn}</p>}
          </form>
        </div>

        <div className={S.toggleContainer}>
          <div className={`${S.toggle} overflow-hidden flex flex-column justify-center align-center`}>
            <div className={`toggle-panel flex flex-column justify-center align-center  ${S.toggleLeft}`}>
            <h1 className={`c-white ${S.title}`}>Welcome Back!</h1>
              <p className="c-white my-2 text-center line-1">Enter your personal details to use all of site features</p>
              <button id="login" onClick={handleSignIn} className={S.toggleBtn}>Sign In</button>
            </div>
            <div className={`toggle-panel flex flex-column justify-center align-center ${S.toggleRight}`}>
              <h1 className={`c-white ${S.title}`}>Hello, Friend!</h1>
              <p className="c-white my-2 text-center line-1">Register with your personal details to use all of site features</p>
              <button onClick={handleSignUp} className={S.toggleBtn}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}