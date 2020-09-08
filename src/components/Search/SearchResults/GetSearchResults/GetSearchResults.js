import React from 'react';
import Auxilary from '../../../../HOC/Auxilary/Auxilary';
import classes from './GetSearchResults.module.css';

const getSearchResults = props => {

    const renderedRecipes = props.recipes.map(el => {
            return (
                <li id={el.id} className={classes.GetSearchResults} key={el.id}>
            <a  href={'#'.concat(el.id)} onClick={props.idHandler}>
                <figure >
                    <img src={el.img} alt={el.title}/>
                </figure>
                <div >
                    <h4 >{el.title}</h4>
                        <p>{el.author}</p>
                </div>
            </a>
        </li>
            
            )  
       
        })
    
    return (
        <Auxilary>
             {renderedRecipes}           
        </Auxilary>  
    );
}

export default getSearchResults;


