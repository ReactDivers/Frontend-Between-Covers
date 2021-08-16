import React, { Component } from "react";
import "./Card.css";

function Card({ title, imgUrl, body,width,height}) {
  return (
    <div className="Card-container" style={{width:250,height:400}}>
      <div className="image-container">
        <img src={imgUrl} alt="" />
      </div>

      <div className="content">
        <div className="card-title">
          <h2>{title}</h2>
        </div>

        <div className="card-body">
          <p>{body}</p>
        </div>

        <div className="btn">
          <button>
            <a> view more</a>
          </button>
        </div>
      </div>

      {/* <div className="header">
<img src={Img2} alt={alt} style={{width:width,height:'calc(0.5*'+height+')'}}/>           
        </div>
        <div className="body" style={{width:width,height:height}}>
            <h2>{title}</h2>
            <p>{content}</p>
    </div>


    <div className="header">
<img src={Img3} alt={alt} style={{width:width,height:'calc(0.5*'+height+')'}}/>           
        </div>
        <div className="body" style={{width:width,height:height}}>
            <h2>{title}</h2>
            <p>{content}</p>
    </div>


    <div className="header">
<img src={Img4} alt={alt} style={{width:width,height:'calc(0.5*'+height+')'}}/>          
        </div>
        <div className="body" style={{width:width,height:height}}>
            <h2>{title}</h2>
            <p>{content}</p>
    </div> */}
    </div>
  );
}
// style={{width:width,height:'calc(0.5*'+height+')'}}/>

export default Card;
