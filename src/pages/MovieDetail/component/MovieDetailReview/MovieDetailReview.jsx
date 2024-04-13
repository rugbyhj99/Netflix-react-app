import React, { useState } from 'react';
import './MovieDetailReview.style.css';

const MovieDetailReview = ( {review} ) => {
    console.log("리뷰데이터는", review );
    const [ expanded, setExpanded ] = useState({});
    const [visibleCount, setVisibleCount] = useState(2);  // 처음에 보여줄 리뷰의 수
    const handleToggleReviews = () => {
        setVisibleCount(prev => prev < review.length ? review.length : 2);  // 전체 리뷰를 보여주거나 기본 수로 토글
    };

    const toggleExpand = (index) => {
        setExpanded(prev => ({ ...prev, [index]: !prev[index] }));  // 현재 인덱스의 펼침 상태를 토글
    };

    if (!review || review.length === 0) { // 리뷰 데이터가 없거나 빈 배열인 경우 안내 메시지 표시
        return <div className="detail-review-container">No reviews available.</div>;
    };

  return (
    <div className="detail-review-container">
        <div className="detail-review-title">
            <h2>Review</h2>
            <button onClick={handleToggleReviews} className="review-box-expandbtn">
                    {visibleCount < review.length ? '더보기' : '접기'}
            </button>
        </div>
        {
            review.slice(0, visibleCount).map((review, index) => (
                <div key={index} className='detail-review-box'>
                    <h3>{review.author}</h3>
                    <div>
                        {expanded[index] ? review.content : `${review.content.slice(0, 300)}...`}  
                        <button className="review-box-expandbtn" onClick={() => toggleExpand(index)}>{expanded[index] ? '접기' : '더보기'}</button> 
                    </div>
                </div>
            ))
           
        }
       

    </div>
  )
}

export default MovieDetailReview