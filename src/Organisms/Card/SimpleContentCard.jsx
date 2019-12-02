import React from 'react'
import PropTypes from 'prop-types'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardContent from '../../Atoms/Card/CardContent'
import HeaderCard from '../../Atoms/Card/HeaderCard'

const SimpleContentCard = ({ title, children, padding }) => (
	<ContainerCard shadow>
		<HeaderCard title={title} />
		<CardContent flex="column" align="flex-start" paddingConfig={padding}>
			{children}
		</CardContent>
	</ContainerCard>
)
SimpleContentCard.defaultProps = {
	title: 'Comentarios',
	padding: 15
}

SimpleContentCard.propTypes = {
	title: PropTypes.string,
	padding: PropTypes.number
}

export default SimpleContentCard
