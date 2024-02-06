import { string } from 'prop-types';
import { useEffect, useState } from 'react';
import { location$ } from './observer';
import p1 from './assets/pencil/dining_room.jpg';
import p2 from './assets/pencil/lostcoast.jpg';
import p3 from './assets/pencil/make_art_straka.jpg';
import p4 from './assets/pencil/redrockpark.jpg';
import p5 from './assets/pencil/skeleton.jpg';
import p6 from './assets/pencil/sun_flower.jpg';
import cp1 from './assets/color_pencil/artist_in_mirror.jpg';
import cp2 from './assets/color_pencil/bottle_brush_flower.jpg';
import cp3 from './assets/color_pencil/self_portrait.jpg';
import cp4 from './assets/color_pencil/dolores_park.jpg';
import pa1 from './assets/painting/ca_poppies.jpg';
import pa2 from './assets/painting/fort_funston.jpg';
import pa3 from './assets/painting/orchids_2011.jpg';
import ps1 from './assets/pastel/woman_reclining.jpg';
import ps2 from './assets/pastel/thomas_and_photo.jpg';
import ps3 from './assets/pastel/katie_on_couch.jpg';
import ps4 from './assets/pastel/thomas_at_piano.jpg';
import mx1 from './assets/mixed_media/shim95.jpg';
import mx2 from './assets/mixed_media/me1995.jpg';
import mx3 from './assets/mixed_media/colman_on_building.jpg';
import mx4 from './assets/mixed_media/colman_mesh_sitting.jpg';
import mx5 from './assets/mixed_media/suzie96.jpg';
import l1 from './assets/lamps/sconce1.jpg';
import l2 from './assets/lamps/sconce2.jpg';
import s1 from './assets/series2024/cp_landscape_2024_1.jpg';
import s2 from './assets/series2024/cp_landscape_2024_2.jpg';
import s3 from './assets/series2024/cp_landscape_2024_3.jpg';
console.log('s3', s3);
const pages = {
	series2024: {
		title: 'Seascapes 2024',
		pieces: [s1, s2, s3],
	},
	pencil: {
		title: 'Pencil',
		pieces: [p1, p2, p3, p4, p5, p6],
	},
	color_pencil: {
		title: 'Color pencil',
		pieces: [cp1, cp2, cp3, cp4],
	},
	painting: {
		title: 'Painting',
		pieces: [pa1, pa2, pa3],
	},
	pastel: {
		title: 'Pastel',
		pieces: [ps1, ps2, ps3, ps4],
	},
	mixed_media: {
		title: 'Mixed media',
		pieces: [mx1, mx2, mx3, mx4, mx5],
	},
	lamps: {
		title: 'Mood lamps',
		pieces: [l1, l2],
	},
}


const PortfolioPage = (props) => {
	const {page} = props;
	const [pageKey, setPageKey] = useState(page);
	const thisPage = pages[pageKey];
	const [pageNum, setPageNum] = useState(1);
	const goNext = () => pageNum < thisPage?.pieces?.length && setPageNum(pageNum + 1);
	const goPrev = () => pageNum > 1 && setPageNum(pageNum - 1);
	const fileName = thisPage?.pieces[pageNum - 1];
	const sections = Object.keys(pages);
	const thisSection = sections.findIndex(section => section === pageKey);
	const nextSection = thisSection === sections.length - 1 ? 0 : thisSection + 1;
	const prevSection = thisSection === 0 ? Number(sections.length) - 1 : thisSection -1;
	const goNextSection = () => {
		console.log('nextSection', nextSection);
		location$.next(sections[nextSection]);
		setPageKey(sections[nextSection]);
		setPageNum(1);
	};
	const goPrevSection = () => {
		console.log('prevSection', prevSection);
		location$.next(sections[prevSection]);
		setPageKey(sections[prevSection]);
		setPageNum(1);
	};

	useEffect(() => {
		setPageNum(1);
		setPageKey(page);
	}, [page]);

	return <>
	<div className='portfolioNav'>
		<div className='portfoliSide'>
		</div>
		<div>
			{pageNum > 1 && <button onClick={goPrev}>previous</button>}
			{pageNum === 1 &&
				<button onClick={goPrevSection} value={`${sections[nextSection]}`}>previous</button>}
		</div>
		<div>
			{pageNum} of  {`${thisPage?.pieces?.length}`}
		</div>
		<div>
			{pageNum < thisPage?.pieces?.length && <button onClick={goNext}>next</button>}
			{pageNum === thisPage?.pieces?.length &&
				<button onClick={goNextSection} value={`${sections[nextSection]}`}>next</button>}
		</div>
		<div className='portfoliSide'></div>
	</div>

	<div>
	<img src={fileName} width="800" />
	</div>
	</>;
}

PortfolioPage.propTypes = {
	page: string,
}
export default PortfolioPage;
