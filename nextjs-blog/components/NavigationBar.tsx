import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Logo from "../public/images/tw-logo-filled.png";

export default function NavigationBar() {
	return (
		<Stack className={styles.navBar} direction="row">
			<a
				href="http://www.tarynwou.xyz/"
				className={styles.headerLogoLink}
			>
				{" "}
				<img
					className={styles.headerLogo}
					src="/images/tw-logo-filled.png"
					alt="logo"
				/>{" "}
			</a>
			<Stack className={styles.navBarLinks} direction="row">
				<a href="" className={styles.navBarLink}>
					About Me
				</a>
				<a href="" className={styles.navBarLink}>
					Experience
				</a>
				<a href="" className={styles.navBarLink}>
					Portfolio
				</a>
				<a href="" className={styles.navBarLink}>
					Contact
				</a>
			</Stack>
		</Stack>
	);
}
