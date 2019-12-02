import React from 'react'
import { withStyles } from '@material-ui/styles'
import Slim from '../../Slim/slim.react'

const ImageCard = () => (
	<div
		style={{
			boxShadow: '0 1px 2px rgba(0,0,0,0.3)',
			borderRadius: 6,
			overflow: 'hidden'
		}}
	>
		<Slim data-ratio="16:6" data-size="240,240" labelLoading="..." maxFileSize="3">
			<input type="file" className="hide" />
		</Slim>
	</div>
)

ImageCard.defaultProps = {}

ImageCard.propTypes = {

}
const styles = () => ({
	global: {
		backgroundColor: 'white',
		height: 'auto',
		position: 'relative'
	}
})
export default withStyles(styles)(ImageCard)
