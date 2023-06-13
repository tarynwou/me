import styles from "../styles/sections.module.css";
import { Stack, Chip } from "@mui/material";

export default function ExperienceBlurb(props) {
	let list: any = props.experienceDescription || [];

	return (
		<Stack className={styles.experienceBlurb} direction="row">
			<Stack>
				<Stack direction="row">
					<h2 className={styles.experienceRole}>
						{props.experienceRole}
					</h2>
				</Stack>

				{props.experienceOrg && props.experienceLocation && (
					<Stack direction="row">
						<h3 className={styles.experienceOrg}>
							{props.experienceOrg}
						</h3>
						|
						<h3 className={styles.experienceLocation}>
							{props.experienceLocation}
						</h3>
					</Stack>
				)}

				<h3 className={styles.experienceDate}>
					{props.experienceStartDate} – {props.experienceEndDate}
				</h3>

				<div className={styles.experienceDescription}>
					{list.map((item) => (
						<li>{item}</li>
					))}
				</div>
			</Stack>
		</Stack>
	);
}
