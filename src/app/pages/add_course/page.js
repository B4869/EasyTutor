'use client';
import '../../CSS/add_course.css'; // Importing CSS
import { useState, useEffect } from 'react';

let course_list = [];

export default function AddCourse() {
    const [courseName, setCourseName] = useState('');
    const [price, setPrice] = useState('');
    const [tutorName, setTutorName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Access localStorage only on the client-side
        if (typeof window !== 'undefined') {
            const storedCourses = JSON.parse(localStorage.getItem('course_list')) || [];
            course_list = storedCourses;
        }
    }, []); // Run once when the component mounts

    // Save the updated course list to localStorage
    const saveToLocalStorage = (course_list) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('course_list', JSON.stringify(course_list));
        }
    };

    // Function to format date as YYYY-MM-DD
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading 0 if needed
        const day = String(date.getDate()).padStart(2, '0'); // Add leading 0 if needed
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation checks
        if (!courseName) {
            setError('กรุณากรอกชื่อคอร์ส');
            return;
        }
        if (!price) {
            setError('กรุณากรอกราคา');
            return;
        }
        if (!tutorName) {
            setError('กรุณากรอกชื่อติวเตอร์');
            return;
        }
        if (!description) {
            setError('กรุณากรอกคำอธิบาย');
            return;
        }
        if (!category) {
            setError('กรุณาเลือกหมวดหมู่วิชา');
            return;
        }
        if (!imageUrl) {
            setError('กรุณากรอก URL ของรูปภาพ');
            return;
        }

        // Create the new course object
        const newCourse = {
            courseName: courseName,
            price: parseFloat(price), // Convert price to number
            tutorName: tutorName,
            whyTakeThisCourse: description, // Why take this course
            subject: category, // Subject chosen from the select dropdown
            courseStartDate: formatDate(new Date()), // Format the current date as YYYY-MM-DD
            imgUrl: imageUrl,
            imgProfile: "https://cdn.discordapp.com/attachments/1238560225099780117/1289971104055562504/profile.jpg?ex=670e8935&is=670d37b5&hm=2b8890c85dd1abd23ce178e54c52cb4e1c2da90d73cd21a573db0dedeecb5698&" // Example profile image URL
        };

        // Add the new course to the existing array
        course_list.push(newCourse);
        console.log('New course added:', newCourse);
        console.log('Updated course list:', course_list);

        // Save updated course_list to localStorage
        saveToLocalStorage(course_list);

        // Redirect to the home page after submission
        window.location.href = '/';
    };

    return (
        <div className="course-form-container">
            <div className="course-form-box">
                <div className="course-logo">
                    <h1>เพิ่มคอร์สใหม่</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="course-input-group">
                        <label htmlFor="courseName">ชื่อคอร์ส</label>
                        <input 
                            type="text" 
                            id="courseName" 
                            placeholder="เช่น คณิตศาสตร์เบื้องต้น"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            aria-label="Course name input"
                        />
                    </div>
                    <div className="course-input-group">
                        <label htmlFor="price">ราคา (บาท)</label>
                        <input 
                            type="number" 
                            id="price" 
                            placeholder="กรอกจำนวนราคา"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            aria-label="Price input"
                        />
                    </div>
                    <div className="course-input-group">
                        <label htmlFor="tutorName">ชื่อติวเตอร์</label>
                        <input 
                            type="text" 
                            id="tutorName" 
                            placeholder="กรอกชื่อผู้สอน"
                            value={tutorName}
                            onChange={(e) => setTutorName(e.target.value)}
                            aria-label="Tutor name input"
                        />
                    </div>
                    <div className="course-input-group">
                        <label htmlFor="description">คำอธิบายคอร์ส</label>
                        <textarea 
                            id="description" 
                            placeholder="กรอกรายละเอียดเกี่ยวกับเนื้อหาคอร์ส"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            aria-label="Course description input"
                        />
                    </div>
                    <div className="course-input-group">
                        <label htmlFor="category">หมวดหมู่วิชา</label>
                        <select 
                            id="category" 
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            aria-label="Subject category input"
                        >
                            <option value="" disabled>เลือกหมวดหมู่วิชา</option>
                            <option value="physics">ฟิสิกส์</option>
                            <option value="chemistry">เคมี</option>
                            <option value="biology">ชีววิทยา</option>
                            <option value="math">คณิตศาสตร์</option>
                            <option value="thai">ภาษาไทย</option>
                            <option value="english">ภาษาอังกฤษ</option>
                            <option value="social">สังคมศึกษา</option>
                        </select>
                    </div>
                    <div className="course-input-group">
                        <label htmlFor="imageUrl">URL ของรูปภาพ</label>
                        <input 
                            type="url" 
                            id="imageUrl" 
                            placeholder="กรอก URL ของรูปภาพ"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            aria-label="Image URL input"
                        />
                    </div>
                    {error && <p className="course-error-message">{error}</p>}
                    
                    <button type="submit" className="course-submit-button">เพิ่มคอร์ส</button>
                </form>
            </div>
        </div>
    );
}
