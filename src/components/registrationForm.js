import React, {useState, setState} from 'react';
import './style.css';

function RegistrationForm() {

    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null); 
    const [yourLevel, setYourLevel] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [scholarship, setScholarship] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if(id === "fullName"){
            setFullName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "yourLevel"){
            setYourLevel(value);
        }
        if(id === "phoneNumber"){
            setPhoneNumber(value);
        }
        if(id === "scholarship"){
            setScholarship(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    }

    const resetForm = () => {
        setFullName("")
        setEmail("")
        setYourLevel("")
        setPhoneNumber("")
        setScholarship("")
        setPassword("")
        setConfirmPassword("")
    }

    const handleSubmit = () => {
        console.log(fullName, email, yourLevel, phoneNumber, scholarship, password, confirmPassword );
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="fullname">
                    <label className="form_label" for="fullName">Full Name:</label>
                    <input className="form_input" type="text" value={fullName} onChange={(e) => handleInputChange(e)} id="fullName" placeholder="FullName"/>
                </div>
                <div className="email">
                    <label className="form_label" for="email">Email address:</label>
                    <input className="form_input" type="email" value={email} onChange={(e)=> handleInputChange(e)} id="email" placeholder="Email Address"/>
                </div>
                <div className="yourLevel">
                    <label className="form_label" for="yourLevel">Your Level:</label>
                    <select className="form_input" value={yourLevel} onChange={(e)=> handleInputChange(e)} id="yourLevel">
                        <option value="firstYear">1st Year</option>
                        <option value="secondYear">2nd Year</option>
                        <option value="thirdYear">3rd Year</option>
                        <option value="fourthYear">4th Year</option>
                    </select>
                </div>
                <div className="phonenumber">
                    <label className="form_label" for="phoneNumber">Phone Number:</label>
                    <input className="form_input" type="tel" value={phoneNumber} onChange={(e)=> handleInputChange(e)}id="phoneNumber" placeholder="Phone Number"></input>
                </div>
                <div className="scholarship">
                    <p>Do you have any scholarship?</p>
                    <label for="yes">Yes</label>
                    <input className="radioBtn" type="radio" value={scholarship} onChange={(e)=> handleInputChange(e)} id="yes"></input>
                    <label className="noLabel" for="no">No</label>
                    <input className="radioBtn" type="radio" value={scholarship} onChange={(e)=> handleInputChange(e)} id="no"></input>                  
                </div>
                <div className="password">
                    <label className="form_label" for="password">Password:</label>
                    <input className="form_input" type="password" value={password} onChange={(e)=> handleInputChange(e)} id="password" placeholder="password"></input>
                </div>
                <div className="confirmPassword">
                    <label className="form_label" for="confirmPassword">Confirm Password:</label>
                    <input className="form_input" type="password" value={confirmPassword} onChange={(e)=> handleInputChange(e)} id="confirmPassword" placeholder="Confirm Password"></input>
                </div>
            </div>
            <div class="footer">
                <button type="reset" onClick={()=> resetForm()} class="btn">Reset</button>
                <button type="submit" onClick={()=> handleSubmit()} class="btn">Registration</button>
            </div>
        </div>
    )
}

export default RegistrationForm;