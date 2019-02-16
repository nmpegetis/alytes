import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx';

import team1 from 'assets/img/faces/avatar.jpg';
import team2 from 'assets/img/faces/christian.jpg';
import team3 from 'assets/img/faces/kendall.jpg';

class TeamSection extends React.Component {
	render() {
		const { classes } = this.props;
		const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
		return (
			<div className={classes.section}>
				<h2 className={classes.title}>Είμαστε οι Α-λύτες</h2>
				<h5 className={classes.smallTitle}>
					Γνώρισε την πολυμήχανη ομάδα μας. Τίποτα δε μας σταματά. Κανένα λουκέτο, καμία πόρτα, καμία κρυπτή,
					κανένας ιος, κανένα όνειρο, κανένα σκοτάδι, καμία αποκάλυψη, κανένας παράφρων επιστήμονας, κανένας
					σχιζοφρενής δολοφόνος, κανένα ζόμπι, κανενός είδους τέρας, κανένα φάντασμα.
				</h5>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team1} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Μιχάλης Μιχαλάκος
									<br />
									<small className={classes.smallTitle}>Captain</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										<b>Περιγραφή: </b> Ο αρχηγός και πιο έμπειρος από την ομάδα μας. Εξασφαλίζει την
										επιτυχία και την ποιότητα της κάθε αποστολής μελών της ομάδας που στέλνει σε
										δωμάτια για απόδραση
									</p>
									<p className={classes.description}>
										<b>Ατού: </b>Εμπειρία, Συνεργασία, Μυαλό
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team2} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Μπόνιας Αλέξανδρος
									<br />
									<small className={classes.smallTitle}>Designer</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-linkedin'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team3} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Πέτρος Σιαμπλής
									<br />
									<small className={classes.smallTitle}>Model</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team3} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Νικόλας Μπεγέτης
									<br />
									<small className={classes.smallTitle}>Model</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team3} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Κώστας Παπαϊωάννου
									<br />
									<small className={classes.smallTitle}>Model</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team3} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Γεράσιμος Τσιλιάνης
									<br />
									<small className={classes.smallTitle}>Model</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team3} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Αφροδίτη Παπαλίτσα
									<br />
									<small className={classes.smallTitle}>Model</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team3} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Μαργαρίτα Χαραλάμπους
									<br />
									<small className={classes.smallTitle}>Model</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team3} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Αλέξης
									<br />
									<small className={classes.smallTitle}>Model</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<Card plain>
								<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
									<img src={team3} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Σωτήρης Αλιβιζάτος
									<br />
									<small className={classes.smallTitle}>Model</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										You can write here details about one of your team members. You can give more
										details about what they do. Feel free to add some <a href="#pablo">links</a> for
										people to be able to follow them outside the site.
									</p>
								</CardBody>
								<CardFooter className={classes.justifyCenter}>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-twitter'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-instagram'} />
									</Button>
									<Button justIcon color="transparent" className={classes.margin5}>
										<i className={classes.socials + ' fab fa-facebook'} />
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(teamStyle)(TeamSection);
