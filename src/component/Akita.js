import React from 'react';

class Akita extends React.Component{
  
  constructor(props) {
    super(props)
  
    
}
  state = {
  person: null,
  
  };

async componentDidMount(){
const url = ("https://api.thedogapi.com/v1/breeds");
const res = await fetch(url);
const data = await res.json();
// console.log(data);
this.setState ({person: data.res});

}

render() {
return (
 <div>
 <h4>All my breeds</h4>
 <p>{this.state.res.name}</p>
 
 </div>
   )
}
}
    


export default Akita;