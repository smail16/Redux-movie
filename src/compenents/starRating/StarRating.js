import React from 'react'


const StartRating = ({ratefil, handeleRating}) => {

   
    function stars(ratefil){
    let star = [];
    for (let i=1; i<=5; i++){
    if (i<=ratefil){
        star.push(<span onClick={()=>handeleRating(i)} style={{color:"gold", fontSize:"20px", cursor:"pointer"}}>★</span>);
         } else
     star.push (<span onClick={()=>handeleRating(i)} style={{color:"black", fontSize:"20px",cursor:"pointer"}}>★</span>);
    }
    return star

    }
  return (
    <div>{stars(ratefil)}</div>
  )
}

export default StartRating