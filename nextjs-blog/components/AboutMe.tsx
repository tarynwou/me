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
									Associate Product Manager Intern @ CoPilot
									AI
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
									Product Manager & Engineer @ the Council
								</li>
								<li className={styles.aboutListBullets}>
									Self-empowered vlogger @ my friend groups
								</li>
								<li className={styles.aboutListBullets}>
									Intermediate ukulele player @ home
								</li>
								<li className={styles.aboutListBullets}>
									Badminton, ultimate, kickboxing enjoyer @
									outside
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
									Intern as a product manager in the US Summer
									2024
								</li>
								<li className={styles.aboutListBullets}>
									Make education accessible to everyone
								</li>
								<li className={styles.aboutListBullets}>
									Open a scholarship fund
								</li>
							</ul>

							<img
								className={styles.cartoon}
								src="/images/taryn-character-nbg.png"
								alt="Taryn Wou Cartoon"
							/>
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
