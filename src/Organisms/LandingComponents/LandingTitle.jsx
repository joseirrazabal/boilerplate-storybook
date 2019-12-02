import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-scroll'
import classNames from 'classnames'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'
import Button from '../../Atoms/Button/Button'
import TextLoading from '../../Atoms/TitleLabel/TextLoading'

class LandingTitle extends React.PureComponent {
	render() {
		const { name, price, scrollSection, nameButton, onClick } = this.props
		const { classes } = this.props

		return (
			<section style={{ background: '#f9f8f7' }}>
				<div className={classNames(classes.viewRooms, classes.container)}>
					<div className={classNames(classes.displayFlex)} style={{ width: '100%', paddingTop: 15, paddingBottom: 15 }}>
						<React.Fragment>
							<div style={{ maxWidth: 300 }}>
								{price || price > 0 ? (
									<TitleSecondary content={name} size={16} left bold color="black" />
								) : (
									<TextLoading />
								)}
							</div>
							<div className={classNames(classes.displayFlex)}>
								{price || price > 0 ? (
									<React.Fragment>
										<div style={{ paddingRight: 15, display: 'flex', flexDirection: 'column' }}>
											<TitleSecondary content={`$ ${price}`} size={22} right bold color="black" />
											<Text style={{ width: '100%' }} size={13} content="por noche" italic right color="black" />
										</div>
										<div className={classNames(classes.marginLeft20)}>
											<li>
												<Link activeClass="active" to={scrollSection} spy smooth duration={1500}>
													<Button text={nameButton} radius secondary />
												</Link>
											</li>
										</div>
									</React.Fragment>
								) : (
									<React.Fragment>
										<div style={{ paddingRight: 15, display: 'flex', flexDirection: 'column' }}>
											<Text
												style={{ width: '100%' }}
												size={18}
												content="Ya no hay mas disponibilidad"
												italic
												right
												color="black"
											/>
											{/* <TextLoading /> */}
										</div>
										<div className={classNames(classes.marginLeft20)}>
											<li>
												<Button text="Buscar otros alojamientos" radius secondary onClick={onClick} />
											</li>
										</div>
									</React.Fragment>
								)}
							</div>
						</React.Fragment>
					</div>
				</div>
			</section>
		)
	}
}
LandingTitle.defaultProps = {
	price: 0,
	name: 'Hilton Palace',
	nameButton: 'Ver habitaciones'
}

LandingTitle.propTypes = {

	price: PropTypes.number,
	name: PropTypes.string,
	nameButton: PropTypes.string
}
const styles = {
	container: {
		width: '100%',
		maxWidth: 800,
		margin: 'auto',
		padding: '0 10px',
		height: 70
	},
	displayFlex: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		justifyContent: 'space-between'
	}
}
export default withStyles(styles)(LandingTitle)
