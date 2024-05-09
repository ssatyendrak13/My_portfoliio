// import { TextField } from '@mui/material';
import React from 'react';
import './modal.css';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useState } from 'react';


function Modal({ children, show, onClose }) {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    function handleUserIdChange(event) {
        setUserId(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function submit() {
        console.log("Hello Sonali");
        if (userId === "sonali" && password === "12345") {
            window.open('https://satyekuma.github.io/1-10-pics-to-drag/', '_blank');
        } else {
            setAlertMessage('Incorrect User ID or Password')
        }
    }
    setTimeout(() => {
        setAlertMessage('');
    }, 2000);
    if (!show) return null;
    return (
        <div onClick={onClose} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div onClick={e => e.stopPropagation()} style={{
                backgroundColor: 'rgb(168, 91, 245)',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                zIndex: 1000
            }}>
                <div className='pop-box'>
                    <p className='alertMessage-text' style={{fontSize: '0.8rem',fontWeight: 'bold'}}>{alertMessage}</p>
                    <div className='welcome-text'>WELCOME<SentimentSatisfiedAltIcon /></div>
                    <div className='first-text-btn'>
                        <div className='first'><label className='lebel-text'>User Id :</label> </div>
                        <div className='second'><input
                            placeholder='Enter Your First Name '
                            type='text'
                            className='pop-text-field'
                            value={userId}
                            onChange={handleUserIdChange}
                        ></input></div>
                    </div>
                    <div className='first-text-btn'>
                        <div className='first'><label className='lebel-text'>Passworld :</label> </div>
                        <div className='second'><input
                            placeholder='Enter Phone Number '
                            type='password'
                            className='pop-text-field'
                            value={password}
                            onChange={handlePasswordChange}
                        ></input></div>
                    </div>
                    <button className='submit-btn' onClick={submit} target='_blank'>Login</button>
                </div>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '1.5em',
                    cursor: 'pointer'
                }}>&times;</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;
