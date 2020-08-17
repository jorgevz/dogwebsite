import React from 'react';

class Form extends React.Component{
render(){
return(

<div id='myform'>

<h2>Tell us about your dog</h2>

<form>
<input placeholder="Owner's Full name" type='text' />
<br/> 
<input placeholder="Dog's Name" type='text'/>
<br/>
<input placeholder="Dog's age" type='number'/>
<br/>
<input placeholder="Dog's Breed" type='text'/>
<br/>
<input placeholder="Dog's weight" type='number'/>
</form>

</div>


)
}
}

export default Form;