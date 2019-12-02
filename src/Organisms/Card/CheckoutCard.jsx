import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Text } from '../../Atoms/TitleLabel/TitleLabel'
import ImageBackground from '../../Atoms/Images/ImageBackground'
import ContainerCard from '../../Atoms/Card/ContainerCard'
import CardAction from '../../Atoms/Card/CardAction'
import CardContent from '../../Atoms/Card/CardContent'
import Image from '../../Atoms/Images/Image'
import Button from '../../Atoms/Button/Button'

const CheckoutCard = ({ imageUrl, price, title, subtitle, previousPrice }) => (
	<ContainerCard>
		<CardContent paddingConfig={10} flex="row" justify="space-between">
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<FormControlLabel
					style={{ margin: 0 }}
					value="cuotas"
					control={<Radio color="primary" />}
					labelPlacement="start"
				/>
				<Text size={12} content="12 cuotas" color="gray" />
			</div>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className="noWraper">
					<div style={{ marginRight: 5 }}>
						<Image
							image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxT5kMR0c4xC7hKtSMrPobEhlNkqNta3eHynhQ_R1cvBi-IvP5"
							alt="Banco Macro"
							height={35}
							radius={null}
						/>
					</div>
					<div style={{ marginRight: 5 }}>
						<Image
							image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxT5kMR0c4xC7hKtSMrPobEhlNkqNta3eHynhQ_R1cvBi-IvP5"
							alt="Banco Macro"
							height={35}
							radius={null}
						/>
					</div>
				</div>
				<div>
					<Button text="ver todas" size="small" primary={false} />
				</div>
			</div>
		</CardContent>
	</ContainerCard>
)

CheckoutCard.defaultProps = {
	subtitle: false,
	previousPrice: false,
	price: false,
	imageUrl: 'https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
}

CheckoutCard.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
	previousPrice: PropTypes.string,
	price: PropTypes.string,
	imageUrl: PropTypes.string
}

export default CheckoutCard
