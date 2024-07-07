import { useState } from "react";


const PwdValidation = () => {
    const [name, setName] = useState('Mahmud');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6 ){
            setError("Password must be 6 character or longer");
        }
        else{
            setError('');
        }
        console.log(name, email, password);
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" value={name} required/>
                <br/><br/>
                <input onChange={handleEmailChange} type="text" name="email" required/>
                <br/><br/>
                <input onChange={handlePasswordChange} type="text" name="password" required/>
                <br/><br/>
                <input type="submit" value="Submit"/>

                {
                    error && <p>Wrong Password!!!</p>
                }
            </form>
        </div>
    );
};

export default PwdValidation;