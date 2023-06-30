import styles from "../styles/sections.module.css";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
	return (
		<>
			<h1 className={styles.sectionHeader} id="portfolio">
				Portfolio
			</h1>

			<ProjectCard
				projectName="Expawdition"
				imgSrc="/images/expawdition.jpeg"
				projectUrl="https://devpost.com/software/expawdition"
				projectDate="May 2023 – Present"
				projectDescription="Placed 1st at StormHacks 2023 by developing a smart itinerary builder using Next.js, Firebase, Express, React, Node.js
				in addition to the GPT-3.5-turbo API, Google Places API, and Google Routes API"
				projectTechnologies={[
					"Next.js",
					"Firebase",
					"Express.js",
					"Node.js",
				]}
			/>
		</>
	);
}
