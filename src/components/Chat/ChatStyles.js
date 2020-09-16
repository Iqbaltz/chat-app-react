const styles = (theme) => ({
	main: {
		width: 'auto',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			marginLeft: 'auto',
			marginRight: 'auto',
			flexDirection: 'row'
		}
	},
	paper: {
		width: '100%',
		borderRadius: 0,
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '80vh',
		[theme.breakpoints.up('sm')]: {
			width: 420,
			marginTop: theme.spacing(12),
			height: 520
		}
	},
	userList: {
		borderRadius: 0,
		backgroundColor: 'rgba(35,129,255,0.75)',
		color: 'white',
		padding: theme.spacing(2),
		margin: `${theme.spacing(4)}px 0`,
		[theme.breakpoints.up('sm')]: {
			width: 380,
			marginLeft: theme.spacing(4)
		}
	},
	listItem: {
		padding: 0,
		'& span': {
			fontSize: '1.2em'
		},
		'& img': {
			width: '0.8em',
			marginRight: theme.spacing(2)
		}
	}
});

export default styles;
