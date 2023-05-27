import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import ExperienceToggle from "./ExperienceToggle";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
	return (
		<Stack className={styles.experienceSection}>
			<h1 className={styles.sectionHeader}>Experience</h1>
			<div className={styles.experienceToggleWrapper}>
				<ExperienceToggle></ExperienceToggle>
			</div>
			<ExperienceCard
				imgSrc="/images/taryn-wou-headshot.png"
				experienceOrg="Copilot AI"
				experienceRole="Associate Product Manager Intern"
				experienceLocation="Vancouver, BC"
				experienceStartDate="May 2023"
				experienceEndDate="Present"
				experienceDescription="Co-own cross functional team OKRs with the support of design, engineering and marketing counter parts, Research & conduct extensive customer interviews and data analysis to get better understanding of company customer base, Co-own the acceptance criteria with the Product Manager, Product Designer and Engineering counterparts to ensure quality, Create solid user stories that will enable successful engineering delivery"
			></ExperienceCard>
		</Stack>
	);
}
