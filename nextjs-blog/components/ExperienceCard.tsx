import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";

export default function ExperienceCard(props) {
	let list: any = props.experienceDescription;

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
				<h2 className={styles.experienceRole}>
					{props.experienceRole}
				</h2>
				<Stack direction="row">
					<h3 className={styles.experienceOrg}>
						{props.experienceOrg}
					</h3>
					|
					<h3 className={styles.experienceLocation}>
						{props.experienceLocation}
					</h3>
				</Stack>

				<h3 className={styles.experienceDate}>
					{props.experienceStartDate} – {props.experienceEndDate}
				</h3>

				<p className={styles.experienceDescription}>
					{list.map((item) => (
						<li>{item}</li>
					))}
				</p>
			</Stack>
		</Stack>
	);
}
