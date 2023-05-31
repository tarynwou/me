import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";

export default function AboutMe() {
	return (
		<>
			<h1 className={styles.sectionHeader}>About Me</h1>
			<Stack direction="row">
				<Stack className={styles.aboutTextContainer}>
					<p className={styles.aboutPara}>
						Hi there! My name is Taryn, and as a lifelong learner, I
						have always tried to put myself in situations that allow
						me to meet new people and grow as an individual.
						Currently, I am interested in pursuing front-end
						development and UI/UX. Though, I am an explorer of many
						interests, including social entrepreneurship, marketing,
						digital media, psychology, and education.
					</p>
					<p className={styles.aboutPara}>
						Service is a large part of my everyday being, and I hope
						to drive value back into the communities that have
						touched my life. I would like to think all of the
						activities I partake in, be it work or
						extracurricular-related, have a positive impact on the
						community in one way or another. At my core, I am
						extremely passionate about making education and personal
						development opportunities more accessible, especially to
						underserved demographics.
					</p>
					<p className={styles.aboutPara}>
						In my spare time, you may find me touring food spots
						with friends, listening to a random podcast, or playing
						the ukulele. I am an extroverted introvert who draws
						energy from constantly being around others but also
						stays up late to be alone with their thoughts. All in
						all, I am curious about new experiences and welcome
						anyone who wants to chat!
					</p>
				</Stack>
				<img
					className={styles.cartoon}
					src="/images/taryn-character.png"
					alt="Taryn Wou Cartoon"
				/>
			</Stack>
		</>
	);
}
