'use client'
import '../../CSS/register.css'; // Importing CSS
import { useState } from 'react';

export default function Register() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation checks
        if (!name) {
            setError('กรุณากรอกชื่อ');
            return;
        }
        if (!surname) {
            setError('กรุณากรอกนามสกุล');
            return;
        }
        if (!email) {
            setError('กรุณากรอกอีเมล');
            return;
        }
        if (!password) {
            setError('กรุณากรอกรหัสผ่าน');
            return;
        }
        if (password !== confirmPassword) {
            setError('รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน');
            return;
        }

        // If no errors, proceed with the form submission logic
        setError(''); // Clear any previous errors
        console.log('Registration attempt:', { name, surname, email, password });
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <div className="logo">
                    <h1>เป็นสมาชิกกับ EasyTutor</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">ชื่อ</label>
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="กรอกชื่อของคุณ"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            aria-label="Name input"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="surname">นามสกุล</label>
                        <input 
                            type="text" 
                            id="surname" 
                            placeholder="กรอกนามสกุลของคุณ"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            aria-label="Surname input"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">อีเมล</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="กรอกอีเมลของคุณ"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email input"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">รหัสผ่าน</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="กรอกรหัสผ่านของคุณ"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label="Password input"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">ยืนยันรหัสผ่าน</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            placeholder="กรอกยืนยันรหัสผ่านของคุณ"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            aria-label="Confirm password input"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    
                    <button type="submit" className="register-button">สมัครสมาชิก</button>
                </form>
                
                <div className="separator">
                    <p className="text-size">ถ้ามีบัญชีแล้ว</p>
                </div>
                <button 
                    type="button" 
                    className="login-button" 
                    onClick={() => window.location.href = '/pages/login'}
                >
                    เข้าสู่ระบบ
                </button>
            </div>
        </div>
    );
}
