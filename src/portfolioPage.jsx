import { string } from 'prop-types';
import { useEffect, useState } from 'react';
import { location$ } from './observer';

//
//
// import images for portfolio viewer
//
//

import p1 from './assets/pencil/dining_room.jpg';
import p2 from './assets/pencil/lostcoast.jpg';
import p3 from './assets/pencil/make_art_straka.jpg';
import p4 from './assets/pencil/redrockpark.jpg';
import p5 from './assets/pencil/skeleton.jpg';
import p6 from './assets/pencil/sun_flower.jpg';
import p7 from './assets/pencil/sf_drawing.jpg';
import p8 from './assets/pencil/xerox_redrock_hillside.jpg';
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

const pages = {
	series2024: {
		title: 'Seascapes 2024',
		pieces: [s1, s2, s3],
		data: [
			{info: 'Fort Funston 1, 2023, color pencil', width: 600},
			{info: 'Morro de São Paulo 1, 2024, color pencil', width: 800},
			{info: 'Morro de São Paulo 2, 2024, color pencil', width: 600},
		],
	},
	pencil: {
		title: 'Pencil',
		pieces: [p1, p2, p3, p4, p5, p6, p7, p8],
		data: [
			{info: 'Dining Room, 1987, pencil, 24 x 18 inches', width: 600},
			{info: 'Lost Coast, 1996, pencil, 8 x 11 inches', width: 600},
			{info: 'Make Art Straka, 2006, pencil, 11 x 18 inches', width: 600},
			{info: 'Red Rock, 1995, pencil, 11 x 8 inches', width: 800},
			{info: 'Skeleton, 1986, pencil, 18 X 24 inches', width: 600},
			{info: 'Sunflowers, 2007, pencil, 12 x 17 inches', width: 600},
			{info: 'SF to Marin Headlands, 2004, pencil, 8 x 8 inches', width: 800},
			{info: 'Red Rock Hillside, 1995, pencil, 8 x 11 inches', width: 600}
		],
	},
	color_pencil: {
		title: 'Color pencil',
		pieces: [cp1, cp2, cp3, cp4],
		data: [
			{info: 'Self Portrait, 2001, color pencil, 11 x 14 inches', width: 800},
			{info: 'Bottlebrush Flower, 2000, color pencil, 9 X 12 inches', width: 600},
			{info: 'Self Portrait, 1992, color pencil, 18 x 24 inches', width: 600},
			{info: 'Dolores Park, 2008, color pencil, 11 x 8 inches', width: 800},
		],
	},
	painting: {
		title: 'Painting',
		pieces: [pa1, pa2, pa3],
		data: [
			{info: 'California Poppies, 2000, oil paint, 20 x 16 inches', width: 800},
			{info: 'Fort Funston, 2002, oil paint, 24 x 18 inches ', width: 800},
			{info: 'Orchids in December, 2011, acrylic paint, 24 x 18 inches', width: 800},
		],
	},
	pastel: {
		title: 'Pastel',
		pieces: [ps1, ps2, ps3, ps4],
		data: [
			{info: 'Reclining Nude, 1988, pastel, 18 x 24 inches', width: 600},
			{info: 'Thomas in Mirror, 1989, pastel and water color, 20 x 26 inches', width: 600},
			{info: 'Katie on Couch, 1990, pastel and water color, 24 x 18 inches', width: 800},
			{info: 'Thomas on Piano, 1990, pastel, 18 x 24 inches', width: 600},
		],
	},
	mixed_media: {
		title: 'Mixed media',
		pieces: [mx1, mx2, mx3, mx4, mx5],
		data: [
			{info: 'The Inspector General, 1993, xerox and acrylic paint on wood', width: 800},
			{info: 'The Dream, 1992, xerox and acrylic paint on wood', width: 800},
			{info: 'Colman on Building, 1997, photoshopped digital image', width: 800},
			{info: 'Colman in Mesh, 1998, photoshopped digital image', width: 600},
			{info: 'Suzie, 1993, pencil and papier-mache on wood, ', width: 600},
		],
	},
	lamps: {
		title: 'Mood lamps',
		pieces: [l1, l2],
		data: [
			{info: 'Sconce in daylight, 1990, wire and acrylic resin, 14 x 26 inches', width: 600},
			{info: 'Sconce at night, 1990, wire and acrylic resin, 14 x 26 inches', width: 600},
		],
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
	const { info, width } = thisPage?.data[pageNum - 1] || {};
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
		<div className='prev'>
			{pageNum > 1 && <button className="portNav" onClick={goPrev}>previous</button>}
			{pageNum === 1 &&
				<button className="portNav" onClick={goPrevSection} value={`${sections[nextSection]}`}>previous</button>}
		</div>
		<div>
			{pageNum} of  {`${thisPage?.pieces?.length}`}
		</div>
		<div>
			{pageNum < thisPage?.pieces?.length && <button className="portNav" onClick={goNext}>next</button>}
			{pageNum === thisPage?.pieces?.length &&
				<button className="portNav" onClick={goNextSection} value={`${sections[nextSection]}`}>next</button>}
		</div>
	</div>
	<div className='pieceHolder'>
	<div className='pieceInfo'>
		{info}
	</div>
		<div>
			<img src={fileName} className="pieceHolder" width={width} />
		</div>
	</div>
	</>;
}

PortfolioPage.propTypes = {
	page: string,
}
export default PortfolioPage;
