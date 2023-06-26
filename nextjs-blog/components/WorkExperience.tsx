import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import ExperienceBlurb from "./ExperienceBlurb";
import React from "react";

export default function WorkExperience() {
	return (
		<Stack className={styles.workExperience}>
			<ExperienceCard
				imgSrc="/images/deloitte.jpeg"
				experienceOrg="Deloitte"
				experienceRole="Incoming Analyst Intern"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Jan 2024"
				experienceEndDate="Apr 2024"
				experienceDescription={[,]}
			></ExperienceCard>
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
					"Impacted the onboarding process by giving feedback to hiring managers",
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

			<Stack className={styles.experienceCard} direction="row">
				<div className={styles.experienceImageContainer}>
					<img
						className={styles.experienceImage}
						src="/images/granted.jpeg"
						alt="Granted Consulting"
					/>
				</div>

				<Stack>
					<ExperienceBlurb
						experienceOrg="Granted Consulting"
						experienceRole="Research Coordinator"
						experienceLocation="Vancouver, BC"
						experienceStartDate="May 2021"
						experienceEndDate="Oct 2021"
						experienceDescription={[
							"Discovered and researched ~$9.7 million worth of grants to add to an internal database for clients",
							"Generated clientele insights on funding eligibility, application processes, and reimbursement activities for 130+ grants",
							"Shortened the research time per grant by 35% through revamping internal processes",
							"Developed 30 pages of training documentation for the Granted Research Department",
							"Liaised with 75+ grant authorities, delivery organizations, and program funders",
							"Developed 18 minutes of grant overview videos, including generating insights, storyboards and scripts",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="Research & Marketing Coordinator"
						experienceStartDate="Jun 2020"
						experienceEndDate="Aug 2020"
						experienceDescription={[
							"Tracked funding updates via Visualping and triggered updates for GetGranted clients",
							"Calculated monthly clientele statistics for the team's internal dashboard",
							"Set up phone calls with grantors and delivery organizations",
							"Wrote 7 blogs, articles, and emails to reach prospective clients",
							"Managed grant data in the Daylite CRM",
						]}
					></ExperienceBlurb>
				</Stack>
			</Stack>
			<ExperienceCard
				imgSrc="/images/ubc-logo.png"
				experienceOrg="University of British Columbia"
				experienceRole="COMM 292 Notetaker"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Jan 2021"
				experienceEndDate="Apr 2021"
				experienceDescription={[
					"Assisted a peer in class by developing and sharing tailored class prep and lecture notes.",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/marketyou.jpeg"
				experienceOrg="MarketYou, LLC"
				experienceRole="Digital Marketing Intern"
				experienceLocation="Las Vegas, Nevada Area"
				experienceStartDate="Sep 2019"
				experienceEndDate="Jul 2020"
				experienceDescription={[
					"Developed and increased brand presence for 19+ clients by designing 60+ graphics for digital advertisements, print, and brand materials",
					"Generated 50,000+ social media impressions by copywriting for client advertisements",
					"Enhanced website search engine optimization (SEO) ratings through copywriting for blogs and securing quality backlinks",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/elections-canada.png"
				experienceOrg="Elections Canada"
				experienceRole="Information Officer"
				experienceLocation="Coquitlam, BC"
				experienceStartDate="Oct 2019"
				experienceEndDate="Oct 2019"
				experienceDescription={[
					"Supported the set-up and closing of the polling place",
					"Directed electors to their polling station or registration desk",
					"Reminded electors to have their Voter Information Card and ID available and answered the elector’s questions",
					"Directed the orderly flow of people in the central polling place",
					"Recognized when an elector needed extra assistance and helped them as necessary, including opening the door for them",
					"Ensured that the polling place closed at the prescribed time and that electors who entered the polling place before the close could exercise their right to vote",
				]}
			></ExperienceCard>
		</Stack>
	);
}
