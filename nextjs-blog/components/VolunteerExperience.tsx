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
							"Delivered inclusive and immersive hackathon experiences by overseeing a 50-member team, facilitating operations, leading hiring efforts, advising funding activities, cultivating strategic partnerships in the UBC community, and participating in UBC Computer Science discussions.",
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
						experienceRole="Marketing Director"
						experienceLocation="Vancouver, BC"
						experienceStartDate="Oct 2023"
						experienceEndDate="Present"
						experienceDescription={[]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="Event Account Manager"
						experienceStartDate="Mar 2023"
						experienceEndDate="Aug 2023"
						experienceDescription={[
							"Managed 13 event accounts to ensure the flow of the conference",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="UX/UI Designer"
						experienceStartDate="Aug 2022"
						experienceEndDate="Mar 2023"
						experienceDescription={[
							"Increased ticket sales by 6% through redesigning the website and ticket-purchasing process, coordinating user experience interviews, and facilitating seamless communication between internal and external stakeholders.",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="Social Media Manager"
						experienceStartDate="Sep 2021"
						experienceEndDate="Aug 2022"
						experienceDescription={[
							"Elevated social media presence by creating 150+ captivating posts, increasing social media impressions by 210%.",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="Volunteer"
						experienceStartDate="Sep 2020"
						experienceEndDate="Present"
						experienceDescription={[
							"Served as a VSW moderator for 6 workshops and seminars facilitated by startups in the Vancouver community",
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
			<Stack className={styles.experienceCard} direction="row">
				<div className={styles.experienceImageContainer}>
					<img
						className={styles.experienceImage}
						src="/images/sec.png"
						alt="UBC Social Enterprise Club"
					/>
				</div>

				<Stack>
					<ExperienceBlurb
						experienceOrg="UBC Social Enterprise Club"
						experienceRole="External Director"
						experienceLocation="Vancouver, BC"
						experienceStartDate="May 2022"
						experienceEndDate="May 2023"
						experienceDescription={[
							"Secured $4000 in grant funding for events by writing grant applications and processing claims",
							"Built and sustained partnerships with local businesses and industry professionals on behalf of the club",
						]}
					></ExperienceBlurb>

					<ExperienceBlurb
						experienceRole="First Year Representative"
						experienceStartDate="Oct 2020"
						experienceEndDate="Jul 2021"
						experienceDescription={[
							"Secured $1,200 for the 2021 SEC Conference by co-writing a Vancity Community grant application",
							"Co-organized the 2021 SEC Conference by sending emails and liaising with industry professionals",
							"Coordinated SEC team merchandise through form creation and discussions with a garment supplier",
							"Created 6 graphics and captions to promote the 2021 SEC Conference through social media",
						]}
					></ExperienceBlurb>
				</Stack>
			</Stack>
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
			<ExperienceCard
				imgSrc="/images/csss.png"
				experienceOrg="UBC Computer Science Student Society"
				experienceRole="External Director"
				experienceLocation="Vancouver, BC"
				experienceStartDate="May 2022"
				experienceEndDate="May 2023"
				experienceDescription={[
					"Organized an annual tech career fair to connect 2000+ attendees with 31 employers",
					"Hosted 2 tech career nights to connect students with job opportunities from local companies",
				]}
			></ExperienceCard>
			<Stack className={styles.experienceCard} direction="row">
				<div className={styles.experienceImageContainer}>
					<img
						className={styles.experienceImage}
						src="/images/yhy.png"
						alt="Youth Helping Youth"
					/>
				</div>

				<Stack>
					<ExperienceBlurb
						experienceOrg="Youth Helping Youth (YHY)"
						experienceRole="Director"
						experienceLocation="Vancouver, BC"
						experienceStartDate="Mar 2019"
						experienceEndDate="Mar 2022"
						experienceDescription={[
							"Ensured the operations of 7 territorial chapters and the headquarters team by overseeing and advising 200+ youth",
							"Facilitated team growth by 1900%+ through reviewing applications, conducting interviews, and onboarding recruits",
							"Reached 23,000+ youth across 5 continents through organizing and hosting events, fundraisers, social media campaigns, external media features, mentorship programs, and opportunity hubs",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="Chief Operating Officer"
						experienceStartDate="May 2020"
						experienceEndDate="Mar 2022"
						experienceDescription={[
							"Served as second-in-command at Youth Helping Youth, contributing 30 hours/week on average",
							"Created and managed a Headquarters Team to ensure the success of our YHY Chapter Operation Teams",
							"Oversaw and advised all YHY Chapter Operation Teams (British Columbia, Ontario, Alberta, Saskatchewan, New Brunswick, Seattle, and San Francisco)",
							"Set overarching impact targets and drove initiatives to achieve them",
							"Developed and documented internal procedures for the organization",
							"Acted as a mediator and resolved all internal conflicts",
						]}
					></ExperienceBlurb>
					<ExperienceBlurb
						experienceRole="Brand Director"
						experienceStartDate="May 2019"
						experienceEndDate="Mar 2021"
						experienceDescription={[
							"Managed the Branding Team (delegated tasks, provided feedback on projects, voiced member concerns and to provide equal treatment)",
							"Organized events and researched opportunities for youth in the Lower Mainland",
							"Developed brand assets for YHY (logo, website, digital graphics, merchandise, brochures, branch playbook, member handbook, signage, business cards, etc.)",
							"Managed LinkedIn and Facebook platforms (external affairs)",
							"Hosted webinars and events",
						]}
					></ExperienceBlurb>
				</Stack>
			</Stack>
			<ExperienceCard
				imgSrc="/images/sauder.jpeg"
				experienceOrg="UBC Sauder School of Business"
				experienceRole="Imagine Day & Spark Orientation Leader"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Sep 2021"
				experienceEndDate="Present"
				experienceDescription={[
					"Spark Orientation Leader (Jun 2023–Present)",
					"Spark Orientation Leader (Jun 2022–Sep 2022)",
					"Spark Orientation Volunteer (Sep 2021)",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/girl-up.jpeg"
				experienceOrg="Girl Up, United Nations Foundation"
				experienceRole="Logistics Coordinator"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Jun 2020"
				experienceEndDate="Sep 2020"
				experienceDescription={[
					"Served as the Logistics Coordinator for the Girl Up British Columbia (BC) Coalition",
					"Assisted BC clubs and campuses in getting set up on the Girl Up Community platform",
					"Collaborated closely with the outreach team to build partnerships and establish new clubs",
					"Collaborated closely with the events team to plan conferences",
					"Managed financial affairs (grants, budgets, sponsors/donors, paper trail)",
					"Managed internal communication channels",
					"Supported the executive team and their individual affairs",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/miniE.png"
				experienceOrg="miniEnterprize"
				experienceRole="Director of Marketing"
				experienceLocation="Vancouver, BC"
				experienceStartDate="May 2019"
				experienceEndDate="Apr 2020"
				experienceDescription={[
					"Secured 150+ participants by copywriting and sending promotional email blasts to schools, organizations, and potential delegates in the Lower Mainland and managed delegate affairs accordingly",
					"Crafted an 8-page miniEnterprize Informational Package to promote the conference",
					"Designed 30+ graphics and associated captions for social media campaigns and managed miniEnterprize's online presence",
					"Attended meetings and contributed ideas for the conference",
					"Facilitated a room of on-going case study presentations",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/geering-up.jpeg"
				experienceOrg="UBC Geering Up Engineering Outreach"
				experienceRole="Junior Instructor"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Jul 2018"
				experienceEndDate="Aug 2019"
				experienceDescription={[
					"Taught weekly lessons regarding science, technology, engineering, arts, and math (STEAM)",
					"Supporting campers one-on-one with different activities",
					"Organized lunch hour activities and prepared materials for the next camp day",
					"Ran errands between the different camps",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/cbss.jpeg"
				experienceOrg="École Dr. Charles Best Secondary School"
				experienceRole="Junior Badminton Coach"
				experienceLocation="Coquitlam, BC"
				experienceStartDate="Apr 2018"
				experienceEndDate="May 2019"
				experienceDescription={[
					"Coached junior teammates and facilitated junior league matches",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/ted.jpeg"
				experienceOrg="TEDxSeymour"
				experienceRole="Volunteer"
				experienceLocation="Vancouver, BC"
				experienceStartDate="Sep 2019"
				experienceEndDate="Sep 2019"
				experienceDescription={[
					"Greeted and registered (signed-in) all event attendees",
					"Set up and took down event and AV equipment",
					"Reassured nervous speakers",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/fona.png"
				experienceOrg="Force of Nature Alliance"
				experienceRole="Canvasser"
				experienceLocation="Coquitlam, BC"
				experienceStartDate="May 2019"
				experienceEndDate="May 2019"
				experienceDescription={[
					"Collected signatures to send to local municipal governments on the topics of electric vehicle stations, UN Sustainable Development Goal alignment, and general climate change awareness",
				]}
			></ExperienceCard>
			<ExperienceCard
				imgSrc="/images/rvp.png"
				experienceOrg="Riverview Park Elementary School"
				experienceRole="Student Library Assistant"
				experienceLocation="Coquitlam, BC"
				experienceStartDate="Oct 2012"
				experienceEndDate="Jun 2013"
				experienceDescription={[
					"Used the Destiny Library system to exchange and return books",
					"Followed the Dewey Decimal System to shelve books in their correct locations",
					"Processed new books (attaching bar codes, label protectors; stamping them with the school stamp)",
				]}
			></ExperienceCard>
		</Stack>
	);
}
