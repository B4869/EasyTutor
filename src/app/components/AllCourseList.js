'use client';
import React, { useState, useEffect } from 'react';
import CourseItem from './CourseItem';
import '../CSS/all_course_list.css';
import { course_list } from '../data/course_list'; // Static course list

export default function AllCourseList({ searchText }) {
  const [courses, setCourses] = useState([]);
  const [isMounted, setIsMounted] = useState(false); // New state to track if the component is mounted

  useEffect(() => {
    // Ensure we are in the client-side before accessing localStorage
    if (typeof window !== 'undefined') {
      const storedCourses = JSON.parse(localStorage.getItem('course_list')) || [];
      
      // Combine stored courses with static course_list
      const combinedCourses = [...course_list, ...storedCourses];
      
      setCourses(combinedCourses);
    }
    
    setIsMounted(true); // Mark component as mounted
  }, []);

  // If the component isn't mounted yet, don't render anything
  if (!isMounted) {
    return null; // Alternatively, you can return a loading spinner or placeholder
  }

  // Filter courses based on searchText
  const filteredCourses = courses.filter(
    (course) =>
      course.courseName.toLowerCase().includes(searchText.toLowerCase()) ||
      course.tutorName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="all-courses-container-list">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))
      ) : (
        <p className="no-results">ไม่พบคอร์สที่คุณค้นหา</p>
      )}
    </div>
  );
}
