import React, { useState, useEffect } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />;
});

export default function CoreModal(props) {
	const { modelType, openPopup, setOpenPopup, title, children } = props;
	const [modelTitle, setModelTitle] = useState('');

	useEffect(() => {
		if (!modelType) {
			setModelTitle(title);
		} else {
			let title = getTitle(modelType);
			setModelTitle(title);
		}
	}, [modelType, title]);

	const getTitle = (modelType) => {
		switch (modelType) {
			case 'create':
				return 'Create Sample';
			case 'view':
				return 'View Sample';
			case 'edit':
				return 'Edit Sample';
			default:
				return 'Delete Sample';
		}
	};

	return (
		<div>
			<Dialog
				open={openPopup}
				TransitionComponent={Transition}
				fullWidth={true}
				maxWidth='md'
				aria-describedby='alert-dialog-slide-description'
				sx={{
					'& .MuiDialog-container': {
						justifyContent: 'center',
						alignItems: 'flex-start',
					},
				}}
				PaperProps={{
					sx: {
						m: 0,
						top: 20,
						borderTop: '3px solid blue',
					},
				}}
			>
				<DialogTitle sx={{ paddingTop: 1, paddingBottom: 1, fontSize: '18px' }}>
					{modelTitle}
					<IconButton
						aria-label='close'
						size='small'
						onClick={() => setOpenPopup(false)}
						sx={{
							position: 'absolute',
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
							borderRadius: 1,
						}}
					>
						<CloseIcon />
					</IconButton>
				</DialogTitle>
				<DialogContent dividers>{children}</DialogContent>
				{/* <DialogActions>
					<Button
						size='small'
						color='success'
						variant='contained'
						// onClick={onSectorAdd}
					>
						Add Sector
					</Button>
				</DialogActions> */}
			</Dialog>
		</div>
	);
}
