import React from 'react'
import { storiesOf } from '@storybook/react'
/* import { text, boolean, number, select } from '@storybook/addon-knobs/react' */
import { SortList, SortItem, SortLoading, LoadingSortList } from '../src'
import IconsFont from '../src/Atoms/IconsFont'

const stories = storiesOf('Sorts', module)
// stories.addDecorator(withKnobs);

stories.add('SortList', () => (
	<SortList onChange={value => console.log(value)}>
		<SortItem icon={<IconsFont size={20} icon="flaticon-money-1" />} value="P" desc="32" title="Precio" />
		<SortItem icon={<IconsFont size={20} icon="flaticon-banner" />} value="E" title="Estrellas" />
		<SortItem icon={<IconsFont size={20} icon="flaticon-heart" />} value="R" title="Puntaje" />
	</SortList>
))
stories.add('SortLoading', () => <SortLoading />)
stories.add('LoadingSortList', () => <LoadingSortList items={3} />)
