import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import ExperienceBlurb from "./ExperienceBlurb";
import React from "react";

export default function ProgramsExperience() {
	return (
		<Stack className={styles.programsExperience}>
			<ExperienceCard
				imgSrc="/images/dell-technologies.jpeg"
				experienceOrg="Dell Technologies"
				experienceRole="SOAR Mentee"
				experienceLocation="Ontario, Canada"
				experienceStartDate="Sep 2022"
				experienceEndDate="Dec 2022"
				experienceDescription={[
					"Participated as a mentee in the SOAR program at Dell Technologies, receiving guidance and support from experienced professionals to accelerate personal and professional growth.",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/telus.png"
				experienceOrg="TELUS"
				experienceRole="TELUS Women in STEM Mentee"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Jan 2022"
				experienceEndDate="Apr 2022"
				experienceDescription={[
					"Engaged as a mentee in the Women in STEM program at TELUS, benefiting from mentorship and guidance to empower and advance my career.",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/younga.png"
				experienceOrg="BridgingTheGap Ventures"
				experienceRole="YOUNGA Delegate"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Apr 2021"
				experienceEndDate="Oct 2021"
				experienceDescription={[
					"One of 2000 youth selected to participate and advocate in policy discussions regarding issues affecting global youth",
					"Participated in policy discussions regarding advancing the quality and accessibility of education",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/microsoft.jpeg"
				experienceOrg="Microsoft"
				experienceRole="Technical Resilience Mentee"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Mar 2021"
				experienceEndDate="May 2021"
				experienceDescription={[
					"Actively participated as a mentee in the Technical Resilience program at Microsoft, gaining valuable insights and guidance from industry experts to develop robust technical skills and enhance the ability to navigate and thrive in complex technical environments.",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/ef.jpeg"
				experienceOrg="EF Education First"
				experienceRole="Canadian Youth Ambassador"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Feb 2020"
				experienceEndDate="Present"
				experienceDescription={[
					"Selected as one of thirty (top 3% of applicants) Canadian youth (aged 13-18) to serve as an EF Canadian Youth Ambassador",
					"Set to travel to Panama for a service and cultural exploration trip",
					"Set to meet and receive mentorship from Canadian Senators and Members of Parliament in Ottawa",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/shad.png"
				experienceOrg="ICBC (Insurance Corporation of British Columbia)"
				experienceRole="SHAD Fellow"
				experienceLocation="Toronto, Ontario"
				experienceStartDate="Jun 2019"
				experienceEndDate="July 2019"
				experienceDescription={[
					"Innovated and pitched a sustainable business model to a panel of angel investors through a month-long Design-Engineering project",
					"Was nominated and elected SHAD York Valedictorian by staff and peers and gave a 15-minute speech at the closing banquet to staff, peers, and families on the behalf of the SHAD York participants",
					"Designed the inaugural SHAD York merchandise that was distributed to staff and peers",
					"Attended university-level STEAM and Entrepreneurship-themed lectures and workshops",
					"Volunteered at a local Business Improvement Area (BIA) Association in Kleinburg, Ontario",
					"Participated in skill-building activities including a wilderness expedition, design-thinking challenges, public speaking opportunities, recreational exercises, networking events, and team-building drills",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/yell.jpeg"
				experienceOrg="YELL Canada"
				experienceRole="Entrepreneurial Student & Champion of the YELL 2019 Venture Challenge"
				experienceLocation="Coquitlam, BC"
				experienceStartDate="Oct 2018"
				experienceEndDate="May 2019"
				experienceDescription={[
					"Placed first in the 2019 YELL Venture Challenge against 52 teams across British Columbia",
					"Participated in multiple pitch competitions and speaking engagements",
					"Developed business model on the premise of food waste reduction",
					"Conducted market validation and product/market fit through primary and exploratory research methods",
					"Designed prototypes, marketing plans, and branding materials",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/bright-ideas.png"
				experienceOrg="Enactus SFU"
				experienceRole="Bright Ideas First Place Participant"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Oct 2018"
				experienceEndDate="Dec 2018"
				experienceDescription={[
					"Participated in a 9-week business accelerator by producing and selling lotion bars for sensitive skin",
					"Prototyped seven product iterations (including packaging) and produced 200+ units",
					"Spearheaded all promotional and sales efforts including social media management and vending at markets",
					"Placed first out of an initial 14 groups in the final showcase competition",
					"Received the Certificate of Marketing Award in recognition of accomplishments as Chief Marketing Officer",
					"Generated $1200+ in revenue in one month",
					"Donated ten percent of profits to charity",
				]}
			></ExperienceCard>
		</Stack>
	);
}
