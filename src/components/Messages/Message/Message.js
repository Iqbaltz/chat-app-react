import React, { memo } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './MessageStyles';
import clsx from 'clsx';
import ReactEmoji from 'react-emoji';

function Message({ message: { text, user }, name, classes }) {
	let isSentByCurrentUser = false;

	const trimmedName = name.trim().toLowerCase();

	if (user === trimmedName) {
		isSentByCurrentUser = true;
	}

	return isSentByCurrentUser ? (
		<div className={clsx(classes.wrapper, classes.justifyRight)}>
			<p className={classes.name}>{trimmedName}</p>
			<div className={clsx(classes.messageBox, classes.blue)}>
				<p className={classes.text}>{ReactEmoji.emojify(text)}</p>
			</div>
		</div>
	) : (
		<div className={classes.wrapper}>
			<div className={clsx(classes.messageBox, classes.light)}>
				<p className={classes.text}>{ReactEmoji.emojify(text)}</p>
			</div>
			<p className={classes.name}>{user}</p>
		</div>
	);
}

export default memo(withStyles(styles)(Message));
