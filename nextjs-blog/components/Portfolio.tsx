import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
	return (
		<>
			<h1 className={styles.sectionHeader} id="portfolio">
				Portfolio
			</h1>

			<div className={styles.projectCardContainer}>
				<ProjectCard
					projectName="The Council"
					imgSrc="/images/the-council.png"
					projectUrl="https://thecouncil.vercel.app/"
					projectDate="Sep 2023 – Present"
					projectDescription="Selected as 1 of 12 finalist teams out of 250 projects at Hack the North 2023 by developing an AI-powered advice platform using Three.js, react-three-fiber, and the GPT-3.5-turbo API."
					projectTechnologies={["JavaScript", "Three.js"]}
				/>
				<ProjectCard
					projectName="Expawdition"
					imgSrc="/images/expawdition.jpeg"
					projectUrl="https://devpost.com/software/expawdition"
					projectDate="May 2023 – Present"
					projectDescription="Placed 1st at StormHacks 2023 by developing a smart itinerary 
				builder using Firebase, Express, Next.js, Node.js
				in addition to the GPT-3.5-turbo API, Google Places API, and Google Routes API."
					projectTechnologies={["React"]}
				/>

				<ProjectCard
					projectName="The Vlogs"
					imgSrc="/images/vlogs.jpg"
					projectUrl="https://youtube.com/playlist?list=PLqZxkjzf5A3VFW0YFMRjEV0aXjIlsH-1r&si=-8scK0UaCPLcADN7"
					projectDate="Sep 2022 – Present"
					projectDescription="These highlight reels are meant to capture my adventures with friends."
					projectTechnologies={["Final Cut Pro"]}
				/>

				<ProjectCard
					projectName="Take Knote"
					imgSrc="/images/take-knote.jpeg"
					projectUrl="https://devpost.com/software/take-knote"
					projectDate="Sep 2022"
					projectDescription="Developed the front-end for a shared digital scrapbook using React Native at Hack the North 2022 while combatting sleep-deprivation and food poisoning."
					projectTechnologies={["React Native", "Expo Go"]}
				/>

				<ProjectCard
					projectName="CBSS 2020 Senior Yearbook"
					imgSrc="/images/cbss-yearbook.png"
					projectUrl="https://drive.google.com/file/d/1NoC3PIEn6J_FA206PSI2UfJgesn0F67z/view?usp=sharing"
					projectDate="Mar 2020 – Aug 2020"
					projectDescription="In light of COVID-19, this free 111-page digital yearbook was created in 
					an attempt to capture the Class of 2020's 'Best' memories."
					projectTechnologies={["Affinity Designer"]}
				/>
			</div>
			<a
				className={`${styles.nextSectionLink} ${styles.nextSectionLinkPortfolio}`}
				href="#connect"
			>
				<Stack className={styles.nextSection}>
					<p className={styles.nextSectionText}>connect with me</p>
					<img
						className={styles.downArrow}
						src="/images/down-arrow.png"
					></img>
				</Stack>
			</a>
		</>
	);
}
