import RenderPage from './renderPage';
import navBar from './navBar';
import observer, { location$ } from './observer';
import { useState } from 'react';

import './App.css'

setTimeout(() => observer(), 500);

const sections = ['home', 'series2024', 'pencil', 'color_pencil', 'painting', 'pastel', 'mixed_media', 'lamps'];

function App() {

  const [page, setPage] = useState('home');
  location$.subscribe({
		next: (id) => {
			if (page !== id) {
        setPage(id);
        const thisButton = document.getElementById(id);
        thisButton.setAttribute('class', 'link2active');
        sections.forEach(
          (name) => {
            if(name !== id) {
              const otherButton = document.getElementById(name);
              otherButton.setAttribute('class', 'link2');
            }
          }
        );
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