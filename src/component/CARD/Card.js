import React, { Component } from 'react';
import'./Card.css';


// style={{width:width,height:'calc(0.5*'+height+')'}}/> 

function Card({src,alt,title,content,width='200px',height='200px'}) {
    return (
        <div className="Card" style={{width:width, height, height}}>
 <div className="header">
<img src={src} alt={alt} style={{width:width,height:height}}/>           
        </div>

        <div className="body" style={{width:width,height:height}}>
            <h2>{title}</h2>
            <p>{content}</p>
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
    )
}
// style={{width:width,height:'calc(0.5*'+height+')'}}/> 

export default Card;
