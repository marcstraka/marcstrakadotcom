import welcome from './assets/welcome.jpg';

const homePage = <>
<div>
<img src={welcome} className="logo" alt="Welcome to Marc Straka dot com" />
</div>
<div className="welcome">
<div className="generalText">
	Art works created by Marc Straka.
</div>
<div className='generalText'>Media include pencil, colored pencil, oil paint, pastel,
	and mixed media collage.
</div>
<div className="generalText">Sconces or mood lamps created using wire and acrylic resin.</div>
<div className="generalText">Commissions accepted.
</div>
</div>
</>;


export default homePage;