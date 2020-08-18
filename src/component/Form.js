import React from 'react';
import logo from './Background.svg';
import Fire from 'firebase'

class Form extends React.Component{
constructor(props){
super(props);
this.state = {
Fullname:'',
Dogsname:'',
Dogsage: '',
Dogsbreed: '',
Dogsweight: '',
Image: ''
} 
}

componentWillMount = ()=>{
    let messageRef = Fire.database().ref('messages').orderByKey().limitToLast(100);
    messageRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key};
      this.setState({ messages : [message].concat(this.state.message)});
    })
  }
  addMessage = (e)=>{
    e.preventDefault();
    Fire.database().ref('message').push(this.inputEl.value);
    this.inputEl.value = '';
  }

render(){
return(
<div>
<img className='my-logo' src={logo}/>
<div id='whole-my-form'>



<form id='my-form' onSubmit={this.addMessage}>
<h2>Tell us about your dog</h2>
Full Name:
<input name='Fullname' placeholder="Owner's Full name" type='text' ref={ el => this.inputEl = el}/>
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