import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import workStyle from 'assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx';

class WorkSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem cs={12} sm={12} md={8}>
						<h2 className={classes.title}>Πες μας κάτι</h2>
						<h4 className={classes.description}>
							Επικοινώνησε μαζί μας. Γράψε μας μερικές γραμμές για τα δωμάτια που έχεις πάει ή ρώτα μας
							για τα δωμάτια που θέλεις να πας. Μία παράγραφος που θα περιγράφει τα παραπάνω είναι αρκετή.
						</h4>
						<form
							action="https://script.google.com/macros/s/AKfycbxxRm30w9QSCZEJmJ4BltCddZRQe--LVFG7vlMqyA/exec"
							method="post"
							id="gform"
							enctype="text/plain"
							data-email
						>
							<GridContainer>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										type="text"
										name="name"
										labelText="Όνομα"
										id="name"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
								<GridItem xs={12} sm={12} md={6}>
									<CustomInput
										type="text"
										labelText="Email"
										id="email"
										name="email"
										formControlProps={{
											fullWidth: true,
										}}
									/>
								</GridItem>
								<CustomInput
									type="text"
									labelText="Το μήνυμά σου"
									id="message"
									name="message"
									formControlProps={{
										fullWidth: true,
										className: classes.textArea,
									}}
									inputProps={{
										multiline: true,
										rows: 5,
									}}
								/>
								<GridContainer justify="center">
									<GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
										<Button type="submit" id="submit" name="submit" color="primary">
											Αποστολη
										</Button>
									</GridItem>
								</GridContainer>
							</GridContainer>
						</form>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}

export default withStyles(workStyle)(WorkSection);
