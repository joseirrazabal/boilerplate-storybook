import React from 'react'
/* import PropTypes from 'prop-types' */
import { withStyles } from '@material-ui/styles'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Grid from '@material-ui/core/Grid'
import Image from '../../../Atoms/Images/Image'
import Button from '../../../Atoms/Button/Button'
import InputSimple from '../../../Atoms/Input'
import InputPassword from '../../../Atoms/InputPassword'
import ContainerCard from '../../../Atoms/Card/ContainerCard'
import CardContent from '../../../Atoms/Card/CardContent'
import ContainerSm from '../../../Atoms/Containers/ContainerSm'

const styles = () => ({
	containerCenter: {
		display: 'flex',
		width: '100%',
		height: '100vh',
		justifyContent: 'center',
		alignItems: 'center'
	},
	flexCenter: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

const UserSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email address')
		.required('Required Email'),
	password: Yup.string().required('Required Password')
})

class LoginBackoffice extends React.PureComponent {
	render() {
		const { classes, submit, errorSubmit } = this.props

		return (
			<Formik
				initialValues={{
					email: '',
					password: ''
				}}
				validationSchema={UserSchema}
				onSubmit={values => {
					submit({
						variables: {
							email: values.email,
							password: values.password
						}
					})
				}}
				render={({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
					<secction className={classes.containerCenter}>
						<ContainerSm>
							<form onSubmit={handleSubmit}>
								<Grid item xs={12} className={classes.flexCenter}>
									<div className="paddingObject">
										<Image
											height={60}
											image="https://www.google.com/a/cpanel/upate.com/images/logo.gif?service=google_gsuite"
										/>
									</div>
								</Grid>
								<ContainerCard flex="column">
									<CardContent background="#f9f8f7" paddingConfig={15}>
										<Grid container spacing={2}>
											<Grid item xs={12}>
												<InputSimple
													idValue="email"
													labelValue="email"
													nameValue="email"
													placeholderValue="email"
													onChange={handleChange}
													onBlur={handleBlur}
													valued={values.email}
													error={errors.email}
												/>
											</Grid>
											<Grid item xs={12}>
												<InputPassword
													type="password"
													idValue="password"
													labelValue="password"
													nameValue="password"
													placeholderValue="password"
													onChange={handleChange}
													onBlur={handleBlur}
													valued={values.password}
													// error={errors.password}
													error={errorSubmit}
												/>
											</Grid>
											<Grid item xs={12}>
												<Button
													text="ENTRAR"
													size="medium"
													border
													fullWidth
													primary
													Component={<button type="submit" />}
												/>
											</Grid>
											<Grid item xs={6}>
												<a href="/register">Registrar</a>
											</Grid>
											<Grid item xs={6}>
												<div style={{ float: 'right' }}>
													<a href="/forgot-password">Olvide mi password</a>
												</div>
											</Grid>
										</Grid>
									</CardContent>
								</ContainerCard>
							</form>
						</ContainerSm>
					</secction>
				)}
			/>
		)
	}
}
LoginBackoffice.propTypes = {

}
export default withStyles(styles)(LoginBackoffice)
