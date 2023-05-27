import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Logo from "../public/images/tw-logo-filled.png";

export default function NavigationBar() {
	return (
		<Stack className={styles.navBar} direction="row">
			<img
				className={styles.headerLogo}
				src="/images/tw-logo-filled.png"
				alt="logo"
			/>
		</Stack>
	);
}
