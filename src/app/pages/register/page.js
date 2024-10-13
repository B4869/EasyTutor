import '../../CSS/login.css'

export default function login() {
    return (
        <>
        <div className="login-container">
            <div className="login-box">
                <div className="logo">
                    <h1>EasyTutor</h1>
                </div>
                <h2>เข้าสู่ระบบ</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">อีเมล</label>
                        <input type="email" id="email" placeholder="กรอกอีเมลของคุณ" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">รหัสผ่าน</label>
                        <input type="password" id="password" placeholder="กรอกรหัสผ่านของคุณ" />
                    </div>
                    <button type="submit" className="login-button">เข้าสู่ระบบ</button>
                </form>
                <div className="links">
                    <a href="/forgot-password">ลืมรหัสผ่าน?</a>
                    <a href="/register">สมัครสมาชิก</a>
                </div>
            </div>
        </div>
        </>
    );
}
