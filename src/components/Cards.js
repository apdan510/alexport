import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Season 2 Daily Log</h1>

      <div className="descards">
        <CardItem text="Jan 2020" />
      </div>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Jan 2020"
              label="JAN"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Feb 2020"
              label="FEB"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Mar 2020"
              label="MAR"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="Apr 2020"
              label="APR"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="May 2020"
              label="MAY"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Jun 2020"
              label="MAY"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Jul 2020"
              label="JUL"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Aug 2020"
              label="AUG"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Sep 2020"
              label="SEP"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Oct 2020"
              label="OCT"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="No 2020"
              label="NOV"
              path="/sign-up"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Dec 2020"
              label="DEC"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
