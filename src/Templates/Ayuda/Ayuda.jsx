import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
import Grid from '@material-ui/core/Grid'
import SimpleSearch from '../../Organisms/Search/SimpleSearch'
import { TitleSecondary, Text } from '../../Atoms/TitleLabel/TitleLabel'

import ExpandeQuestion from './ExpandeQuestion'

const questions = [
	{
		"title": "Estoy por comprar",
		"content": "dispone de servicio de conserjería, centro de negocios, 22 salones para reuniones y estacionamiento."
	},
	{
		"title": "Tengo una compra reciente",
		"content":
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor arcu, fringilla quis mi vel, euismod imperdiet justo. Praesent quis odio quis metus faucibus blandit. Phasellus ornare tortor sed felis congue faucibus. Nam neque dui, viverra at eros sed, ornare viverra odio. Pellentesque tristique pretium mi eget consequat. Etiam vitae orci viverra, vestibulum justo scelerisque, pellentesque justo. Pellentesque vel eleifend velit. Mauris posuere vestibulum tortor, id venenatis ipsum luctus et."
	},
	{
		"title": "No recibí el mail de confirmación",
		"content":
			"Mauris blandit arcu vel aliquam pretium. Cras et pellentesque nunc. Nam sed placerat urna, id pulvinar sem. Donec placerat magna vel elit dignissim, sed pulvinar urna viverra. Integer fringilla enim eget mattis gravida. Quisque finibus justo at lorem condimentum vehicula. Mauris tristique sed mi aliquam eleifend. Vestibulum lacinia felis non justo porta porta. Aliquam erat volutpat. Mauris in dolor eu dui congue placerat eget vitae ex. Nullam malesuada justo nisl, non dignissim odio condimentum ut. Phasellus ligula eros, euismod sit amet nibh vel, luctus consectetur sapien. Integer tincidunt odio enim, sit amet tristique orci tristique vel."
	},
	{
		"title": "Si el dolor se va, ¿la inflamacion vuelve?",
		"content":
			"Morbi purus justo, iaculis id ex quis, accumsan tempus lacus. Etiam vel magna viverra, gravida velit quis, hendrerit ipsum. Aenean eget libero luctus, malesuada elit in, rutrum lectus. Sed id nibh felis. Vestibulum rutrum nunc quis aliquet bibendum. Ut lorem nunc, rutrum sit amet imperdiet quis, scelerisque ut ante. Morbi id lectus pharetra, dapibus augue ac, mattis mi. Suspendisse gravida dolor ut rutrum feugiat. Quisque quis pellentesque nunc. Aenean iaculis urna dignissim sollicitudin condimentum. Sed semper, augue at semper suscipit, nulla libero convallis nisl, et aliquet felis nisi porta nulla."
	},
	{
		"title": "otra pregunta mas",
		"content":
			"Pellentesque dictum ac mi eget dignissim. Aliquam accumsan massa nec varius molestie. Nunc nec cursus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque enim purus, tincidunt in lacus vitae, ultrices accumsan velit. Sed gravida posuere fermentum. Pellentesque a venenatis lorem, vel bibendum sem. Vivamus lorem diam, ultricies sed neque a, accumsan mattis erat."
	},
	{
		"title": "Tengo una compra reciente",
		"content":
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor arcu, fringilla quis mi vel, euismod imperdiet justo. Praesent quis odio quis metus faucibus blandit. Phasellus ornare tortor sed felis congue faucibus. Nam neque dui, viverra at eros sed, ornare viverra odio. Pellentesque tristique pretium mi eget consequat. Etiam vitae orci viverra, vestibulum justo scelerisque, pellentesque justo. Pellentesque vel eleifend velit. Mauris posuere vestibulum tortor, id venenatis ipsum luctus et."
	},
	{
		"title": "No recibí el mail de confirmación",
		"content":
			"Mauris blandit arcu vel aliquam pretium. Cras et pellentesque nunc. Nam sed placerat urna, id pulvinar sem. Donec placerat magna vel elit dignissim, sed pulvinar urna viverra. Integer fringilla enim eget mattis gravida. Quisque finibus justo at lorem condimentum vehicula. Mauris tristique sed mi aliquam eleifend. Vestibulum lacinia felis non justo porta porta. Aliquam erat volutpat. Mauris in dolor eu dui congue placerat eget vitae ex. Nullam malesuada justo nisl, non dignissim odio condimentum ut. Phasellus ligula eros, euismod sit amet nibh vel, luctus consectetur sapien. Integer tincidunt odio enim, sit amet tristique orci tristique vel."
	},
	{
		"title": "Si el dolor se va, ¿la inflamacion vuelve?",
		"content":
			"Morbi purus justo, iaculis id ex quis, accumsan tempus lacus. Etiam vel magna viverra, gravida velit quis, hendrerit ipsum. Aenean eget libero luctus, malesuada elit in, rutrum lectus. Sed id nibh felis. Vestibulum rutrum nunc quis aliquet bibendum. Ut lorem nunc, rutrum sit amet imperdiet quis, scelerisque ut ante. Morbi id lectus pharetra, dapibus augue ac, mattis mi. Suspendisse gravida dolor ut rutrum feugiat. Quisque quis pellentesque nunc. Aenean iaculis urna dignissim sollicitudin condimentum. Sed semper, augue at semper suscipit, nulla libero convallis nisl, et aliquet felis nisi porta nulla."
	},
	{
		"title": "otra pregunta mas",
		"content":
			"Pellentesque dictum ac mi eget dignissim. Aliquam accumsan massa nec varius molestie. Nunc nec cursus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque enim purus, tincidunt in lacus vitae, ultrices accumsan velit. Sed gravida posuere fermentum. Pellentesque a venenatis lorem, vel bibendum sem. Vivamus lorem diam, ultricies sed neque a, accumsan mattis erat."
	},
	{
		"title": "Tengo una compra reciente",
		"content":
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor arcu, fringilla quis mi vel, euismod imperdiet justo. Praesent quis odio quis metus faucibus blandit. Phasellus ornare tortor sed felis congue faucibus. Nam neque dui, viverra at eros sed, ornare viverra odio. Pellentesque tristique pretium mi eget consequat. Etiam vitae orci viverra, vestibulum justo scelerisque, pellentesque justo. Pellentesque vel eleifend velit. Mauris posuere vestibulum tortor, id venenatis ipsum luctus et."
	},
	{
		"title": "No recibí el mail de confirmación",
		"content":
			"Mauris blandit arcu vel aliquam pretium. Cras et pellentesque nunc. Nam sed placerat urna, id pulvinar sem. Donec placerat magna vel elit dignissim, sed pulvinar urna viverra. Integer fringilla enim eget mattis gravida. Quisque finibus justo at lorem condimentum vehicula. Mauris tristique sed mi aliquam eleifend. Vestibulum lacinia felis non justo porta porta. Aliquam erat volutpat. Mauris in dolor eu dui congue placerat eget vitae ex. Nullam malesuada justo nisl, non dignissim odio condimentum ut. Phasellus ligula eros, euismod sit amet nibh vel, luctus consectetur sapien. Integer tincidunt odio enim, sit amet tristique orci tristique vel."
	},
	{
		"title": "Si el dolor se va, ¿la inflamacion vuelve?",
		"content":
			"Morbi purus justo, iaculis id ex quis, accumsan tempus lacus. Etiam vel magna viverra, gravida velit quis, hendrerit ipsum. Aenean eget libero luctus, malesuada elit in, rutrum lectus. Sed id nibh felis. Vestibulum rutrum nunc quis aliquet bibendum. Ut lorem nunc, rutrum sit amet imperdiet quis, scelerisque ut ante. Morbi id lectus pharetra, dapibus augue ac, mattis mi. Suspendisse gravida dolor ut rutrum feugiat. Quisque quis pellentesque nunc. Aenean iaculis urna dignissim sollicitudin condimentum. Sed semper, augue at semper suscipit, nulla libero convallis nisl, et aliquet felis nisi porta nulla."
	},
	{
		"title": "otra pregunta mas",
		"content":
			"Pellentesque dictum ac mi eget dignissim. Aliquam accumsan massa nec varius molestie. Nunc nec cursus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque enim purus, tincidunt in lacus vitae, ultrices accumsan velit. Sed gravida posuere fermentum. Pellentesque a venenatis lorem, vel bibendum sem. Vivamus lorem diam, ultricies sed neque a, accumsan mattis erat."
	},
	{
		"title": "Tengo una compra reciente",
		"content":
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dolor arcu, fringilla quis mi vel, euismod imperdiet justo. Praesent quis odio quis metus faucibus blandit. Phasellus ornare tortor sed felis congue faucibus. Nam neque dui, viverra at eros sed, ornare viverra odio. Pellentesque tristique pretium mi eget consequat. Etiam vitae orci viverra, vestibulum justo scelerisque, pellentesque justo. Pellentesque vel eleifend velit. Mauris posuere vestibulum tortor, id venenatis ipsum luctus et."
	},
	{
		"title": "No recibí el mail de confirmación",
		"content":
			"Mauris blandit arcu vel aliquam pretium. Cras et pellentesque nunc. Nam sed placerat urna, id pulvinar sem. Donec placerat magna vel elit dignissim, sed pulvinar urna viverra. Integer fringilla enim eget mattis gravida. Quisque finibus justo at lorem condimentum vehicula. Mauris tristique sed mi aliquam eleifend. Vestibulum lacinia felis non justo porta porta. Aliquam erat volutpat. Mauris in dolor eu dui congue placerat eget vitae ex. Nullam malesuada justo nisl, non dignissim odio condimentum ut. Phasellus ligula eros, euismod sit amet nibh vel, luctus consectetur sapien. Integer tincidunt odio enim, sit amet tristique orci tristique vel."
	},
	{
		"title": "Si el dolor se va, ¿la inflamacion vuelve?",
		"content":
			"Morbi purus justo, iaculis id ex quis, accumsan tempus lacus. Etiam vel magna viverra, gravida velit quis, hendrerit ipsum. Aenean eget libero luctus, malesuada elit in, rutrum lectus. Sed id nibh felis. Vestibulum rutrum nunc quis aliquet bibendum. Ut lorem nunc, rutrum sit amet imperdiet quis, scelerisque ut ante. Morbi id lectus pharetra, dapibus augue ac, mattis mi. Suspendisse gravida dolor ut rutrum feugiat. Quisque quis pellentesque nunc. Aenean iaculis urna dignissim sollicitudin condimentum. Sed semper, augue at semper suscipit, nulla libero convallis nisl, et aliquet felis nisi porta nulla."
	},
	{
		"title": "otra pregunta mas",
		"content":
			"Pellentesque dictum ac mi eget dignissim. Aliquam accumsan massa nec varius molestie. Nunc nec cursus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque enim purus, tincidunt in lacus vitae, ultrices accumsan velit. Sed gravida posuere fermentum. Pellentesque a venenatis lorem, vel bibendum sem. Vivamus lorem diam, ultricies sed neque a, accumsan mattis erat."
	}
]

class Shopping extends Component {
	state = { questions: questions }
	render() {
		const { classes, useDefaultCursor } = this.props
		const { questions } = this.state
		return (
			<Grid>
				<Grid key={1} item xs={12} className={classNames(classes.paddingBox3, classes.bgColorGray)}>
					<div className={classNames(classes.containerlg, classes.flexCenterColumn, { maxWidth: 400 })}>
						<div className="helpImg" />
						<div>
							<TitleSecondary content="Necesitas Ayuda?" />
						</div>
					</div>
				</Grid>
				<div
					className={classNames({
						maxWidth: 600,
						width: '100%',
						margin: 'auto',
						display: 'table'
					})}
					key={3}
				>
					<div className={classNames({ marginTop: -25, paddingLeft: 10, paddingRight: 10 })}>
						<SimpleSearch />
					</div>
				</div>
				<Grid key={2} item xs={12} className={classNames(classes.paddingBox3, classes.container, classes.bgColorGray2)}>
					<div className={classNames(classes.container)}>
						<TitleSecondary left content="Déjanos ayudarte" />
						<div className={classNames(classes.paddingBox)}>
							{questions.map((item, i) => (
								<ExpandeQuestion key={i} title={item.title} content={item.content} value={item.value} />
							))}
						</div>
					</div>
				</Grid>
			</Grid>
		)
	}
}
Shopping.defaultProps = {
	imageUrl: '../../images/help.png'
}

Shopping.propTypes = {

	imageUrl: PropTypes.string.isRequired
}

export default withStyles(
	({
		mauri: {
			color,
			variables,
			flexCenterColumn,
			paddingBox,
			bgColorGray,
			paddingBox3,
			bgColorGray2,
			containerlg,
			container
		}
	}) => ({
		flexCenterColumn,
		containerlg,
		container,
		bgColorGray,
		bgColorGray2,
		paddingBox,
		paddingBox3,
		iconFilter: {
			minWidth: 100
		}
	})
)(Shopping)
