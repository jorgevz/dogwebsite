import React from 'react';
import logo from './Background.svg'
import dogcamp from '../images/dogcamp.jpg'
import dogdaycare from '../images/dogdaycare.jpg'
import dogtraining from '../images/dogtraining.jpg'

function Services(){
return(
<div>
<img src={logo}/>
<div className='services'>

<div id='camp-service'>
<h2>Dog Camp</h2>
<p>Come and let your dog experience a unique experience where he/she will learn
to interact with other dog and do a bunch of different activities such as, 
fetching balls, chasing other dogs, learn searching skills and among many other...</p>
<img className='dog-images' src={dogcamp} height='300px' width='300px'/>
</div>

<div id='daycare-service'>
<h2>Dog daycare</h2>
<p>Constantly have to leave your dog alone at home without any supervision ? 
let us take care of that for you with our excellent well trained staff that will 
take care of him/her with no problem </p>
<img className="dog-images" src={dogdaycare} height='300px' width='300px'/>
</div>


<div id='training-service'>
<h2>Dog traning</h2>
<p>Having behavioral issues with you dog ? are you a new dog owner who needs help 
training their dog ? You might just found what you are looking for, we have a excellent 
trained staff of trainers who can not only train your dog but also advise you on how to
treat them and learn more about them.</p>
<img className="dog-images" src={dogtraining} height='300px' width='300px' />
</div>

</div>
</div>
)
}

export default Services;