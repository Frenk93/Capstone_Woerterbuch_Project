import {FormEvent, useState} from "react";
import "./Login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type LoginProps = {
  setUser  : (user:string) => void
}


function Login(props : LoginProps) {

    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            axios.post("api/mongoUser", undefined, {auth:{username, password}})
                .then(response => props.setUser(response.data))
                .then(()=>(navigate("/edit")))
            if (!username || !password) {
                setError('Bitte alle Felder ausfüllen');
            } else {
                setError('');
                console.log('Login erfolgreich:', { username, password });
                // Hier könnte die Weiterleitung nach erfolgreichem Login erfolgen
            }
        };

        return (
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit} >
                    <div className="inputGroup">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="password">Passwort:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error}
                    <button type="submit" className="button-submit">Login</button>
                </form>
            </div>
        );
    }


export default Login;