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
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" type="text" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>
            <div className="form-group">
                <label>Confirmar Password:</label>
                <input className="form-control" type="password" onChange={(e) => setConfirPassword(e.target.value)} value={confirPassword}/>
            </div>
            <input type="submit" className="btn btn-success" value="Crear Usuario"/>
        </form>
     )
}

export default Formulario