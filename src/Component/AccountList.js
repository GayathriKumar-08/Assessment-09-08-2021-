import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import GetMessage from './GetMessage';
import Navbar from './Navbar';
import { MessageService } from '../Services/MessageServices';

export default function AccountList() {
    const [account, setAccount] = useState([]);
    const history = useHistory();
    useEffect(() => {
        console.log("Hello this use effect... ");

        fetch("http://localhost:3000/createacc").then(res => res.json()).then(acc => {
            console.log(acc);
            setAccount(acc);
        }).catch(e => {
            console.error("ERR in account data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
        MessageService.sendMessage("Fetched successfully!!!!");
    }, [])

    return (
        <div>
        <form>
            <div>
           <Navbar/>
            </div>
                   <h3>List of customers who created their account</h3>
                   
                   <GetMessage/>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                                <th>Email</th>
                                <th>phonenumber</th>
                                <th>Address</th>
                              
                            </tr>
                        </thead>

                        {
                            account && account.map((x) => {
                                return (
                                    <tbody>
                                        <tr>

                                            <td>{x.firstname}</td>

                                            <td>{x.lastname}</td>

                                            <td>{x.email}</td>
                                           
                                            <td>{x.age}</td>
                                           
                                            <td>{x.phonenumber}</td>

                                            <td>{x.address}</td>

                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                  </table>
        </form>
    </div>
    )
}
