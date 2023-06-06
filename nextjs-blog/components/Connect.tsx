import React from "react";
import styles from "../styles/sections.module.css";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { makeStyles, Theme } from "@mui/material/styles";

// const useStyles = makeStyles((theme: Theme) => ({
// 	buttonLabel: {
// 	  marginLeft: theme.spacing(1), // Adjust the spacing as needed
// 	},
//   }));

export default function Connect() {
	// const classes = useStyles();

	return (
		<>
			<h1 className={styles.sectionHeader}>Let's Connect</h1>
			<div className={styles.contactSection}>
				<Stack className={styles.contactRow} direction="row">
					<Button
						className={styles.contactButton}
						variant="outlined"
						startIcon={<EmailRoundedIcon />}
						href="mailto:tarynwou@gmail.com"
						target="_blank"
					>
						Email
					</Button>

					<Button
						className={styles.contactButton}
						variant="outlined"
						startIcon={<LinkedInIcon />}
						href="https://www.linkedin.com/in/tarynwou/"
						target="_blank"
					>
						LinkedIn
					</Button>
				</Stack>
				<Stack className={styles.contactRow} direction="row">
					<Button
						className={styles.contactButton}
						variant="outlined"
						startIcon={<GitHubIcon />}
						href="https://github.com/tarynwou"
						target="_blank"
					>
						GitHub
					</Button>

					<Button
						className={styles.contactButton}
						variant="outlined"
						startIcon={<InstagramIcon />}
						href="https://www.instagram.com/tarynwou/"
						target="_blank"
					>
						Instagram
					</Button>
				</Stack>
			</div>
		</>
	);
}
