import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import ExperienceToggle from "./ExperienceToggle";

export default function Experience() {
	return (
		<Stack>
			<h1 className={styles.sectionHeader}>Experience</h1>
			<ExperienceToggle></ExperienceToggle>
		</Stack>
	);
}
