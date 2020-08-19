import React from 'react';
import logo from './Background.svg';
import Fire from './Fire'

class Form extends React.Component{
constructor(props){
super(props);
this.state = {
messages: []
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



<form  onSubmit={this.addMessage}>
<h2>Tell us about your dog</h2>
Full Name:
<input name='Fullname' placeholder="Owner's Full name" type='text' ref={ el => this.inputEl = el}/>
<br/> 
<br/>
Dog's Name:
<input name='Dogsname' placeholder="Dog's Name" type='text' />
<br/> 
<br/>
Dogs Age:
<input name='Dogsage' placeholder="Dog's age" type='number' />
<br/> 
<br/>
Dog's Breed:
<input name='Dogsbreed' placeholder="Dog's Breed" type='text' />
<br/> 
<br/>
Dog's weight:
<input name='Dogsweight' placeholder="(lb)" type='number' />
<br/> 
<br/>
<p>Shows us how beautiful your dog is by uploading his picture.</p>
<br/> 
<br/>
Image:
<input name='Image' type='file' placeholder='choose your file' />
<br/> 
<br/>
<ul>
          {
            this.state.messages.map( message => <li key={message.id}>{message.text}</li>)
          }
        </ul>
<br/>
<button>Submit</button>
</form>

</div>
</div>

)
}
}

export default Form;