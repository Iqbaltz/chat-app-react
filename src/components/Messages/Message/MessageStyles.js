const styles = (theme) => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		padding: `0 ${theme.spacing()}px`
	},
	justifyRight: {
		justifyContent: 'flex-end'
	},
	messageBox: {
		maxWidth: '80%',
		padding: `0 ${theme.spacing(2)}px`,
		borderRadius: '15px'
	},
	text: {
		margin: `${theme.spacing()}px 0`,
		'& img': {
			verticalAlign: 'middle'
		}
	},
	blue: {
		backgroundColor: '#2381FF',
		marginLeft: theme.spacing(),
		color: 'white'
	},
	light: {
		backgroundColor: '#EFEFEF',
		marginRight: theme.spacing()
	}
});

export default styles;
