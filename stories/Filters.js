import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, number, select, array, object } from '@storybook/addon-knobs/react'
import {
	FiltersHotels,
	FiltersVuelos,
	FiltersHotelsMobile,
	RangeFilter,
	ListFilter,
	CustomFilter,
	LengthFilter,
	TimeFilter
} from '../src'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

class SimpleMenu extends React.PureComponent {
	state = {
		anchorEl: null
	}

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { anchorEl } = this.state

		return (
			<div>
				<Button aria-owns={anchorEl ? 'simple-menu' : null} aria-haspopup="true" onClick={this.handleClick}>
					Open Menu
				</Button>
				<Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
					<MenuItem onClick={this.handleClose}>Profile</MenuItem>
					<MenuItem onClick={this.handleClose}>My account</MenuItem>
					<MenuItem onClick={this.handleClose}>Logout</MenuItem>
				</Menu>
			</div>
		)
	}
}

const stories = storiesOf('Filters', module)
// stories.addDecorator(withKnobs);

stories.add('Filter Hoteles', () => <FiltersHotels />)
stories.add('Filter Vuelos', () => <FiltersVuelos />)
stories.add('Filters Hoteles Mobile', () => <FiltersHotelsMobile />)

stories.add('Range Filter', () => (
	<RangeFilter
		anchorId="price"
		title={text('title', 'Precio')}
		onChange={values => console.log(values)}
		formatValue={val => `$ ${val}`}
		values={{ from: number('from', 350), to: number('to', 4300) }}
		extremes={{ min: number('min', 230), max: number('max', 4800) }}
	/>
))

stories.add('List Filter', () => (
	<ListFilter
		anchorId="airport"
		mobile
		onChange={values => console.log(values)}
		initialTitle={text('title', 'Aeropuertos')}
		initialValues={array('values', ['PAR', 'MAD'])}
		items={array('items', [
			{ value: 'PAR', text: 'Paris', primary: '100', secondary: '$ 100013' },
			{ value: 'MAD', text: 'Madrid', primary: '130', secondary: '$ 3013' }
		])}
	/>
))

stories.add('Length Filter', () => (
	<LengthFilter
		anchorId="price2"
		title={text('title', 'Precio')}
		onChange={values => console.log(values)}
		initialValues={{
			going: { from: 1, to: 100 },
			return: { from: 1, to: 100 },
			goingScales: { from: 1, to: 100 },
			returnScales: { from: 1, to: 100 }
		}}
		extremes={{
			going: { min: 1, max: 100 },
			return: { min: 1, max: 100 },
			goingScales: { min: 1, max: 100 },
			returnScales: null
		}}
	/>
))

stories.add('Time Filter', () => <TimeFilter onChange={values => console.log(values)} />)

stories.add('Text Filter', () => (
	<CustomFilter anchorId="custom" onChange={values => console.log(values)}>
		<p>conejo</p>
	</CustomFilter>
))

stories.add('Conejito', () => <SimpleMenu />)
