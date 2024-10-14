'use client';
import React, { useRef } from 'react';
import RecomendCourseList from './components/RecomendCourseList';
import NewCourseList from './components/NewCourseList';
import AllCourseList from './components/AllCourseList';
import './CSS/home.css';

export default function Home() {
  const recomendCourseListRef = useRef(null); // Ref สำหรับ "คอร์สเรียนแนะนำ"
  const newCourseListRef = useRef(null); // Ref สำหรับ "คอร์สเรียนใหม่ล่าสุด"

  // Scroll functions for recommended courses
  const scrollLeftRecomend = () => {
    recomendCourseListRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const scrollRightRecomend = () => {
    recomendCourseListRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  // Scroll functions for new courses
  const scrollLeftNew = () => {
    newCourseListRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  };

  const scrollRightNew = () => {
    newCourseListRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  };

  return (
    <>
      <h1>คอร์สเรียนแนะนำ</h1>
      <div className="course-container">
        <button className="scroll-btn left" onClick={scrollLeftRecomend}>{'<'}</button>
        <RecomendCourseList recomendCourseListRef={recomendCourseListRef} />
        <button className="scroll-btn right" onClick={scrollRightRecomend}>{`>`}</button>
      </div>

      <h1>คอร์สเรียนใหม่ล่าสุด</h1>
      <div className="course-container">
        <button className="scroll-btn left" onClick={scrollLeftNew}>{'<'}</button>
        <NewCourseList newCourseListRef={newCourseListRef} />
        <button className="scroll-btn right" onClick={scrollRightNew}>{`>`}</button>
      </div>
      <h1>คอร์สเรียนทั้งหมด</h1>
      <div className="courses-container">
      <AllCourseList />
      </div>
      </>
  );
}
