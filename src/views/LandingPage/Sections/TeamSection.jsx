import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx';

// team photos
import team1 from 'assets/img/faces/captain.jpg';
import team2 from 'assets/img/faces/teacher.jpg';
import team3 from 'assets/img/faces/frontliner.jpg';
import team4 from 'assets/img/faces/brainiac.jpg';
import team5 from 'assets/img/faces/tactical.jpg';
import team6 from 'assets/img/faces/onearm.jpg';
import team7 from 'assets/img/faces/redcanary.jpg';
import team8 from 'assets/img/faces/seeker.jpg';
import team9 from 'assets/img/faces/hulk.jpg';
import team10 from 'assets/img/faces/artist.jpg';
import SpiderGram from './SpiderGram';
import data from './spiderData.json';

class TeamSection extends React.Component {
	render() {
		const { classes } = this.props;
		const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
		return (
			<div className={classes.section}>
				<h2 className={classes.title}>Είμαστε οι Αλύτες</h2>
				<h5 className={classes.smallTitle}>
					Γνώρισε την πολυμήχανη ομάδα μας. Τίποτα δε μας σταματά. Διαθέτουμε όλων των ειδών τις δεξιότητες
					και προσαρμοζόμαστε σε κάθε δωμάτιο.
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
										Πίσω από ένα σωστό πλήρωμα, βρίσκεται ένας καλός καπετάνιος. Όταν η τρυκιμία
										ξεσπάσει, είναι εκεί για να χαράξει τη μοναδική ρότα διαφυγής
									</p>
									<GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
										<SpiderGram data={data['alytis1']} />
									</GridItem>
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
									<small className={classes.smallTitle}>Teacher</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Mάστερ στους αναγραμματισμούς και με διδακτορικό στα λουκέτα, η πολυετής
										εμπειρία του άκρως απαραίτητη σε γριφοδωμάτια υψηλών απαιτήσεων
									</p>
									<SpiderGram data={data['alytis2']} />
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
									<small className={classes.smallTitle}>Frontliner</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Η εμπροσθοφυλακή της ομάδας. Όταν ο φόβος και το απόλυτο σκοτάδι σταματούν τα
										βήματά μας, αυτός μπαίνει μπροστά και ηγείται της πρώτης γραμμής του πολέμου
									</p>
									<SpiderGram data={data['alytis3']} />
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
									<img src={team4} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Νικόλας Μπεγέτης
									<br />
									<small className={classes.smallTitle}>Brainiac</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Ο εγκέφαλος της ομάδας. Έτοιμος να αποκωδικοποιήσει τον πιο πολύπλοκο γρίφο.
										Τίποτα δεν μένει άλυτο. Ο κύκλος τετραγωνίζεται
									</p>
									<SpiderGram data={data['alytis4']} />
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
									<img src={team5} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Κώστας Παπαϊωάννου
									<br />
									<small className={classes.smallTitle}>Tactical</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Ο άνθρωπος για τις ειδικές αποστολές. Οταν οι καταστάσεις το απαιτούν, είναι
										έτοιμος να τρέξει, να πηδήξει, να σκαρφαλώσει, να συρθεί και να πάρει και πέντε
										έλξεις. Μότο του: Citius, Altius, Fortius
									</p>
									<SpiderGram data={data['alytis5']} />
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
									<img src={team6} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Γεράσιμος Τσιλιάνης
									<br />
									<small className={classes.smallTitle}>One Arm</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Το παράσημο της ομάδας. Με πλήρη αυταπάρνηση δεν διστάζει να θυσιάσει τον εαυτό
										του προς όφελος της ομάδας. Αποτέλεσμα, ενας εξαρθρωμένος ώμος
									</p>
									<SpiderGram data={data['alytis6']} />
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
									<img src={team7} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Αφροδίτη Παπαλίτσα
									<br />
									<small className={classes.smallTitle}>Red Canary</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Η ανθρώπινη ιαχή της ομάδας. Θάρρος και τόλμη που ηχούν στα αυτιά όλων όσων πάνε
										να τα βάλουν μαζί μας. Είμαστε οι ΑΛΥΤΕΣ! Μας ακούτε; Ερχόμαστε για ν'
										αποδράσουμε!
									</p>
									<SpiderGram data={data['alytis7']} />
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
									<img src={team8} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Μαργαρίτα Χαραλάμπους
									<br />
									<small className={classes.smallTitle}>Seeker</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Για κάθε λύση, χρειάζονται στοιχεία. Όταν όλα δείχνουν μονόδρομος, είναι εκεί να
										αναζητήσει και να ανακαλύψει τα πιο κρυφά μονοπάτια διαφυγής
									</p>
									<SpiderGram data={data['alytis8']} />
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
									<img src={team9} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Αλέξανδρος Παντελίδης
									<br />
									<small className={classes.smallTitle}>Hulk</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										"Ό,τι δε λύνεται, σπάζεται" η brutal πρόταση της ομάδας για δωμάτια τρόμου και
										μη. Ιδανικό δίδυμο μαζί με Frontliner, όταν άγνωστες παρουσίες απειλούν την
										ομάδα
									</p>
									<SpiderGram data={data['alytis9']} />
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
									<img src={team10} alt="..." className={imageClasses} />
								</GridItem>
								<h4 className={classes.cardTitle}>
									Σωτήρης Αλιβιζάτος
									<br />
									<small className={classes.smallTitle}>Artist</small>
								</h4>
								<CardBody>
									<p className={classes.description}>
										Γιατί η σωστή απόδραση αποτελεί τέχνη. Η εναλλακτική πρόταση της ομάδας σε
										θέματα γρίφων. Όταν είναι ν' αποδράσεις, καν' το με στυλ
									</p>
									<SpiderGram data={data['alytis10']} />
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
