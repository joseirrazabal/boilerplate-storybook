import React from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '../../Atoms/Button/Button'
import MobileDialog from './MobileDialog'
import MobileFilterButton from '../../Atoms/Dialog/MobileFilterButton'

class MobileFilter extends React.PureComponent {
	state = {
		show: false
	}

	handleTriggerFilterButton = () => {
		this.setState({
			show: true
		})
	}

	handleCloseDialog = () => {
		this.setState({
			show: false
		})
	}

	render() {
		const { children, loading, total } = this.props
		const { show } = this.state
		return (
			<React.Fragment>
				<MobileDialog
					title="Filtro y Ordenamiento"
					show={show}
					total={total}
					onClickCloseButton={this.handleCloseDialog}
					onCloseDialog={this.handleCloseDialog}
					content={children}
					actions={
						<div style={{ width: '100%' }}>
							<Button text={`Filtrar búsqueda (${total}) resultados`} fullWidth onClick={this.handleCloseDialog} />
							<LinearProgress variant={loading && 'indeterminate'} />
						</div>
					}
				/>
				<MobileFilterButton onClick={this.handleTriggerFilterButton} />
			</React.Fragment>
		)
	}
}

MobileFilter.defaultProps = {}
MobileFilter.propTypes = {
	children: PropTypes.node.isRequired,
	loading: PropTypes.bool.isRequired,
	total: PropTypes.number.isRequired
}

export default MobileFilter
