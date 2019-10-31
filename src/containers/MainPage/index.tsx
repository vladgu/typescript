import React from "react";
import "./mainPage.css";

const MainPage = () => (
  <div className="main-page">
    <div className="user-info">
      <span className="text center">Creator:</span>
      <h1 className="user-name center">mr. Gulyaev Vladyslav</h1>
      <img
        src="https://i.ibb.co/2Nydm71/photo-2019-04-20-10-01-06.jpg"
        alt="CREATOR_PHOTO"
        className="user-photo"
      />
      <p>
        <span className="text">Living in: </span>Ukraine
      </p>
      <p>
        <span className="text">Date of birth, age: </span>04/04/1994, 25 year(s)
      </p>
      <p>
        <span className="text">Email adress: </span>vlad040494@gmail.com
      </p>
      <p>
        <span className="text">Phone number: </span>(066) 096 9886
      </p>
    </div>
  </div>
);

export default MainPage;
