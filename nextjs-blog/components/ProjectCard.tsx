import styles from "../styles/sections.module.css";
import { Stack, Chip } from "@mui/material";

export default function ProjectCard(props) {
	let list: any = props.projectTechnologies || [];

	return (
		<Stack className={styles.projectCard} direction="row">
			<div className={styles.projectImageContainer}>
				<a
					href={props.projectUrl}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className={styles.projectImage}
						src={props.imgSrc}
						alt={props.projectName}
					/>
				</a>
			</div>

			<Stack>
				<h3 className={styles.projectName}>{props.projectName}</h3>
				<p className={styles.projectDate}>{props.projectDate}</p>
				<Stack
					className={styles.projectTechnologies}
					direction="row"
					spacing={1}
				>
					{list.map((technology) => (
						<div className={styles.projectTechnology}>
							{technology}
						</div>
					))}
				</Stack>

				<p className={styles.projectDescription}>
					{props.projectDescription}
				</p>
			</Stack>
		</Stack>
	);
}
