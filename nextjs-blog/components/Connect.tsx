import React from "react";
import styles from "../styles/sections.module.css";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
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
			{/* <Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			>
				<Grid item xs={6}>
					<IconButton>
						<EmailRoundedIcon fontSize="inherit" /> Email
					</IconButton>
				</Grid>
				<Grid item xs={6}>
					<IconButton>
						<LinkedInIcon fontSize="inherit" fontFamily="inherit" />
						{"LinkedIn"}
					</IconButton>
				</Grid>
				<Grid item xs={6}>
					<IconButton>
						<GitHubIcon fontSize="inherit" /> GitHub
					</IconButton>
				</Grid>
				<Grid item xs={6}>
					<IconButton>
						<InstagramIcon fontSize="inherit" /> Instagram
					</IconButton>
				</Grid>
			</Grid> */}
		</>
	);
}
