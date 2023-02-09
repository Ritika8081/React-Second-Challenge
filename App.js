import React from "react";

import Card from './Cards'
import Sdata from './Sdata'
import './index.css'


const App =() =>(

<>
    {Sdata.map(function ncard(val){
 return (
   <Card 
   key ={val.id}
   imgsrc={val.imgsrc}
     sname={val.sname}
     link={val.link}/>
    );
    })}
   
   </>
 );
export default App;