'use client'
import React, { useState, useEffect } from 'react';

export default function CourseItem({ course }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Toggle the popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Close popup when clicking outside of content
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('popup')) {
      togglePopup();
    }
  };

  // Handle button click to redirect based on login status
  const handlePaymentClick = () => {
    if (isLoggedIn) {
      window.location.href = '/pages/payment'; // Redirect to payment page if logged in
    } else {
      window.location.href = '/pages/register'; // Redirect to registration page if not logged in
    }
  };

  // Fetch login status from localStorage when the component mounts
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus); // Update login status
  }, []);

  return (
    <>
      <div className='box-course' onClick={togglePopup}>
        <img src={course.imgUrl} alt={course.courseName} className='course-image' />
        <span className='info-1'>{course.tutorName}</span>
        <span className='info-2'>{course.courseName}</span>
        <div className='info-3'>
          <div className="stars">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className={i < course.rating ? 'star filled' : 'star'}>★</span>
            ))}
          </div>
          <span className='info-3_2'>{course.price + '.-'}</span>
        </div>
      </div>

      {showPopup && (
        <div className='popup' onClick={handleBackgroundClick}>
          <div className='popup-content'>
            <img src={course.imgUrl} alt={course.courseName} className='popup-image' />
            <span className='popup-course-name'>{course.courseName}</span>
            <span className='popup-why-take'>{course.whyTakeThisCourse}</span>
            <span className='popup-start-date'>อัพเดทเมื่อ {course.courseStartDate}</span>
            <div className="course-stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < course.rating ? 'star filled' : 'star'}>★</span>
              ))}
            </div>
            <span className='popup-detal-review'>0 (0 รีวิว) จากผู้เรียน 0 ท่าน</span>
            <div className='tutor-section'>
              <img src={course.imgProfile} alt={`${course.tutorName}'s profile`} className='tutor-profile' />
              <span className='popup-tutor-name'>{course.tutorName}</span>
            </div>
            <div className='popup-footer'>
              <button className='popup-button' onClick={handlePaymentClick}>
                ชำระเงิน {course.price + '.-'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
