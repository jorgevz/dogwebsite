import React from 'react';

class Akita extends React.Component{
  
  constructor(props) {
    super(props)
  
    
}
  state = {
  breed: [],
  
  };

async componentDidMount(){
const url = ("https://api.thedogapi.com/v1/breeds");
const res = await fetch(url);
const data = await res.json();
console.log(data);
this.setState ({breed: data[1-171]});

}

render() {
return (
 <div>
 <h4>All my breeds</h4>
 <p>{this.state.breed.Map((value, i)} </p>
 
 </div>
   )
}
}
    


export default Akita;