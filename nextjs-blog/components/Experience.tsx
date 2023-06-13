import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import ExperienceToggle from "./ExperienceToggle";
import React, { useState } from "react";
import WorkExperience from "./WorkExperience";
import ProgramsExperience from "./ProgramsExperience";
import VolunteerExperience from "./VolunteerExperience";

export default function Experience() {
	const [selectedToggle, setSelectedToggle] = useState("work");

	const handleToggleChange = (toggle) => {
		setSelectedToggle(toggle);
	};

	return (
		<Stack className={styles.experienceSection}>
			<h1 className={styles.sectionHeader} id="experience">
				Experience
			</h1>
			<div className={styles.experienceToggleWrapper}>
				<ExperienceToggle
					selectedToggle={selectedToggle}
					onToggleChange={handleToggleChange}
				></ExperienceToggle>
			</div>
			{selectedToggle === "work" && <WorkExperience></WorkExperience>}
			{selectedToggle === "volunteer" && (
				<VolunteerExperience></VolunteerExperience>
			)}
			{selectedToggle === "programs" && (
				<ProgramsExperience></ProgramsExperience>
			)}
		</Stack>
	);
}
