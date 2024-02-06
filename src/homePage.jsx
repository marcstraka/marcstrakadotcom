import welcome from './assets/welcome.jpg';
import { location$ } from './observer';

const handleClick = () => {
	location$.next('series2024');
}

const homePage = <>
<div onClick={handleClick}>
<img src={welcome} className="logo" alt="Welcome to Marc Straka dot com" />
</div>
<div className="welcome">
<div className="generalText">
	Art works created by Marc Straka. Click anywhere to view them.
</div>
<div> </div>
<div className='generalText'>Media include pencil, colored pencil, oil paint, acrylic paint, pastel,
	and mixed media collage. Mood lamps created using wire and acrylic resin.</div>
<div className="generalText">Commissions accepted.
</div>
</div>
</>;


export default homePage;