import RenderPage from './renderPage';
import navBar from './navBar';
import observer, { location$ } from './observer';
import { useEffect, useState } from 'react';

import './App.css'

const sections = ['home', 'series2024', 'pencil', 'color_pencil', 'painting', 'pastel', 'mixed_media', 'lamps'];

function App() {
  setTimeout(() => observer(), 300);
  const [page, setPage] = useState('home');
  location$.subscribe({
		next: (id) => {
			if (page !== id) {
        setPage(id);
      }
		},
		error: (err) => console.log('error', err),
		complete: () => console.log('complete'),
	});

  useEffect(
    () => {
      const thisButton = document.getElementById(page);
      thisButton?.setAttribute('class', 'link2active');
      sections.forEach(
        (name) => {
          if(name !== page) {
            const otherButton = document.getElementById(name);
            otherButton?.setAttribute('class', 'link2');
          }
        }
      );
    },
    [page]
  )

  return (
    <div>
      {page !== 'home' && navBar}
      <RenderPage page={page} />
    </div>)
}

export default App;