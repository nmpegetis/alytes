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
						<h2 className={classes.title}>Μήπως κλειδώθηκες;</h2>
						<h5 className={classes.description}>
							Για να μην ψάχνεις κλειδαρά, φώναξε τους αλύτες !! Ανοίγουμε σπίτια, δυάρια, τριάρια,
							τεσσάρια, μονοκατοικίες, διώροφα, τριώροφα, ρετιρέ, αυθαίρετα, στοιχειωμένα και μη. Ο ΕΝΦΙΑ
							δεν μας τρομάζει. Απόμερα μοτέλ, χοτέλ, airbnb, ακατοίκητες βίλες, επαύλεις. Τρυπώνουμε σε
							σκονισμένα πατάρια και σοφίτες, υπόγεια και ημιυπόγεια μπουντρούμια, μοναστήρια, ξωκλήσια,
							αβαεία, ψυχιατρικές κλινικές, σανατόρια, παράνομα ιατρικά εργαστήρια, αμπάρια καταραμένων
							πλοίων, μυστικές κρύπτες, μεσαιωνικά κάστρα και πανάρχαιους αιγυπτιακούς τάφους. Είσαι
							κρατούμενος ;; Ανοίγουμε και φυλακές !!
						</h5>
						<h5 className={classes.description}>
							Επιπλέον, απομακρύνουμε κάθε είδους ενοχλητική παρουσία από τον χώρο σας, όπως φαντάσματα,
							δαίμονες, νεκρές νύφες, κούκλες, καλόγριες, λυκανθρώπους, βαμπίρ που έχουν καταχωνιάσει σε
							κάποια γωνιά του σπιτιού σας. Ανήσυχα πνεύματα που κόβουν βόλτες τα βράδια και δεν σας
							αφήνουν να κοιμηθείτε. Κυνηγάμε ζόμπι, ξαναβαλσαμώνουμε μούμιες, ημερώνουμε τον
							φρανκενστάιν, κλείνουμε ανοιχτούς λογαριασμούς που έχουν αφήσει απέθαντες ψυχές στον δικό
							μας κόσμο, λιβανίζουμε, θυμιατίζουμε και γενικότερα ξορκίζουμε το κακό. Για ό,τι από τα
							παραπάνω μην διστάσετε να μας καλέσετε!
						</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Γράψε μας την εμπειρία σου"
								description="Γράψε μας μερικές γραμμές για τα δωμάτια που έχεις πάει. Μία παράγραφος που θα περιγράφει τα παραπάνω είναι αρκετή."
								icon={Chat}
								iconColor="info"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Ζήτα τη γνώμη μας"
								description="Είσαι νέος και άπειρος στο χώρο; Δεν είναι ταμπού. Με τόσα πολλά δωμάτια και τόσα διαφορετικά είδη, δεν ξέρεις από πού να ξεκινήσεις; Η πρώτη φορά είναι πάντα δύσκολη. Έχεις κάνει ήδη τα πρώτα σου δειλά βήματα αλλά όχι με το καλύτερο δυνατό αποτέλεσμα; Εμείς είμαστε εδώ! Έχοντας μια ομάδα από εξειδικευμένο και καλά καταρτισμένο προσωπικό με εμπειρία πολλών δωματίων στο χώρο, μπορούμε να σου προτείνουμε το κατάλληλο δωμάτιο για εσένα και την παρέα σου, για όλες τις συνθήκες και όλες τις περιστάσεις. Μην διστάσεις να μας ρωτήσεις!"
								icon={VerifiedUser}
								iconColor="success"
								vertical
							/>
						</GridItem>
						<GridItem xs={12} sm={12} md={4}>
							<InfoArea
								title="Γίνε συμμέτοχος"
								description="Είσαι ενας φτωχός και μόνος δραπέτης; Δεν υπάρχει κανείς να καταλαβει την ανάγκη σου για διαφυγή; Η παρέα σου προτιμάει να αράζει με τις ώρες σε καφετέριες, να βγαίνει για ποτό σε μπαράκια και κλαμπ μεχρι τις πρώτες πρωινές ώρες, να πηγαίνει για φαγητό σε κυριλέ και γκουρμέ εστιατόρια ή άλλους τέτοιους βάρβαρους και ξεπερασμένους τρόπους διασκέδασης; Δεν υπάρχει λόγος να αισθάνεσαι πια μόνος! Οι ΑΛΥΤΕΣ, ένα παρεάκι δέκα νεαρών ατόμων, εθισμένων στο χώρο των escape, έχουν ανοιχτές τις πόρτες και ξεκλείδωτα τα λουκέτα για κάθε νέο και φιλόδοξο escaper κάθε ηλικίας. Μην διστάσεις κι έλα να μοιραστείς την τρέλα σου μαζί μας!"
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
