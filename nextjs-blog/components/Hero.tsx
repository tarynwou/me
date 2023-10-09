import React from "react";
import Stack from "@mui/material/Stack";
import Typed from "typed.js";
import styles from "../styles/sections.module.css";

function RoleComponent() {
	// Create reference to store the DOM element containing the animation
	const role = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(role.current, {
			strings: ["product manager.", "developer.", "storyteller."],
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

export default function Hero() {
	return (
		<>
			<Stack className={styles.heroDiv} id="hero">
				<Stack direction="row">
					<div className={styles.headshotDiv}>
						<img
							className={styles.headshot}
							src="/images/taryn-wou-headshot.png"
							alt="Taryn Wou Headshot"
						/>
					</div>

					<Stack className={styles.titleTextDiv}>
						<p id={styles.titlehi}>Hi, my name is</p>
						<h1 className={styles.titlefont} id={styles.titlename}>
							Taryn Wou.
						</h1>
						<div className={styles.rolediv}>
							<h2
								className={styles.titlefont}
								id={styles.titlerole}
							>
								I am a
							</h2>
							<div
								className={styles.titlefont}
								id={styles.titleroletyped}
							>
								<RoleComponent></RoleComponent>
							</div>
						</div>

						<div className={styles.titleMiniBioDiv}>
							<p>
								As a business and computer science (BUCS)
								student at the University of British Columbia, I
								am actively looking for opportunities to develop
								my product sense and drive value back into the
								community.
							</p>
						</div>
					</Stack>
				</Stack>
				<a className={styles.nextSectionLink} href="#aboutMe">
					<Stack className={styles.nextSection}>
						<p className={styles.nextSectionText}>more about me</p>
						<img
							className={styles.downArrow}
							src="/images/down-arrow.png"
						></img>
					</Stack>
				</a>
			</Stack>
		</>
	);
}
