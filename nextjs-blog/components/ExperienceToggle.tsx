import * as React from "react";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { styled } from "@mui/system";

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
	backgroundColor: "#FFFFFF",
	border: "#FFFFFF",
	"&.Mui-selected": {
		backgroundColor: "#FFFFFF",
		color: "#2c4dff",
		border: "#FFFFFF",
		"&:hover": {
			backgroundColor: "#FFFFFF",
		},
	},
	"&:not(.Mui-selected)": {
		color: "#000",
		"&:hover": {
			backgroundColor: "#FFFFFF",
			color: "#fd12b3",
		},
	},
}));

export default function ExperienceToggle(props): JSX.Element {
	const { selectedToggle, onToggleChange } = props;

	const handleAlignment = (event, newAlignment) => {
		onToggleChange(newAlignment);
	};

	return (
		<ToggleButtonGroup
			color="primary"
			value={selectedToggle}
			exclusive
			onChange={handleAlignment}
			aria-label="experience type"
		>
			<CustomToggleButton value="work" aria-label="work">
				<WorkRoundedIcon />
				Work
			</CustomToggleButton>
			<CustomToggleButton value="volunteer" aria-label="volunteer">
				<VolunteerActivismRoundedIcon />
				Volunteer
			</CustomToggleButton>
			<CustomToggleButton value="programs" aria-label="programs">
				<EmojiObjectsRoundedIcon />
				Programs
			</CustomToggleButton>
		</ToggleButtonGroup>
	);
}
