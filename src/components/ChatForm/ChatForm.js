import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './ChatFormStyles';
import { Button, TextField } from '@material-ui/core';

function ChatForm({ classes, message, handleMessage, sendMessage }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		sendMessage();
	};
	return (
		<form className={classes.form} onSubmit={handleSubmit}>
			<TextField
				placeholder="Type Message..."
				value={message}
				onChange={handleMessage}
				fullWidth
				className={classes.input}
				autoFocus
			/>
			<Button className={classes.sendButton} variant="contained" type="submit">
				Send
			</Button>
		</form>
	);
}

export default withStyles(styles)(ChatForm);
