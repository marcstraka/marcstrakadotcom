import RenderPage from './renderPage';
import navBar from './navBar';
import observer, { location$ } from './observer';
import { useState } from 'react';

import './App.css'

setTimeout(() => observer(), 500);

function App() {

  const [page, setPage] = useState('home');
  location$.subscribe({
		next: (loc) => {
			if (page !== loc) {
        setPage(loc);
      }
		},
		error: (err) => console.log('error', err),
		complete: () => console.log('complete'),
	});

  return (
    <div>
      {navBar}
      <RenderPage page={page} />
    </div>)
}

export default App;