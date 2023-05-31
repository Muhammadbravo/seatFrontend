import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetSeatQuery } from 'state/ApiSlice'
import './StudentSeatInfo.css';


const Student = () => {
    const navigate = useNavigate()
    const [registrationNumber, setRegistrationNumber] = useState("")
    const [courseId, setCourseId] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const { data, error, isLoading } = useGetSeatQuery({registrationNumber, courseId})

    console.log(data, error, isLoading, 'data', registrationNumber);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Fetch student seat number here
      };
    
      const handleViewImage = () => {
        setShowImage(true);
      };

  return (
    <div className="container">
      <h2>Student Seat Info</h2>
      <form className="form" onSubmit={handleSubmit}>
      <input
          type="text"
          className="input"
          placeholder="Enter registration number"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
        <input
        type="text"
        className="input"
        placeholder="Enter Course Code"
        value={courseId}
        onChange={(e) => setCourseId(e.target.value)}
      />
        {/* <button type="submit" className="button">
          Get Seat Number
        </button> */}
      </form>
      {/* {isSubmitted && registrationNumber === '' && (
        <p className="error">Please enter a registration number</p>
      )} */}
      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error">Please enter the correct registration number</p>}
      {data && data.status && (
        <div className="result">
          <p>
            Registration Number: {data.student_registration_number}
          </p>
          <p>
            Seat Number: {data.student_seat_number}
          </p>
          <p>
            Exam Date: {data.exam_date}
          </p>
          <p>
            Exam Time: {data.exam_time}
          </p>
          <p>
            Exam Venue: {data.exam_venue}
          </p>
          <p>
            Course Code : {data.course}
          </p>
          <button onClick={handleViewImage} className="image-container">View Seating Arrangement</button>
          {showImage && (
            <img src={data.image} className="course-image" alt="Course Image" /> // Replace data.image_url with the actual image URL property
          )}
        </div>
      )}
    </div>
  );
}

export default Student