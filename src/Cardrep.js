// import React from 'react';
import  Card from './card/Card-aap';
import Cdata from './card/Card-data';
function Cardrep(){
  return(
    Cdata.map(function(cardmap){
      return(
        <Card 
       carsrc={cardmap.imagsrc}
       cardname={cardmap.sname}
       cardlink={cardmap.link}
       />
      )
    })
  )
}

export default Cardrep;