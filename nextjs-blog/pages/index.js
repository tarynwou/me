import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typed from "typed.js";
import AboutMe from "../components/AboutMe.tsx";

function RoleComponent() {
	// Create reference to store the DOM element containing the animation
	const role = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(role.current, {
			strings: ["developer", "product manager", "creator"],
			typeSpeed: 60,
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

			<main>
				<h1 className={styles.title}>I am a</h1>
				<RoleComponent></RoleComponent>
				<img src="/images/tw-logo-filled.png" alt="logo" />
				<AboutMe></AboutMe>
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
