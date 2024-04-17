import './Auth.css';

// components
import { Link } from 'react-router-dom';

// hooks
import { useState, useEffect } from 'react';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState();



  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('teste')
    setError("");

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user)

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      console.log(error)
      return;
    }



  }

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos</p>

      <form onSubmit={handleSubmit}>
        <input type="text"  placeholder='Nome' name="name" value={name} onChange={(e) => setName(e.target.value)} autoComplete='false'/>
        <input type="email" placeholder='E-mail' name="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='false'/>
        <input type="password" placeholder='Senha' name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder='Confirmação de senha' name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <input type="submit" value="Cadastrar"/>
      </form>

      <p>Já tem conta? <Link to="/login">Clique aqui</Link></p>
    </div>
  )
}

export default Register