import React from 'react';
import { course_list } from '../data/course_list';
import CourseItem from './CourseItem';

export default function RecomendCourseList({ recomendCourseListRef }) {
  return (
    <>
      <div className='course-list' ref={recomendCourseListRef}>
        {course_list.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </div>
    </>
  );
}
