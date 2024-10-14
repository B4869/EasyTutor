'use client'
import React from 'react';
import CourseItem from './CourseItem';
import { course_list } from '../data/course_list';
import '../CSS/all_course_list.css';

export default function AllCourseList({ searchText }) {
  const filteredProducts = course_list.filter((course) =>
    course.courseName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="all-courses-container-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))
      ) : (
        <p className="no-results">ไม่พบคอร์สที่คุณค้นหา</p>
      )}
    </div>
  );
}
