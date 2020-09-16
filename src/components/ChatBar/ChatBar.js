import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import styles from './ChatBarStyles';
import { Link } from 'react-router-dom';
import onlineIcon from '../../icons/onlineIcon.svg';

function ChatBar({ classes, room }) {
	return (
		<AppBar position="static" className={classes.appBar}>
			<Toolbar>
				<img className={classes.onlineIcon} src={onlineIcon} alt="online" />
				<Typography variant="h6" className={classes.roomName}>
					{room.toUpperCase()}
				</Typography>
				<div className={classes.grow} />
				<Link to="/">
					<IconButton className={classes.closeButton} color="primary" aria-label="close">
						<CloseIcon />
					</IconButton>
				</Link>
			</Toolbar>
		</AppBar>
	);
}

export default withStyles(styles)(ChatBar);
