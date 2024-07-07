import { useEffect, useRef} from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    useEffect(() => {
        nameRef.current.focus();
    }, [])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" required/>
                <br/><br/>
                <input ref={emailRef} type="text" name="email" required/>
                <br/><br/>
                <input ref={passwordRef} type="text" name="password" required/>
                <br/><br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default RefForm;