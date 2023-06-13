import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import React from "react";

export default function VolunteerExperience() {
	return (
		<Stack className={styles.volunteerExperience}>
			<ExperienceCard
				imgSrc="/images/copilotai_circle.png"
				experienceOrg="Copilot AI"
				experienceRole="Associate Product Manager Intern"
				experienceLocation="Vancouver, BC"
				experienceStartDate="May 2023"
				experienceEndDate="Present"
				experienceDescription={[
					"Led a product redesign to accommodate a more profitable customer segment by aligning design, engineering, and customer success teams, resulting in improved product performance and UX based on customer feedback.",
					"Analyzed the sales process to identify bottlenecks, leading to actionable recommendations to streamline the sales funnel, resulting in lower customer acquisition costs.",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/castofly.jpeg"
				experienceOrg="Castofly Technologies"
				experienceRole="Web Developer Co-op"
				experienceLocation="Vancouver, BC"
				experienceStartDate="May 2022"
				experienceEndDate="Aug 2022"
				experienceDescription={[
					"Increased stakeholder interest and funding by developing an analytics dashboard using React and Amazon Web Services (AWS) to track key performance indicators",
					"Introduced custom video branding by creating a brand kit feature with React and Redux",
					"Designed and implemented UI/UX for company website with Figma and Webflow after the designer left",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/icbc.svg"
				experienceOrg="ICBC (Insurance Corporation of British Columbia)"
				experienceRole="Full-Stack Software Developer Co-op"
				experienceLocation="North Vancouver, BC"
				experienceStartDate="Jan 2022"
				experienceEndDate="Apr 2022"
				experienceDescription={[
					"Improved insurance claims efficiency by saving 1,208 hours/month of manual work through automating the creation of unfiled Third-Party claims using Blue Prism and a SQL database",
					"Maintained production stability by containing vulnerabilities in production processes through monthly security patching and upgrading Blue Prism to v.6.10.3",
				]}
			></ExperienceCard>
		</Stack>
	);
}