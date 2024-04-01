import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";

export default function AboutMe() {
	return (
		<>
			<h1
				className={`${styles.sectionHeader} ${styles.aboutMeHeader}`}
				id="aboutMe"
			>
				About Me
			</h1>
			<Stack direction="column" className={styles.aboutSectionContent}>
				<Stack className={styles.aboutTextContainer}>
					<p className={styles.aboutPara}>
						Our lives are changing all the time, so here’s a summary
						of mine.
					</p>

					<Stack direction="row">
						<Stack
							direction="column"
							className={styles.aboutGridColumn1}
						>
							<p className={styles.aboutListTitle}>
								Current Identities
							</p>

							<ul className={styles.aboutList}>
								<li className={styles.aboutListBullets}>
									Business and Computer Science Student @ UBC
								</li>
								<li className={styles.aboutListBullets}>
									Analyst & Project Management Intern @
									Deloitte
								</li>
								<li className={styles.aboutListBullets}>
									Co-President & Hackathon Organizer @ nwPlus
								</li>
								<li className={styles.aboutListBullets}>
									Marketing Director @ Vancouver Startup Week
								</li>
							</ul>

							<p className={styles.aboutListTitle}>Side Quests</p>

							<ul className={styles.aboutList}>
								<li className={styles.aboutListBullets}>
									Hacker @ various hackathons
								</li>
								<li className={styles.aboutListBullets}>
									Self-empowered vlogger @ my friend groups
								</li>
								<li className={styles.aboutListBullets}>
									Intermediate ukulele player @ home
								</li>
								<li className={styles.aboutListBullets}>
									Badminton, pickleball, ultimate, kickboxing
									enjoyer
								</li>
								<li className={styles.aboutListBullets}>
									Avid volunteer @ various student
									organizations
								</li>
							</ul>
						</Stack>
						<Stack
							direction="column"
							className={styles.aboutGridColumn2}
						>
							<p className={styles.aboutListTitle}>Dreams</p>

							<ul className={styles.aboutList}>
								<li className={styles.aboutListBullets}>
									Become fluent in ASL & Korean
								</li>
								<li className={styles.aboutListBullets}>
									Make education accessible to everyone
								</li>
								<li className={styles.aboutListBullets}>
									Open a scholarship fund
								</li>
								<li className={styles.aboutListBullets}>
									Have time to play Pikmin 4
								</li>
							</ul>

							<p className={styles.aboutListTitle}>Past Lives</p>

							<ul className={styles.aboutList}>
								<li className={styles.aboutListBullets}>
									Led registered nonprofit serving 23k youth
									for 3 years
								</li>
								<li className={styles.aboutListBullets}>
									Pitched a waste reduction product to Consuls
									General
								</li>
								<li className={styles.aboutListBullets}>
									Served as the Shad York 2019 Validictorian
								</li>
								<li className={styles.aboutListBullets}>
									Organized grade 5 math camps for 4 years
								</li>
								<li className={styles.aboutListBullets}>
									Binged 24 marvel movies for 5 days straight
								</li>
							</ul>

							{/* <img
								className={styles.cartoon}
								src="/images/taryn-character-nbg.png"
								alt="Taryn Wou Cartoon"
							/> */}
						</Stack>
					</Stack>
				</Stack>
			</Stack>
			<a
				className={`${styles.nextSectionLink} ${styles.nextSectionLinkAboutMe}`}
				href="#experience"
			>
				<Stack className={styles.nextSection}>
					<p className={styles.nextSectionText}>
						my adventures so far
					</p>
					<img
						className={styles.downArrow}
						src="/images/down-arrow.png"
					></img>
				</Stack>
			</a>
		</>
	);
}
