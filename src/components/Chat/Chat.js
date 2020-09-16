import React, { useState, useEffect } from 'react';
import useInputState from '../hooks/useInputState';
import queryString from 'query-string';
import io from 'socket.io-client';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import styles from './ChatStyles';
import ChatBar from '../ChatBar/ChatBar';
import ChatForm from '../ChatForm/ChatForm';
import Messages from '../Messages/Messages';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import onlineIcon from '../../icons/onlineIcon.svg';

let socket;

const Chat = ({ location, classes }) => {
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('');
	const [ users, setUsers ] = useState('');
	const [ messages, setMessages ] = useState([]);
	const [ message, handleMessage, resetMessage ] = useInputState('');
	const ENDPOINT = 'https://chat-server-ku.herokuapp.com/';

	useEffect(
		() => {
			const { name, room } = queryString.parse(location.search);

			socket = io(ENDPOINT);

			setName(name);
			setRoom(room);

			socket.emit('join', { name, room }, () => {});

			return () => {
				socket.emit('disconnect');

				socket.off();
			};
		},
		[ ENDPOINT, location.search ]
	);

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages((messages) => [ ...messages, message ]);
		});
		socket.on('roomData', ({ users }) => {
			setUsers(users);
		});
	}, []);

	const sendMessage = () => {
		if (message) {
			socket.emit('sendMessage', message, () => resetMessage());
		}
	};
	return (
		<div className={classes.main}>
			<Paper className={classes.paper}>
				<ChatBar room={room} />
				<Messages messages={messages} name={name} />
				<ChatForm message={message} handleMessage={handleMessage} sendMessage={sendMessage} />
			</Paper>
			<Paper className={classes.userList}>
				<Typography variant="h5">Currently Online:</Typography>
				<List>
					{users &&
						users.map(({ name, id }) => (
							<ListItem key={id} className={classes.listItem}>
								<img src={onlineIcon} alt="online" />
								<ListItemText primary={name} />
							</ListItem>
						))}
				</List>
			</Paper>
		</div>
	);
};

export default withStyles(styles)(Chat);
