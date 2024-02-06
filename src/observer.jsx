import { fromEvent } from 'rxjs';
import { BehaviorSubject} from 'rxjs';

const location$ = new BehaviorSubject('home');

const observer = () => {

const callListner = () => {
	const navButton = document.getElementsByClassName('link2');
	fromEvent(navButton, 'click').subscribe(
		(event) => {
			location$.next(event.target.value);
		},
	);
};
switch(document.readyState) {
	case 'loading':
		console.log('loading');
		break;
	case 'interactive':
		console.log('interactive');
		break;
	case 'complete':
		callListner();
		break;
	default:
		break;
}
};
export { location$ };
export default observer;
