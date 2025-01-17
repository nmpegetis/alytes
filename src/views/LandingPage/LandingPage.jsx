import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';

// Sections for this page
import ProductSection from './Sections/ProductSection.jsx';
import TeamSection from './Sections/TeamSection.jsx';
import WorkSection from './Sections/WorkSection.jsx';
import img from 'assets/img/png/logo/letters/lettersblackTitle.png';
import img2 from 'assets/img/png/logo/letters/ilthon1.png';

const dashboardRoutes = [];

class LandingPage extends React.Component {
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div>
				<Header
					color="transparent"
					routes={dashboardRoutes}
					brand={
						<div className={classes.button}>
							<img src={img} width="70" />
						</div>
					} //"ΑΛΥΤΕΣ"
					rightLinks={<HeaderLinks />}
					fixed
					changeColorOnScroll={{
						height: 400,
						color: 'white',
					}}
					{...rest}
				/>
				<Parallax
					filter
					image={require('assets/img/png/logo/letters/letterswhite.png')}
					styles={{ backgroundColor: 'black' }}
				>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								{/* <h1 className={classes.title}>Τίποτα δε μένει ά-λυτο</h1>
								<h4>
									Every landing page needs a small description after the big bold title, that's why we
									added this text here. Add here all the information that can make you or your product
									create the first impression.
								</h4> */}
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								<br />
								{/* <h2 className={classes.title}>Ήλθον, λύσον και απήλθον</h2> */}
								<div className={classes.button}>
									<img src={img2} width="350" />
								</div>
								{/* <Button
									color="danger"
									size="lg"
									href="" //"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fas fa-play" />
									Δείτε το βιντεο
								</Button> */}
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<ProductSection />
						<TeamSection />
						{/* <WorkSection /> */}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withStyles(landingPageStyle)(LandingPage);
