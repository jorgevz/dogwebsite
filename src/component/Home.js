import React from 'react';
import logo from './Background.svg'
import dogimage from './dogfopic.png'


function Home(){
return(
<div id='main-background'>

<section className="nav-logo-welcome">
<img src={logo} alt='dogfo-logo' width='150px' height='100px'/>
</section>


<section className='main-article'>

<div id='first-article'>
<h1>Welcome to our site, where Dog Education matters</h1>
<p>We pride ourselves in the type of knowledge we provide to the dog lovers community,
that is why we make sure we have the right content to share with you all. We provide 
information about all dog breeds for new and experienced dog owners. </p>
</div>

<section>
<img id='dog-img' src={dogimage} height='300px' width='150px' alt='doglogo' onClick={Home}/>
</section>

<div id='second-article'>
<h1>We also Train !</h1>
<p>Other than the fact that we educate we want to say that we provide the most impeccable dog 
training with the most dedicated trainers and staff you could ever find. </p>
</div>

</section>


</div>
);
}


export default Home;