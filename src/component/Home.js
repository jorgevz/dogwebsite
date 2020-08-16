import React from 'react';
import logo from './dogfo.png'

function Home(){
return(
<div id='main-content'>

<section className="nav-logo-welcome">
<img src={logo} alt='dogfo-logo' width='150px' height='100px'/>
</section>

<section className='main-article'>

<div id='first-article'>
<h1>Welcome to our site, where Dog Education matters</h1>
<p>We pride ourselves in the type of knowledge we provide to the dog lovers community,
that is why we make sure we have the right content to share with you all. We provide 
information about all dog breeds for new and experienced dog owners </p>
</div>

<div id='second-article'>
<h1>You find yourself bored ? come to us</h1>
<p>Other than the fact that we educate we want to say that we also entertain since the content we pro </p>
</div>

</section>


</div>
);
}


export default Home;