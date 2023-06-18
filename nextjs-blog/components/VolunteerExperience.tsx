import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import ExperienceBlurb from "./ExperienceBlurb";
import React from "react";

export default function VolunteerExperience() {
	return (
		<Stack className={styles.volunteerExperience}>
			<Stack className={styles.experienceCard} direction="row">
				<div className={styles.experienceImageContainer}>
					<img
						className={styles.experienceImage}
						src="/images/nwplus.jpeg"
						alt="nwPlus"
					/>
				</div>

				<Stack>
					<ExperienceBlurb
						experienceOrg="nwPlus"
						experienceRole="Co-President"
						experienceLocation="Vancouver, BC"
						experienceStartDate="Mar 2023"
						experienceEndDate="Present"
						experienceDescription={[
							"Oversee 50 members to organize Western Canada's largest hackathons",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="cmd-f Hackathon Director"
						experienceStartDate="Mar 2022"
						experienceEndDate="Mar 2023"
						experienceDescription={[
							"Lead a team of four to organize a mentorship program, workshops, networking opportunities, and a 24-hour hackathon for women and gender-diverse individuals",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="cmd-f Hackathon Coordinator"
						experienceStartDate="Apr 2021"
						experienceEndDate="Mar 2022"
						experienceDescription={[
							"Fostered a positive learning environment for 250+ hackers by organizing cmd-f, British Columbia's largest all-women and gender minority hackathon",
							"Empowered 120+ people of underrepresented genders in tech by developing and hosting events on personal and career growth",
							"Established 25 mentorship pairings by coordinating the connect-f mentorship program for high school women and gender minorities interested in exploring the tech industry",
							"Enhanced the HackCamp and nwHacks experience for 1200+ hackers by securing in-kind sponsors, facilitating closing ceremonies, and coordinating hackathon mentors",
						]}
					></ExperienceBlurb>
				</Stack>
			</Stack>
			<Stack className={styles.experienceCard} direction="row">
				<div className={styles.experienceImageContainer}>
					<img
						className={styles.experienceImage}
						src="/images/vsw.jpeg"
						alt="Vancouver Startup Week"
					/>
				</div>

				<Stack>
					<ExperienceBlurb
						experienceOrg="Vancouver Startup Week"
						experienceRole="Event Account Manager"
						experienceLocation="Vancouver, BC"
						experienceStartDate="Mar 2023"
						experienceEndDate="Present"
						experienceDescription={[
							"Managed 13 event accounts to ensure the flow of the conference",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="UX/UI Designer"
						experienceStartDate="Aug 2022"
						experienceEndDate="Mar 2023"
						experienceDescription={[
							"Lead a team of four to organize a mentorship program, workshops, networking opportunities, and a 24-hour hackathon for women and gender-diverse individuals",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="Social Media Manager"
						experienceStartDate="Aug 2022"
						experienceEndDate="Sep 2021"
						experienceDescription={[
							"Lead a team of four to organize a mentorship program, workshops, networking opportunities, and a 24-hour hackathon for women and gender-diverse individuals",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="Volunteer"
						experienceStartDate="Sep 2020"
						experienceEndDate="Present"
						experienceDescription={[
							"Fostered a positive learning environment for 250+ hackers by organizing cmd-f, British Columbia's largest all-women and gender minority hackathon",
							"Empowered 120+ people of underrepresented genders in tech by developing and hosting events on personal and career growth",
							"Established 25 mentorship pairings by coordinating the connect-f mentorship program for high school women and gender minorities interested in exploring the tech industry",
							"Enhanced the HackCamp and nwHacks experience for 1200+ hackers by securing in-kind sponsors, facilitating closing ceremonies, and coordinating hackathon mentors",
						]}
					></ExperienceBlurb>
				</Stack>
			</Stack>
			<ExperienceCard
				imgSrc="/images/yell.jpeg"
				experienceOrg="YELL Canada"
				experienceRole="YELL Ambassador"
				experienceLocation="Vancouver, BC"
				experienceStartDate="May 2019"
				experienceEndDate="Present"
				experienceDescription={[
					"Represent YELL at conferences and events",
					"Help maintain the YELL website",
					"Speak on alumni panels to current YELL students",
					"Moderate professional panels at YELL events",
					"Contribute ideas to improve the YELL Program",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/cus.png"
				experienceOrg="Commerce Undergraduate Society (CUS) of UBC Vancouver"
				experienceRole="BUCS Community Director"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Apr 2021"
				experienceEndDate="May 2023"
				experienceDescription={[
					"Organized 11 BUCS events for 40-100 students per event by planning and hosting activities",
					"Coordinated BUCS 2021/2022 merchandise by creating order forms, facilitating design entries, liaising with the supplier, and distributing garments",
					"Created and engaged the official BUCS community platform on Discord",
				]}
			></ExperienceCard>
		</Stack>
	);
}
