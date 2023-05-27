import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typed from "typed.js";
import NavigationBar from "../components/NavigationBar";
import AboutMe from "../components/AboutMe.tsx";
import Connect from "../components/Connect.tsx";
import Experience from "../components/Experience.tsx";
import Portfolio from "../components/Portfolio.tsx";
import Stack from "@mui/material/Stack";

function RoleComponent() {
	// Create reference to store the DOM element containing the animation
	const role = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(role.current, {
			strings: ["developer", "product manager", "creator"],
			typeSpeed: 100,
			loop: true,
			loopCount: Infinity,
			backSpeed: 100,
			backDelay: 700,
		});

		return () => {
			// Destroy Typed instance during cleanup to stop animation
			typed.destroy();
		};
	}, []);

	return <span ref={role} />;
}

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Taryn Wou</title>
				<link rel="icon" href="/images/tw-logo-filled.png" />
			</Head>

			<NavigationBar></NavigationBar>
			<main className={styles.mainDiv}>
				<Stack>
					<Stack direction="row">
						<div className={styles.headshotDiv}>
							<img
								className={styles.headshot}
								src="/images/taryn-wou-headshot.png"
								alt="Taryn Wou Headshot"
							/>
						</div>

						<Stack>
							<p id={styles.titlehi}>Hi, my name is</p>
							<h1
								className={styles.titlefont}
								id={styles.titlename}
							>
								Taryn Wou
							</h1>
							<h2
								className={styles.titlefont}
								id={styles.titlerole}
							>
								I am a
							</h2>
							<div
								className={styles.titlefont}
								id={styles.titlerole}
							>
								<RoleComponent></RoleComponent>
							</div>
						</Stack>
					</Stack>

					<AboutMe></AboutMe>
					<Experience></Experience>
					<Portfolio></Portfolio>
					<Connect></Connect>
				</Stack>
			</main>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{" "}
					<img
						src="/vercel.svg"
						alt="Vercel"
						className={styles.logo}
					/>
				</a>
			</footer>
		</div>
	);
}
