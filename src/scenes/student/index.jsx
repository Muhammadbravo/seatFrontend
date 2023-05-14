import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetSeatQuery } from 'state/ApiSlice'
import './StudentSeatInfo.css';


const Student = () => {
    const navigate = useNavigate()
    const [registrationNumber, setRegistrationNumber] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { data, error, isLoading } = useGetSeatQuery(registrationNumber)

    console.log(data, error, isLoading, 'data', registrationNumber);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Fetch student seat number here
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
        </div>
      )}
    </div>
  );
}

export default Student