import React from 'react';
import Axios from 'axios'

class Akita extends React.Component{
  
  constructor(props) {
    super(props)
  
    this.state = {
    data: null,
  
    };
}


componentDidMount(){
fetch("https://api.thedogapi.com/v1/breeds")
.then(response => response.json())
.then(data => console.log({ data }));
}

render() {
return (
 <div>
 <h4>All my breeds</h4>
 <p>{this.state.data}</p>
 </div>
   )
}
}
    


export default Akita;