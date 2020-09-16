const styles = (theme) => ({
	main: {
		width: 'auto',
		display: 'block',
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up('sm')]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing(20),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
		'& a': {
			textDecoration: 'none'
		}
	},
	avatar: {
		margin: theme.spacing(),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(2)
	},
	joinButton: {
		marginTop: theme.spacing(3),
		backgroundColor: '#2381FF',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#006DFF'
		}
	}
});

export default styles;
