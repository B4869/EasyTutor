import React from 'react';
import CourseItem from './CourseItem';
import { course_list } from '../data/course_list';
import '../CSS/all_course_list.css'

export default function AllCourseList() {
  return (
    <div className="all-courses-container-list">
      {course_list.map((course, index) => (
        <CourseItem key={index} course={course} />
      ))}
    </div>
  );
}
