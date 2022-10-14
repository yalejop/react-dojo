import React, {useState} from "react";

const Formulario = () => {

    //crear una variable por cada campo en el formulario
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirPassword, setConfirPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const crearUsuario = e => {
    e.preventDefault();
    const nuevoUsuario = {firstName, lastName, email, password, confirPassword};
    console.log('nuevo usuario: ', nuevoUsuario)

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirPassword('');
    setHasBeenSubmitted(true)
    }

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

     return (
        <form onSubmit={crearUsuario}>
            <h3>{formMessage()}</h3>
            <div className="form-group">
                <label>Nombre:</label>
                <input className="form-control" type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                {firstName.length < 2 ? <p style={{color:'red'}}>Nombre debe ser mayor a 2 caracteres</p>: ''}
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                {lastName.length < 2 ? <p style={{color:'red'}}>Apellido debe ser mayor a 2 caracteres</p>: ''}
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                {email.length < 5 ? <p style={{color:'red'}}>email debe ser mayor a 5 caracteres</p>: ''}
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                {password.length < 8 ? <p style={{color:'red'}}>Contraseña debe ser mayor a 8 caracteres</p>: ''}
            </div>
            <div className="form-group">
                <label>Confirmar Password:</label>
                <input className="form-control" type="password" onChange={(e) => setConfirPassword(e.target.value)} value={confirPassword}/>
                {password === confirPassword ? '': <p style={{color:'red'}}>Contraseña debe coincidir</p>}
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario"/>
        </form>
     )
}

export default Formulario