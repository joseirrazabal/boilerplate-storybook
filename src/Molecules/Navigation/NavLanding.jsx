import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import Stars from '../../Atoms/Stars'
import { TitleSecondary } from '../../Atoms/TitleLabel/TitleLabel'

const NavLanding = ({title, subTitle, stars, children, classes, showStars, code}) => (
  <ContainerCard radius={0} shadow={false} background="transparent" overflow="visible">
		<Grid container spacing={0} className={classes.containerlg}>
			<Grid item xs={2} lg={3} xl={5} style={{
    margin: 'auto'
  }}>
				<div className={classes.simpleFlex}>
					{showStars && (
  <div>
							<Stars stars={stars} />
						</div>
  )}
					<div style={{
    width: '100%'
  }}>
						<Typography code={code} variant="subtitle1" style={{
    fontSize: 15
  }} noWrap>
							{title}
						</Typography>
					</div>
					{ /* TODO es para gregar datos de habitaciones<div>
						<Text italic size={12} left color="gray">
							{title}
						</Text>
					</div> */ }
				</div>
				<div className={classes.simpleFlex} style={{}}>
					<TitleSecondary size={12} left color="black">
						{subTitle}
					</TitleSecondary>
				</div>
			</Grid>
			<Grid item xs={10} lg={9} xl={7} style={{
    margin: '5px 0'
  }}>
				{children}
			</Grid>
		</Grid>
	</ContainerCard>
)
NavLanding.defaultProps = {
  title: 'Panamericano Buenos Aires',
  code: '',
  subTitle: '',
  stars: 4,
  showStars: true
}

NavLanding.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  stars: PropTypes.number
}

const styles = () => ({
  containerlg: {
    margin: 'auto',
    display: 'flex',
    maxWidth: 1250,
    width: '100%'
  // padding: 5
  },
  simpleFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'center'
  }
})
export default withStyles(styles)(NavLanding)
