import React from "react";
import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Connect() {
	return (
		<>
			<h1 className={styles.sectionHeader} id="connect">
				Let's Connect
			</h1>
			<div className={styles.contactSection}>
				<Stack className={styles.contactRow} direction="row">
					<a
						className={styles.contactButton}
						href="mailto:tarynwou@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<EmailRoundedIcon className={styles.contactIcon} />
						Email
					</a>
					<a
						className={styles.contactButton}
						href="https://www.linkedin.com/in/tarynwou/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedInIcon className={styles.contactIcon} />
						LinkedIn
					</a>
				</Stack>
				<Stack className={styles.contactRow} direction="row">
					<a
						className={styles.contactButton}
						href="https://github.com/tarynwou"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon className={styles.contactIcon} />
						GitHub
					</a>
					<a
						className={styles.contactButton}
						href="https://www.instagram.com/tarynwou/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<InstagramIcon className={styles.contactIcon} />
						Instagram
					</a>
				</Stack>
			</div>
		</>
	);
}
