import React from 'react';
import logo from './Background.svg'

class Form extends React.Component{
constructor(){
super();
this.state = {
Fullname:'',
Dogsname:'',
Dogsage: '',
Dogsbreed: '',
Dogsweight: '',
Image: ''
} 
}

handleSubmit = (e) => { 
e.preventDefault()   
alert(`complete submission for your Fullname: ${this.state.Fullname}, Dog's name: ${this.state.Dogsname}, Dog's age: ${this.state.Dogsage},
 Dog's breed: ${this.state.Dogsbreed}, Dog's weight: ${this.state.Dogsweight} & Dog's image: ${this.state.Image}`)
}

handleChange = (e) =>{
let {name,value} = e.target 
this.setState({ 
[name]:value 
})
console.log(this.state)
 }

render(){
return(
<div>
<img className='my-logo' src={logo}/>
<div id='whole-my-form'>



<form id='my-form' onSubmit={this.handleSubmit}>
<h2>Tell us about your dog</h2>
Full Name:
<input name='Fullname' placeholder="Owner's Full name" type='text' onChange={this.handleChange}/>
<br/> 
Dog's Name:
<input name='Dogsname' placeholder="Dog's Name" type='text' onChange={this.handleChange}/>
<br/>
Dogs Age:
<input name='Dogsage' placeholder="Dog's age" type='number' onChange={this.handleChange}/>
<br/>
Dog's Breed:
<input name='Dogsbreed' placeholder="Dog's Breed" type='text' onChange={this.handleChange}/>
<br/>
Dog's weight:
<input name='Dogsweight' placeholder="(Lb)" type='number' onChange={this.handleChange}/>
<br/>
<p>Shows us how beautiful your dog is by uploading his picture.</p>
<br/>
Image:
<input name='Image' type='file' placeholder='choose your file' onChange={this.handleChange}/>
<br/>
<br/>
<button>Submit</button>
</form>

</div>
</div>

)
}
}

export default Form;