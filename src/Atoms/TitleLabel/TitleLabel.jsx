import React from 'react'
import PropTypes from 'prop-types'

const funcStyles = ({
	lineThrough,
	size,
	bold,
	color,
	palette,
	italic,
	colorPrimary,
	colorSecondary,
	center,
	widthText,
	right
}) => ({
	global: {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: bold ? 'bold' : 'normal',
		fontStyle: italic ? 'italic' : 'normal',
		color: colorPrimary ? palette.primary.main : colorSecondary || color,
		textAlign: center ? 'center' : right ? 'right' : 'left',
		width: '100%',
		/* display: 'inline-block', */
		margin: 0
	},
	noWrap: {
		fontFamily: 'Roboto, sans-serif',
		fontWeight: bold ? 'bold' : 'normal',
		fontStyle: italic ? 'italic' : 'normal',
		color: color || 'black',
		textAlign: center ? 'center' : right ? 'right' : 'left',
		/* width: widthText, */
		width: '100%',
		maxWidth: widthText,
		height: 20,
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		'&:hover': {
			width: '100%',
			whiteSpace: 'initial',
			overflow: 'visible',
			cursor: 'pointer'
		}
	},
	h1: {
		fontSize: size || 23
	},
	h2: {
		fontWeight: 100,
		fontSize: size || 20
	},
	h3: {
		fontSize: size || 18
	},
	h4: {
		fontSize: size || 16
	},
	h5: {
		fontSize: size || 16
	},
	h6: {
		fontSize: size || 14
	},
	p: {
		fontSize: size || 14,
		fontWeight: 'lighter',
		lineHeight: '20px'
	},
	textLineThrough: {
		textDecoration: lineThrough ? 'line-through' : 'none'
	}
})

const defaultProps = {
	size: 14,
	center: false,
	bold: false,
	italic: false,
	color: 'black',
	right: false,
	lineThrough: false,
	content: '',
	widthText: '100%',
	noWrap: true,
	colorSecondary: null,
	colorPrimary: null
}

/* eslint-disable */
const propTypes = {
	content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
	size: PropTypes.number,
	widthText: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	center: PropTypes.bool,
	noWrap: PropTypes.bool,
	bold: PropTypes.bool,
	italic: PropTypes.bool,
	right: PropTypes.bool,
	color: PropTypes.string,
	lineThrough: PropTypes.bool,
	colorPrimary: PropTypes.string,
	colorSecondary: PropTypes.string
}
/* eslint-enable */

const TitlePrimary = props => {
	const titleStyles = funcStyles(props)
	const { content, children } = props
	return (
		<h1
			style={{
				...titleStyles.h1,
				...titleStyles.global
			}}
		>
			{content} {children}
		</h1>
	)
}
TitlePrimary.defaultProps = defaultProps
TitlePrimary.propTypes = propTypes

const TitleSecondary = props => {
	const titleStyles = funcStyles(props)
	const { content, children } = props
	return (
		<h2
			style={{
				...titleStyles.h2,
				...titleStyles.global
			}}
		>
			{content} {children}
		</h2>
	)
}
TitleSecondary.defaultProps = defaultProps
TitleSecondary.propTypes = propTypes

const TitleH3 = props => {
	const titleStyles = funcStyles(props)
	return (
		<h3
			style={{
				...titleStyles.h3,
				...titleStyles.global
			}}
		>
			{props.content}
		</h3>
	)
}
TitleH3.defaultProps = defaultProps
TitleH3.propTypes = propTypes

const TitleH4 = props => {
	const titleStyles = funcStyles(props)
	return (
		<h4
			style={{
				...titleStyles.h3,
				...titleStyles.global
			}}
		>
			{props.content}
		</h4>
	)
}
TitleH4.defaultProps = defaultProps
TitleH4.propTypes = propTypes

const TitleH5 = props => {
	const titleStyles = funcStyles(props)
	const { content } = props
	return (
		<h5
			style={{
				...titleStyles.h3,
				...titleStyles.global
			}}
		>
			{content}
		</h5>
	)
}
TitleH5.defaultProps = defaultProps
TitleH5.propTypes = propTypes

const TitleH6 = props => {
	const titleStyles = funcStyles(props)
	const { content } = props
	return (
		<h6
			style={{
				...titleStyles.h3,
				...titleStyles.global
			}}
		>
			{content}
		</h6>
	)
}
TitleH6.defaultProps = defaultProps
TitleH6.propTypes = propTypes

const Text = props => {
	const { p, textLineThrough, global, noWrap } = funcStyles(props)
	const { content, style, weight, children } = props
	return (
		<p
			style={{
				...p,
				...textLineThrough,
				...global,
				...style,
				...weight
			}}
		>
			{content}
			{children}
		</p>
	)
}

export const TextChildFirst = props => {
	const { p, textLineThrough, global, noWrap } = funcStyles(props)
	const { content, style, weight, children } = props
	return (
		<p
			style={{
				...p,
				...textLineThrough,
				...global,
				...style,
				...weight
			}}
		>
			{children}
			{content}
		</p>
	)
}
Text.defaultProps = defaultProps
Text.propTypes = propTypes

const TextNoWrap = props => {
	const { p, textLineThrough, noWrap } = funcStyles(props)
	const { content, style, weight, children } = props
	return (
		<p
			style={{
				...p,
				...noWrap,
				...textLineThrough,
				...style,
				...weight
			}}
		>
			{content}
			{children}
		</p>
	)
}
TextNoWrap.defaultProps = defaultProps
TextNoWrap.propTypes = propTypes

export { TitlePrimary, TitleSecondary, TitleH3, TitleH4, TitleH5, TitleH6, Text, TextNoWrap }
