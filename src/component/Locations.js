import React from 'react';
import logo from './Background.svg';
import charlotte from '../images/charlotte.jpg';
import nashville from '../images/nashville.jpg';
import chicago from '../images/chicago.jpg';
import nyc from '../images/nyc.jpg'


function Locations(){
return(
<div>
 <img src={logo}/>
<div className='cities'>



<div id='city-one'>
<h2>Chicago,IL</h2>
<p></p>
<img className='dog-images' src={chicago} height='500px' width='300px'/>
</div>

<div id='city-two'>
<h2>Charlotte,NC</h2>
<p></p>
<img className='dog-images' src={charlotte} height='500px' width='300px%'/>
</div>

<div id='city-three'>
<h2>Nashville,TN</h2>
<p></p>
<img className='dog-images' src={nashville} height='500px' width='300px'/>
</div>

<div id='city-three'>
<h2>New York City</h2>
<p></p>
<img className='dog-images' src={nyc} height='500px' width='300px'/>
</div>

</div>

</div>
)
}

export default Locations;