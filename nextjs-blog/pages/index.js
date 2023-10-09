import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero.tsx";
import AboutMe from "../components/AboutMe.tsx";
import Connect from "../components/Connect.tsx";
import Experience from "../components/Experience.tsx";
import Portfolio from "../components/Portfolio.tsx";
import Stack from "@mui/material/Stack";

export default function Home() {
	return (
		<div className={styles.container} id="top">
			<Head>
				<title>Taryn Wou</title>
				<link rel="icon" href="/images/tw-logo-filled.png" />
			</Head>

			<NavigationBar></NavigationBar>
			<main className={styles.mainDiv}>
				<Stack className={styles.titleSection}>
					<Hero></Hero>
					<AboutMe></AboutMe>
					<Experience></Experience>
					<Portfolio></Portfolio>
					<Connect></Connect>
				</Stack>
			</main>

			<footer className={styles.footer}>
				<p>made with &lt;3</p>
			</footer>
		</div>
	);
}
