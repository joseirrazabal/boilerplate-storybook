import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
/* import classNames from 'classnames' */
import ContentList from '../../Atoms/List/ContentList'
import ItemList from '../../Atoms/List/ItemList'

const styles = () => ({
	global: {
		backgroundColor: 'white',
		padding: 10
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		alignSelf: 'center',
		justifyContent: 'start'
	}
})

const AvatarList = () => (
	<ContentList>
		<ItemList
			image="https://camo.githubusercontent.com/8faf3e1c49c90e664252cfeed6226988cf7a11d7/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f73746f7279626f6f6b2f6261636b65722f31362f6176617461722e737667"
			title="Hotel Miami FaFafa"
			subtitle="es del Diego"
			borderBottom
		/>
		<ItemList title="Hotel Miami FaFafa" subtitle="es del Diego" borderBottom />
		<ItemList title="Hotel Miami FaFafa" subtitle="es del Diego" borderBottom />
		<ItemList title="Hotel Miami FaFafa" subtitle="es del Diego" borderBottom />
	</ContentList>
)
AvatarList.defaultProps = {}

AvatarList.propTypes = {

}

export default withStyles(styles)(AvatarList)
