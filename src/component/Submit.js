import React, { useImperativeHandle } from 'react';
import logo from './Background.svg'

function Submit(){
return(
<div className='submission'>
<img src={logo} alt='dogfo-logo' width='150px' height='100px'/>
<div>
<h2>Congrats, you have submmited your form successfully !</h2>
</div>
</div>


)
}



export default Submit; 