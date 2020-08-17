import React from 'react';
import Axios from 'axios'

class Breeds extends React.Component{
  
constructor(props) {
super(props);
this.state = {
isLoaded: false,
data: []
}
        }
 componentDidMount() {
  Axios.get("https://api.thedogapi.com/v1/breeds").then(res => {
   const Akita=res.data.name;
    this.setState({data:Breeds})
    console.log(Akita)
    })
 .catch(error => {
console.log('there is an error', error)
 })
  }
render() {
return (
 <div>
 <h4>All my breeds {this.state.data}.</h4>
 </div>
   )
}
  }
    


export default Breeds;