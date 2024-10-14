'use client'
import React, { useState } from 'react';
import AllCourseList from '../../components/AllCourseList';
import '../../CSS/home.css';

export default function AllCourse() {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (evnet) => {
    setSearchText(evnet.target.value);
  };

  return (
    <>
    <div className='courses-container'>
      <input
        type="text"
        placeholder="ค้นหาชื่อคอร์ส หรือติวเตอร์"
        value={searchText}
        onChange={handleSearchChange}
        className="search-input"
      />
    </div>
      <div className="courses-container">
        <AllCourseList searchText={searchText} />
      </div>
    </>
  );
}
