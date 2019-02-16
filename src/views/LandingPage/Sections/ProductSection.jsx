import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

class ProductSection extends React.Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={8}>
						{/* <h2 className={classes.title}>Let's talk product</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5> */}
						<h2 className={classes.title}>Μήπως κλειδώθηκες;</h2>
						<h5 className={classes.description}>
							Πώς έφτασες εδώ; Σε αυτή την ιστοσελίδα; Μήπως είσαι τρελός; Μήπως δραπέτευσες ή θέλεις να
							αποδράσεις; Μήπως δε σε κρατάνε τα δεσμά καμίας φυλακής, ούτε του δρομοκαΐτειου ή της
							πραγματικότητας;
						</h5>
						<h5 className={classes.description}>
							Χμμ..., τότε ήρθες στο σωστό μέρος! Όπως άλλωστε λένε και οι νόμοι της φυσικής για κάθε
							απόδραση υπάρχει δράση. Επικοινώνησε μαζί μας στη φόρμα επικοινωνίας και θα σε βοηθήσουμε να
							τα καταφέρεις. Το ξεκλείδωμα κάθε είδους πόρτας/φυλακής είναι η ειδικοτητά μας.
						</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								// title="Free Chat"
								// description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								title="Γράψε μας την εμπειρία σου"
								description="Γράψε μας μερικές γραμμές για τα δωμάτια που έχεις πάει. Μία παράγραφος που θα περιγράφει τα παραπάνω είναι αρκετή."
								icon={Chat}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								// title="Verified Users"
								// description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								title="Ζήτα τη γνώμη μας"
								description="Μίλα μας για το είδος δωματίου που αναζητάς. Νοιώσε ασφάλεια μαζί μας, γνωρίζοντας ότι τα δωμάτια που θα σου προτείνουμε είναι ακριβώς στις προδιαγραφές που επιθυμείς."
								icon={VerifiedUser}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								// title="Fingerprint"
								// description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
								title="Γίνε συμμέτοχος"
								description="Γίνε μέλος της ομάδας μας δραπετεύοντας έστω και μία φορά μαζί μας. Και αν δεν καταφέρουμε να δραπετεύουμε από το δωμάτιο, σίγουρα θα έχουμε δραπετεύσει από την πραγματικότητα"
								icon={Fingerprint}
								iconColor="danger"
								vertical
							/>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(productStyle)(ProductSection);
