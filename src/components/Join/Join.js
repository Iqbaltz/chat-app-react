import React from 'react';
import useInputState from '../hooks/useInputState';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LockOutlined from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './JoinStyles';

const Join = ({ classes, history }) => {
	const [ name, handleNameChange ] = useInputState('');
	const [ room, handleRoomChange ] = useInputState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		history.push(`/chat?name=${name}&room=${room.toLowerCase()}`);
	};

	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlined />
				</Avatar>
				<Typography variant="h5">Join Room</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="username">Username</InputLabel>
						<Input id="username" onChange={handleNameChange} name="username" autoFocus required />
					</FormControl>
					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="room">Room</InputLabel>
						<Input id="room" onChange={handleRoomChange} name="room" required />
					</FormControl>
					<Button type="submit" variant="contained" fullWidth color="primary" className={classes.joinButton}>
						Join
					</Button>
				</form>
			</Paper>
		</main>
	);
};

export default withStyles(styles)(Join);
