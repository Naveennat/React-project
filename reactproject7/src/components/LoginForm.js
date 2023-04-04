import React, { useState } from "react";



function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({id: "", name: "", email: "", password: "", age: "", gender: "", mobile: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error !== "") ? (<div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="id">Id:</label>
                    <input type="text" name="id" id="id" onChange={e => setDetails({...details, id: e.target.value})} value={details.id}/>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <input type="text" name="age" id="age" onChange={e => setDetails({...details, age: e.target.value})} value={details.age} required/>
                </div><div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <input type="text" name="gender" id="gender" onChange={e => setDetails({...details, gender: e.target.value})} value={details.gender}/>
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile:</label>
                    <input type="text" name="mobile" id="mobile" onChange={e => setDetails({...details, mobile: e.target.value})} value={details.mobile} required/>
                </div>
                <input type="submit" onClick='/app' value="LOGIN"/>
            </div>
        </form>
    )

}

export default LoginForm;