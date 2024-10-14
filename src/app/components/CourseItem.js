import React from 'react';

export default function CourseItem({ course }) {
  return (
    <div className='box-course'>
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
  );
}
