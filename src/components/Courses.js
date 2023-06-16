import React, { useEffect } from "react";
// import Course from "./Course";
import { useState } from 'react';
import axios from 'axios';


const Courses = () => {
  // const [data, setData] = useState([]);

  // const loadData = async () => {
  //   const responce = await fetch(
  //     "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
  //   );
  //   // console.log(responce);
  //   const jsonData = await responce.json();
  //     setData(jsonData["drinks"]);
  // };

  // useEffect(() => {
  //   loadData();
  // }, []);

  const [selectedCourse, setSelectedCourse] = useState('');
  const [recommendedCourses, setRecommendedCourses] = useState([]);
  const [coursesList, setCoursesList] = useState([]);

  // Fetch courses list from API on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/courses')
      .then(response => {
        setCoursesList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSelectChange = (event) => {
    setSelectedCourse(event.target.value);
  }

  const handleButtonClick = () => {
    axios.post('http://localhost:5000/recommend', {
      course: selectedCourse
    })
    .then(response => {
      setRecommendedCourses(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <>
     <h2>Coursera Course Recommendation System</h2>
      <h4>Find similar courses from a dataset of over 3,000 courses from Coursera!</h4>
      <h4>Web App created by Sagar Bapodara</h4>
      <select value={selectedCourse} onChange={handleSelectChange}>
        <option value="">Select a course</option>
        {coursesList.map(course => (
          <option key={course} value={course}>{course}</option>
        ))}
      </select>
      <button onClick={handleButtonClick}>Show Recommended Courses</button>
      <ul>
        {recommendedCourses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      {/* <div style={{"marginTop":"65px", "paddingLeft":"10px"}}>
      <div class="row height d-flex justify-content-center align-items-center">
              <div class="col-md-6">
                <div class="form">
                  <i class="fa fa-search"></i>
                  <input type="text" class="form-control form-input" placeholder="Search anything..."/>
                </div>
                
              </div>
              
            </div>
        {data.map((element) => {
                      return <div className="card" key={element.idDrink}>
                          <Course  strDrink={element.strDrink} strDrinkThumb={element.strDrinkThumb} idDrink={element.idDrink} />
                      </div>
                  })}
      </div> */}
    </>
  );
};

export default Courses;
