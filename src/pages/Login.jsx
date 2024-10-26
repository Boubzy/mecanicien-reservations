import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginSuccess } from '../redux/slices/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { email, password });

      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
        navigate('/profile'); 
      } else {
        setErrorMessage('Échec de la connexion. Veuillez vérifier vos identifiants.');
      }
    } catch (error) {
      console.error('Erreur de connexion:', error);
      setErrorMessage('Erreur de connexion. Veuillez réessayer.');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

export default Login;
