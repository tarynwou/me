import styles from "../styles/sections.module.css";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
	return (
		<>
			<h1 className={styles.sectionHeader} id="portfolio">
				Portfolio
			</h1>

			<div className={styles.projectCardContainer}>
				<ProjectCard
					projectName="Expawdition"
					imgSrc="/images/expawdition.jpeg"
					projectUrl="https://devpost.com/software/expawdition"
					projectDate="May 2023 – Present"
					projectDescription="Placed 1st at StormHacks 2023 by developing a smart itinerary 
				builder using Firebase, Express, Next.js, Node.js
				in addition to the GPT-3.5-turbo API, Google Places API, and Google Routes API"
					projectTechnologies={["React"]}
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
					projectDescription="In light of COVID-19, this free digital yearbook was created in 
					an attempt to capture the Class of 2020's 'Best' memories."
					projectTechnologies={["Affinity Designer"]}
				/>
			</div>
		</>
	);
}
