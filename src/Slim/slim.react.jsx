/*
 * Slim v4.17.1 - Image Cropping Made Easy
 * Copyright (c) 2018 Rik Schennink - http://slimimagecropper.com
 */
// Necessary React Modules
import React from 'react'
import ReactDOM from 'react-dom'

// Slim (place slim CSS and module js file in same folder as this file)
import Slim from './slim.module.js'
// import './slim.css'

// React Component
export default class extends React.Component {
	componentDidMount() {
		var root = ReactDOM.findDOMNode(this)
		if (this.props.initialImage) {
			var img = document.createElement('img')
			img.setAttribute('alt', '')
			img.src = this.props.initialImage
			root.appendChild(img)
		}
		this.instance = Slim ? Slim.create(root, this.props) : null
	}

	render() {
		return <div className="slim">{this.props.children}</div>
	}
}
