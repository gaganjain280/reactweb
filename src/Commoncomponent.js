import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import './CommonComponent.css';
import CharacterList from './CharacterList';
import 'tachyons';

const Commoncomponent=(props)=>{
    const commonArrayList=[{
    	id:1,
    	name:"Pari",
    	work:"Engineer"  
      },
      {
    	id:2,
    	name:"Shiv",
    	work:"web developer"  
      },
      {
      id:3,
      name:"Ayush",
      work:"Software developer"  
      },
      {
    	id:4,
    	name:"Rama",
    	work:"Senior web developer"  
      }];

const arrayCommonCard= commonArrayList.map((commonArray,i)=>{
return <CharacterList id= {commonArrayList[i].id} 
                      name={commonArrayList[i].name}
                      work={commonArrayList[i].work} />
})
	return (<div class="tc">
			<h1> Welcome profesionals</h1>
                   {arrayCommonCard}
           </div>
           )
       }
export default Commoncomponent;