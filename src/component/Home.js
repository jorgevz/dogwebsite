import React from 'react';
import logo from './dogfo.png'

function Home(){
return(
<div>

<section className="nav-logo-welcome">

<img src={logo} alt='dogfo-logo' width='150px' height='150px'/>
</section>

<article className='first-article'>
<h1>Welcome to our site, where Dog Education matters</h1>
<p>We pride ourselves in the type of knowledge we provide the dog lovers community
that is why we make sure we have the right content to share with you all. </p>
</article>

<section>

<p></p>

</section>

</div>
);
}


export default Home;