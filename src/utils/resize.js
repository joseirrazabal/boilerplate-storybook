import CryptoJS from 'crypto-js'
import _ from 'underscore'

export default function generateUrl({
	src,
	height = false,
	width = false,
	blur = false,
	backend = `${process.env.IMAGES_URL}`
}) {
	if (_.isEmpty(src)) return '#'
	const params = { blur, src, height, width }
	const json = CryptoJS.enc.Utf8.parse(JSON.stringify(params))
	const image = CryptoJS.enc.Base64.stringify(json)
	return `${`${backend}/${encodeURIComponent(image)}`}.jpg`
}
