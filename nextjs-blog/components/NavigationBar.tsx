import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Logo from "../public/images/tw-logo-filled.png";

export default function NavigationBar() {
	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	const handleLinkClick = (event, sectionId) => {
		event.preventDefault();
		scrollToSection(sectionId);
	};

	return (
		<Stack className={styles.navBar} direction="row">
			<a href="http://www.tarynwou.xyz" className={styles.headerLogoLink}>
				<img
					className={styles.headerLogo}
					src="/images/tw-logo-filled.png"
					alt="logo"
				/>
			</a>
			<Stack className={styles.navBarLinks} direction="row">
				<a
					href="#aboutMe"
					className={styles.navBarLink}
					onClick={(event) => handleLinkClick(event, "aboutMe")}
				>
					About Me
				</a>
				<a
					href="#experience"
					className={styles.navBarLink}
					onClick={(event) => handleLinkClick(event, "experience")}
				>
					Experience
				</a>
				<a
					href="#portfolio"
					className={styles.navBarLink}
					onClick={(event) => handleLinkClick(event, "portfolio")}
				>
					Portfolio
				</a>
				<a
					href="#connect"
					className={styles.navBarLink}
					onClick={(event) => handleLinkClick(event, "connect")}
					id={styles.navBarLinkBox}
				>
					Connect
				</a>
			</Stack>
		</Stack>
	);
}
