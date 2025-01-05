import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        name: "",
        age: 0,
        date: "",
        programming: "",
    });

    // Using useEffect for single rendering
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/data").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata({
                    name: data.Name,
                    age: data.Age,
                    date: data.Date,
                    programming: data.programming,
                });
            })
        );
    }, []);

    return (
      <div className="App">
        <header className="App-header">
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to CORE.</p>
        
        <h1>Sample Profile:</h1>
        {/* Calling a data from setdata for showing */}
        {/* <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.date}</p>
        <p>{data.programming}</p> */}
      </div>
    );
}

export default App;
