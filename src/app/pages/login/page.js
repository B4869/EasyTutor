'use client'
import '../../CSS/login.css'; // Importing CSS
import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation checks
        if (!email) {
            setError('กรุณากรอกอีเมล');
            return;
        }

        if (!password) {
            setError('กรุณากรอกรหัสผ่าน');
            return;
        }

        // If no errors, proceed with the form submission logic
        setError(''); // Clear any previous errors
        console.log('Login attempt:', { email, password, remember });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="logo">
                    <h1>ยินดีต้อนรับเข้าสู่ EasyTutor</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">อีเมล</label>
                        <input 
                            type="email" 
                            id="email" 
                            placeholder="กรอกอีเมลของคุณ"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            aria-label="Email input"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">รหัสผ่าน</label>
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="กรอกรหัสผ่านของคุณ"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label="Password input"
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <div className="links">
                        <div>
                            <input 
                                type="checkbox" 
                                id="remember" 
                                checked={remember}
                                onChange={() => setRemember(!remember)}
                                aria-label="Remember me checkbox"
                            />
                            <label htmlFor="remember"> จดจำรหัสผ่าน</label>
                        </div>
                        <a href="/forgot-password">ลืมรหัสผ่าน?</a>
                    </div>
                    <button type="submit" className="login-button">เข้าสู่ระบบ</button>
                    
                    <div className="separator">
                        <p className="text-size">ถ้ายังไม่มีบัญชี</p>
                    </div>

                    <button 
                        type="button" 
                        className="register-button" 
                        onClick={() => window.location.href = '/pages/register'}
                    >
                        สมัครสมาชิก
                    </button>
                </form>
            </div>
        </div>
    );
}
