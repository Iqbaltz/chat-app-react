import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';
import { withStyles } from '@material-ui/core/styles';
import styles from './MessagesStyles';

function Messages({ messages, name, classes }) {
	return (
		<ScrollToBottom className={classes.root}>
			{messages.map((message, i) => <Message message={message} name={name} key={i} />)}
		</ScrollToBottom>
	);
}

export default withStyles(styles)(Messages);
