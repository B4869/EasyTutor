'use client';
import { useState } from 'react';
import '../../CSS/payment.css'; // Assuming you're adding some CSS for the form

export default function PaymentPage() {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation checks
        if (!name || !cardNumber || !expiryDate || !cvv) {
            setError('กรุณากรอกข้อมูลให้ครบถ้วน');
            return;
        }

        // Simulate payment processing
        console.log('Payment processed for:', {
            name,
            cardNumber,
            expiryDate,
            cvv,
        });

        // Show an alert when the form is successfully submitted
        window.alert('การชำระเงินสำเร็จ! ขอบคุณสำหรับการสั่งซื้อ');

        // Redirect to success page
        window.location.href = '/'; // Assuming there's a success page
    };

    return (
        <div className="payment-container">
            <div className="payment-box">
                <h1>ชำระเงิน</h1>
                <form onSubmit={handleSubmit} autoComplete="off">
                    {/* Hidden fields to catch autofill */}
                    <input type="text" style={{ display: 'none' }} />
                    <input type="password" style={{ display: 'none' }} />

                    <div className="input-group">
                        <label htmlFor="name">ชื่อผู้ถือบัตร</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="กรอกชื่อผู้ถือบัตร"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="off" // Ensure no autofill
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cardNumber">หมายเลขบัตร</label>
                        <input
                            type="text"
                            id="cardNumber"
                            placeholder="กรอกหมายเลขบัตร"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            autoComplete="off" // Prevent autofill
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="expiryDate">วันหมดอายุ</label>
                        <input
                            type="text"
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            autoComplete="off" // Prevent autofill
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="password"
                            id="cvv"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            autoComplete="off" // Prevent autofill
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="payment-button">ชำระเงิน</button>
                </form>
            </div>
        </div>
    );
}
