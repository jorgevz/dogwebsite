import React from 'react';
import logo from './Background.svg'

class Form extends React.Component{
constructor(){
super();
this.state = {
username:'',
password:''
}
 }
handleSubmit = (e) => { 
e.preventDefault()   
alert(`submission complete ${this.state.username} && ${this.state.password}`)
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



<form id='my-form'>
<h2>Tell us about your dog</h2>
<input placeholder="Owner's Full name" type='text' />
<br/> 
<input placeholder="Dog's Name" type='text'/>
<br/>
<input placeholder="Dog's age" type='number'/>
<br/>
<input placeholder="Dog's Breed" type='text'/>
<br/>
<input placeholder="Dog's weight (lb)" type='number'/>
<br/>
<p>Shows us how beautiful your dog is by uploading his picture.</p>
<br/>
<input type='file' placeholder='choose your file'/>
<br/>

</form>

</div>
</div>

)
}
}

export default Form;