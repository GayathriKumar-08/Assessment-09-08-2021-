import React,{useState} from 'react';
import './login.css';
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

export default function LoginPage() {
    const [loginpg, setLoginpg] = useState({
        uname: "",
        pass: "",
    })
    const history = useHistory();
    const [formErrors, setformErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const [check,setCheck]=useState([]);


    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setLoginpg((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        console.log(loginpg)
    }


    const handleOnSubmit = (e) => {
        
        e.preventDefault();
        setformErrors(validate(loginpg));

        if(loginpg.uname=="user" && loginpg.pass=="user123")
        {
            setSubmitted(true);
            history.push("/dashboard");
        }
        else{
            alert("Invalid user name or password");
        }
     

    }

    const validate = (values) => {

        let err = {};

        console.log(values);


        if (!values.uname) {
            err.uname = "*user name is reqired";
        }
        if (!values.pass) {
            err.pass = "*password is required"
        }
        
        return err;
    }

    return (
        <div>
            <div>
            </div>
            <div className="card">
                {(Object.entries(formErrors).length == 0) && submitted && alert("Forms submitted successfully....")}

                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div>
                                <form onSubmit={handleOnSubmit} class="box">
                                    <h1>Login</h1>
                                    <p class="text-muted"> Please enter your login and password!</p>

                                    <input type="text" name="uname" value={loginpg.uname} placeholder="Username" onChange={handleOnChange} />
                                    <p style={{ color: "red" }}>{formErrors.uname}</p>

                                    <input type="password" name="pass" value={loginpg.pass} placeholder="Password" onChange={handleOnChange} />
                                    <p style={{ color: "red" }}>{formErrors.pass}</p>

                                    <button type="submit" name="login" value="login">Login</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
