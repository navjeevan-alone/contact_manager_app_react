import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AlarmIcon from "@material-ui/icons/Alarm";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const IconButtons = () => {
	return (
		<div>
			inherit
			<IconButton aria-label="delete" size="medium">
				<DeleteIcon fontSize="small" />
			</IconButton>
			small
			<IconButton aria-label="add alarm" size="small">
				<AlarmIcon fontSize="small" />
			</IconButton>
			medium
			<IconButton aria-label="shopping cart" color="primary" size="medium">
				<AddShoppingCartIcon fontSize="medium" />
			</IconButton>
			large
			<IconButton aria-label="photo camera" color="secondary">
				<PhotoCamera fontSize="large" />
			</IconButton>
		</div>
	);
};

export default IconButtons;
