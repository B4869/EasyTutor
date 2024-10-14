'use client'
import '../../CSS/login.css'; // Importing CSS
import { useState, useEffect } from 'react';

export default function Login() {
    const account = [
        {
            email: "admin@gmail.com",
            password: "admin1234",
            role: "admin"
        },
        {
            email: "user@gmail.com",
            password: "user1234",
            role: "user"
        }
    ];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [remember, setRemember] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

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

        // ตรวจสอบข้อมูลผู้ใช้จาก account array
        const user = account.find(
            (acc) => acc.email === email && acc.password === password
        );

        if (user) {
            // ล็อกอินสำเร็จ
            setIsAuthenticated(true);
            setError('');

            // Store login state in localStorage
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('role', user.role); // Store user role            

            // จดจำรหัสผ่านใน localStorage ถ้าผู้ใช้เลือก remember
            if (remember) {
                localStorage.setItem('rememberMe', JSON.stringify({ email, password }));
            }

            if (user.role === 'admin') {
                localStorage.setItem('isAdmin', true);
            }

            // Redirect to the appropriate page based on user role
            window.location.href = user.role === 'admin' ? '/' : '/';
        } else {
            setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        }
    };

    // Effect to handle remembered login
    useEffect(() => {
        const remembered = JSON.parse(localStorage.getItem('rememberMe'));
        if (remembered) {
            setEmail(remembered.email);
            setPassword(remembered.password);
            setRemember(true);
        }
    }, []);

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
