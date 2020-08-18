import React from 'react';
import Breeds from './Breeds';

class Dogs extends React.Component{
  
  constructor(props) {
    super(props)
  
    
}
  state = {
  breed: []
  
  };

async componentDidMount(){
const url = ("https://api.thedogapi.com/v1/breeds");
const res = await fetch(url);
const data = await res.json();
console.log(data);
this.setState ({ breed: data });

}

render() {
return (
 <div>

 {this.state.breed.map(breed => (
  <div>
  <div id='breed-name'>
  Name:
  {breed.name}
  </div>
  <div id='breed-behavior'>
  Behavior:
  {breed.temperament}
  </div>
  <div id='breed-origin'>Origin:
  {breed.origin}
  </div>
  <div id='breed-lifespan'>Lifespan:
  {breed.life_span}
  </div>
  <div id='bred-for'>Bred for:
  {breed.bred_for}
  </div>
  </div>
    ))}
    
    </div>
   )
}
}
    


export default Dogs;