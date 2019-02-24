import React from 'react';
import { format } from 'd3-format';
import data from './spiderData.json';

import { RadarChart, XYPlot, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, Hint } from 'react-vis';
// The first 6 data elements here are to simulate a 'spider' type of radar chart -
// similar to CircularGridLines, but straight edges instead.

// console.log('data', data['alytis1']);
const LEVEL_NUM = 11;
const createSpiderBackground = (categories, alytis) => {
	const arr = [];
	for (let i = 0; i < LEVEL_NUM; i++) arr.push(createLayer(categories, i));
	arr.push({
		...data[alytis],
		fill: 'rgba(0,0,0,0.8)',
		stroke: 'rgba(0,0,0,1)',
	});
	// arr.push({
	// 	riddles: 4,
	// 	terror: 5,
	// 	physicalActivity: 7,
	// 	skills: 4,
	// 	observation: 4,
	// 	teamSpirit: 4,
	// 	leadership: 4,
	// 	initiative: 4,
	// 	modesty: 4,
	// 	imagination: 9,
	// 	experience: 9,
	// 	name: `layer11`,
	// 	fill: 'rgba(0,0,0,0.8)',
	// 	stroke: 'rgba(0,0,0,1)',
	// });
	return arr;
};

const createLayer = (categories, layerNum) => {
	const obj = {};
	categories.map((category) => (obj[category] = layerNum));
	obj['name'] = `layer${layerNum}`;
	obj['fill'] = layerNum % 2 ? console.log('aaa', layerNum, 'ee', layerNum % 2) || 'white' : '#ddd';
	obj['stroke'] = `#ccc`;
	return obj;
};

const categories = [
	'riddles',
	'terror',
	'physicalActivity',
	'skills',
	'observation',
	'teamSpirit',
	'leadership',
	'initiative',
	'modesty',
	'imagination',
	'experience',
];

const categoryNames = {
	riddles: 'Γρίφοι',
	terror: 'Τρόμος',
	physicalActivity: 'Φυσική δραστηριότητα',
	skills: 'Δεξιότητες',
	observation: 'Παρατηρητικότητα',
	teamSpirit: 'Ομαδικό πνεύμα',
	leadership: 'Ηγετικό πνεύμα',
	initiative: 'Πρωτοβουλία',
	modesty: 'Σεμνότητα',
	imagination: 'Φαντασία',
	experience: 'Εμπειρία',
};

const domains = (categories) => {
	const arr = [];
	console.log(categories);
	arr.push(
		categories.map((category) => {
			const domainObj = {};
			domainObj.domain = [ 0, 10 ];
			domainObj.name = category;
			domainObj.getValue = (d) => d[category];
			return domainObj;
		})
	);

	// arr.push(domainObj);
	return arr;
};
// domains={[
// 	{
// 		name: 'mileage',
// 		domain: [ 0, 10 ],
// 		tickFormat: (t) => {
// 			if (t < 5 && t > 0) {
// 				return Math.round(t);
// 			}
// 			return '';
// 		},
// 	},
// 	{
// 		name: 'price',
// 		domain: [ 0, 10 ],
// 		getValue: (d) => d.price,
// 	},
// 	{ name: 'safetbby', domain: [ 0, 10 ], getValue: (d) => d.riddle },
// 	{ name: 'performance', domain: [ 0, 10 ], getValue: (d) => d.imagination },
// 	{ name: 'interior', domain: [ 0, 10 ], getValue: (d) => d.interior },
// 	{ name: 'warranty', domain: [ 0, 10 ], getValue: (d) => d.warranty },
// ]}

// console.log(createSpiderBackground(categories));

const DATA = [
	// {
	// 	name: 'Spider6',
	// 	mileage: 6,
	// 	price: 6,
	// 	safety: 6,
	// 	performance: 6,
	// 	interior: 6,
	// 	warranty: 6,
	// 	fill: 'white',
	// 	stroke: '#cccccc',
	// },
	// {
	// 	name: 'Spider5',
	// 	mileage: 5,
	// 	price: 5,
	// 	safety: 5,
	// 	performance: 5,
	// 	interior: 5,
	// 	warranty: 5,
	// 	fill: '#f8f8f8',
	// 	stroke: '#cccccc',
	// },
	// {
	// 	name: 'Spider4',
	// 	mileage: 4,
	// 	price: 4,
	// 	safety: 4,
	// 	performance: 4,
	// 	interior: 4,
	// 	warranty: 4,
	// 	fill: 'white',
	// 	stroke: '#cccccc',
	// },
	// {
	// 	name: 'Spider3',
	// 	mileage: 3,
	// 	price: 3,
	// 	safety: 3,
	// 	performance: 3,
	// 	interior: 3,
	// 	warranty: 3,
	// 	fill: '#f8f8f8',
	// 	stroke: '#cccccc',
	// },
	// {
	// 	name: 'Spider2',
	// 	mileage: 2,
	// 	price: 2,
	// 	safety: 2,
	// 	performance: 2,
	// 	interior: 2,
	// 	warranty: 2,
	// 	fill: 'white',
	// 	stroke: '#cccccc',
	// },
	// {
	// 	name: 'Spider1',
	// 	mileage: 1,
	// 	price: 1,
	// 	safety: 1,
	// 	performance: 1,
	// 	interior: 1,
	// 	warranty: 1,
	// 	fill: '#f8f8f8',
	// 	stroke: '#cccccc',
	// },
	// {
	// 	name: 'Spider0',
	// 	mileage: 0.1,
	// 	price: 0.1,
	// 	safety: 0.1,
	// 	performance: 0.1,
	// 	interior: 0.1,
	// 	warranty: 0.1,
	// 	fill: '#f8f8f8',
	// 	stroke: '#cccccc',
	// },
	{
		name: 'Mercedes',
		mileage: 3,
		price: 4,
		safety: 5,
		performance: 1.5,
		interior: 4,
		warranty: 4.5,
		fill: 'rgba(114,172,240,0.5)',
		stroke: 'rgba(114,172,240,0.2)',
	},
];
// const DATA = [
// 	{
// 		name: 'Mercedes',
// 		mileage: 7,
// 		price: 10,
// 		safety: 8,
// 		performance: 9,
// 		interior: 7,
// 		warranty: 7,
// 		nikos: 8,
// 	},
// ];
const tipStyle = {
	display: 'flex',
	color: '#fff',
	background: '#000',
	alignItems: 'center',
	padding: '5px',
};

const basicFormat = format('.2r');
const wideFormat = format('.3r');

class SpiderGram extends React.Component {
	state = {
		hoveredCell: false,
	};

	render() {
		const { data } = this.props;
		const { hoveredCell } = this.state;
		const dd = createSpiderBackground(categories, 'alytis1');
		const ddo = domains(categories);
		console.log('d', dd, 'domain', ddo);
		return (
			dd &&
			ddo && (
				// <RadarChart
				// 	data={DATA}
				// 	tickFormat={(t) => wideFormat(t)}
				// 	startingAngle={0}
				// 	domains={[
				// 		{ name: 'mileage', domain: [ 0, 10 ] },
				// 		{
				// 			name: 'price',
				// 			domain: [ 2, 16 ],
				// 			tickFormat: (t) => `$${basicFormat(t)}`,
				// 			getValue: (d) => d.price,
				// 		},
				// 		{ name: 'safety', domain: [ 5, 10 ], getValue: (d) => d.safety },
				// 		{ name: 'performance', domain: [ 0, 10 ], getValue: (d) => d.performance },
				// 		{ name: 'interior', domain: [ 0, 7 ], getValue: (d) => d.interior },
				// 		{ name: 'warranty', domain: [ 10, 2 ], getValue: (d) => d.warranty },
				// 	]}
				// 	width={400}
				// 	height={300}
				// />
				<RadarChart
					data={dd}
					// data={dd}
					tickFormat={(t) => {
						return '';
					}}
					// tickFormat={(t) => basicFormat(t)}
					// domains={[
					// 	{
					// 		name: 'mileage',
					// 		domain: [ 0, 10 ],
					// 		tickFormat: (t) => {
					// 			if (t < 5 && t > 0) {
					// 				return Math.round(t);
					// 			}
					// 			return '';
					// 		},
					// 	},
					// 	...ddo,
					// ]}
					domains={[
						// {
						// 	name: 'mileage',
						// 	domain: [ 0, 10 ],
						// 	tickFormat: (t) => {
						// 		if (t < 5 && t > 0) {
						// 			return Math.round(t);
						// 		}
						// 		return '';
						// 	},
						// },
						// {
						// 	name: 'leadership',
						// 	domain: [ 0, 10 ],
						// 	getValue: (d) => d.price,
						// },
						{
							name: categoryNames['riddles'],
							tickFormat: (t) => {
								if (t < 11 && t > 0) {
									return Math.round(t);
								}
								return '';
							},
							domain: [ 0, 10 ],
							getValue: (d) => d.riddles,
						},
						{ name: categoryNames['terror'], domain: [ 0, 10 ], getValue: (d) => d.terror },
						{
							name: categoryNames['physicalActivity'],
							domain: [ 0, 10 ],
							getValue: (d) => d.physicalActivity,
						},
						{ name: categoryNames['skills'], domain: [ 0, 10 ], getValue: (d) => d.skills },
						{ name: categoryNames['observation'], domain: [ 0, 10 ], getValue: (d) => d.observation },
						{ name: categoryNames['teamSpirit'], domain: [ 0, 10 ], getValue: (d) => d.teamSpirit },
						{ name: categoryNames['leadership'], domain: [ 0, 10 ], getValue: (d) => d.leadership },
						{ name: categoryNames['initiative'], domain: [ 0, 10 ], getValue: (d) => d.initiative },
						{ name: categoryNames['modesty'], domain: [ 0, 10 ], getValue: (d) => d.modesty },
						{ name: categoryNames['imagination'], domain: [ 0, 10 ], getValue: (d) => d.imagination },
						{ name: categoryNames['experience'], domain: [ 0, 10 ], getValue: (d) => d.experience },
					]}
					width={300} //600
					height={300} //600
					margin={{ left: 50, right: 50, top: 50, bottom: 50 }} //100
					// onValueMouseOver={(v) => {
					// 	this.setState({ hoveredCell: v });
					// }}
					// onValueMouseOut={(v) => this.setState({ hoveredCell: false })}
					style={{
						polygons: {
							strokeWidth: 1,
							strokeOpacity: 1,
							fillOpacity: 0.2,
						},
						labels: {
							textAnchor: 'middle',
							fontSize: '8', //15
						},
						axes: {
							line: {
								fillOpacity: 0.8,
								strokeWidth: 0.5,
								strokeOpacity: 0.8,
							},
							ticks: {
								fillOpacity: 0,
								strokeOpacity: 0,
							},
							text: { padding: '100px' },
						},
					}}
					// colorRange={[ 'transparent' ]}
					// hideInnerMostValues={false}
					// renderAxesOverPolygons={true}
				>
					{/* {hoveredCell &&
					hoveredCell.dataName === 'Mercedes' && (
						<Hint value={hoveredCell}>
							<div style={tipStyle}>
								{hoveredCell.domain}: {hoveredCell.value}
							</div>
						</Hint>
					)} */}
				</RadarChart>
			)
		);
	}
}

export default SpiderGram;
