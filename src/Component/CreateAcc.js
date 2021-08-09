import React,{useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Navbar from './Navbar';
import GetMessage from './GetMessage';
import { MessageService } from '../Services/MessageServices';


export default function CreateAcc() {

    var [first, setFirst] = useState("");
    var [executionOutput, setExecutionOutput] = useState("");
    var [errorMessage, setErrorMessage] = useState(false);
    var [hasError, setHasError] = useState(false);
    
    const phoneExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatory"),
        lastname : Yup.string().required("Lastname is mandatory"),
        email : Yup.string().email("Invalid Email address").required("Please enter the Email"),
        age:Yup.number().typeError("Enter your valid age").min(18," Minimum Age is 18").max(50,"Maximum age is 50"),
        phonenumber : Yup.string().matches(phoneExp,"Phone number is invalid"),
        address:Yup.string().required("Address is mandatory"),
    }) ;

    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            age:0,
            email:'',
            address:'',
            phonenumber: ''
          
        },
        
        validationSchema,
        onSubmit(values) {
            const reqOptios = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            };
    
            fetch("http://localhost:3000/createacc", reqOptios).then(res => res.json()).then(data => {
                console.log("saved");
                alert("successfully submitted");
                console.log(data.id);
            })
            MessageService.sendMessage("Inserted successfully");
    
        }

    }) 
    const updateValue = (e) => {
        const { name, value, id } = e.target;
        if (id === "firstname") {
            setFirst(value);
        } 
      };
    
      const getFirstName = () => {
        try {
          if (first.length >=20) {
            setHasError(true);
            setErrorMessage("name cannot contain more than 20 characters");
            throw Error(errorMessage);
          }
    
          setExecutionOutput(first);
        } catch(e) {
            console.error("Error has occured" + e);
        }
      };
    return (
        <div>
            <Navbar/>
            <h4>Create Account</h4>
            <form onSubmit={handleSubmit} noValidate>
            <table>
                <tr>
                    <td>First Name:</td>
                    <td><input type="text" id="firstname"name="firstname"onChange={handleChange} values={values.firstname}/></td>
                    {errors.firstname ? errors.firstname : null}
                </tr>
                <tr>
                    <td>Last Name:</td>
                    <td><input type="text"name="lastname"onChange={handleChange} values={values.lastname}/></td>
                    {errors.lastname ? errors.lastname : null}
                </tr>
                <tr>
                    <td>Age:</td>
                    <td><input type="number"name="age"onChange={handleChange} values={values.age}/></td>
                    {errors.age ? errors.age : null}
                </tr>
                <tr>
                    <td>email:</td>
                    <td><input type="email"name="email"onChange={handleChange} values={values.email}/></td>
                    {errors.email ? errors.email : null}
                </tr>
                <tr>
                    <td>phonenumber:</td>
                    <td><input type="text"name="phonenumber"onChange={handleChange} values={values.phonenumber}/></td>
                    {errors.phonenumber ? errors.phonenumber : null}
                </tr>
                <tr>
                    <td>address:</td>
                    <td><textarea type="text"name="address"onChange={handleChange} values={values.address}/></td>
                    {errors.address ? errors.address : null}
                </tr>
            </table>
            <button type="submit" className="btn">create-account</button>
            <input type="button" onClick={getFirstName} value="Firstname exception" />
            
            <h3>Exception- {executionOutput}</h3>
            {hasError && <div>{errorMessage}</div>}
            </form>
            <GetMessage/>
        </div>
    )
}
