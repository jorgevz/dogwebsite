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
<img src={dogimage} height='250px' width='150px'/>
</section>

<div id='second-article'>
<h1>We also entertain</h1>
<p>Other than the fact that we educate we want to say that we also entertain since the content we provide
is very entertaining to those who find dog education entertaining. </p>
</div>

</section>


</div>
);
}


export default Home;