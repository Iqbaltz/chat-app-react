const styles = (theme) => ({
	form: {
		width: '100%',
		display: 'flex',
		borderTop: '1px solid #2381FF'
	},
	input: {
		padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
		borderRadius: 0,
		backgroundColor: 'white'
	},
	sendButton: {
		fontWeight: 'bold',
		padding: `0 ${theme.spacing(4)}px`,
		borderRadius: 0,
		backgroundColor: '#2381FF',
		color: 'white',
		'&:hover': {
			backgroundColor: '#006DFF'
		}
	}
});

export default styles;
