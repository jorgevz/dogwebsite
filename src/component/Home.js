import React from 'react';
import logo from './dogfo.png'

function Home(){
return(
<div>

<section className="nav-logo-welcome">
<img src={logo} alt='dogfo-logo' width='150px' height='100px'/>
</section>

<section className='main-article'>

<div id='first-article'>
<h1>Welcome to our site, where Dog Education matters</h1>
<p>We pride ourselves in the type of knowledge we provide to the dog lovers community,
that is why we make sure we have the right content to share with you all. </p>
</div>

<div>
<p> </p>
</div>

</section>


</div>
);
}


export default Home;