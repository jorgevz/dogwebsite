import React from 'react';

class Form extends React.Component{
render(){
return(

<div id='myform'>

<h2>Tell us about your dog</h2>

<form>
<input placeholder='Full name' type='text' />
<br/> 
<input placeholder="Dog'Name" type='text'/>
<br/>

</form>

</div>


)
}
}

export default Form;