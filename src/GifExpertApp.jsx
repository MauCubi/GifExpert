import { useState } from "react";
import { AddCategoria, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'higurashi' ]);

    const onAddCategory = (newCategory) => {       
      
      if ( categories.includes(newCategory)) return;
      setCategories( categories => [newCategory, ...categories]);
             
    }


  return (
    <>
        <h1>Gif Expert App</h1>

        <AddCategoria           
          onNewCategory={ event => onAddCategory(event)}          
        />
        
        { 
          categories.map( category => (
          <GifGrid 
            key={category}
            category={category}/>
          ))
        }               

    </>
  )
}
