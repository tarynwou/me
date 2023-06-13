import styles from "../styles/sections.module.css";
import { Stack, Chip } from "@mui/material";
import ExperienceBlurb from "./ExperienceBlurb";

export default function ExperienceCard(props) {
	return (
		<Stack className={styles.experienceCard} direction="row">
			<div className={styles.experienceImageContainer}>
				<img
					className={styles.experienceImage}
					src={props.imgSrc}
					alt={props.experienceOrg}
				/>
			</div>

			<Stack>
				<ExperienceBlurb
					experienceOrg={props.experienceOrg}
					experienceRole={props.experienceRole}
					experienceLocation={props.experienceLocation}
					experienceStartDate={props.experienceStartDate}
					experienceEndDate={props.experienceEndDate}
					experienceDescription={props.experienceDescription}
				></ExperienceBlurb>
			</Stack>
		</Stack>
	);
}
