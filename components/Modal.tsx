/* eslint-disable @typescript-eslint/no-explicit-any */
import { setModal } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Modal = (props: any) => {
  const {children, title, fullWidth, maxWidth, contentClassName, hideCloseButton} = props;
  const dispatch = useDispatch();
  const modal = useSelector((state: RootState) => state.utilitySlice.modal);

  const handleClose = () => {
    dispatch(setModal({
      open: false,
      type: ''
    }));
  };

  return (
    <Dialog
      open={modal.open}
      onClose={handleClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle className='flex justify-between items-center'>
        <Typography className='text-xl underline'>{title}</Typography>
        {!hideCloseButton &&
        <IconButton onClick={handleClose}>
          <CloseRoundedIcon className='text-rose-600 cursor-pointer' />
        </IconButton>
        }
      </DialogTitle>
      <DialogContent className={contentClassName}>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;