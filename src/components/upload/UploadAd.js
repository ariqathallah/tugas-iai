import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useState } from 'react';
import axios from 'axios';
import './UploadAd.css';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

// -------------------------------------------------------------------

const UploadAd = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [url, setUrl] = useState('');
  const [desc, setDesc] = useState('');
  const [exp, setExp] = useState(0);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);

    axios
      .post(
        'https://adweb-api.herokuapp.com/upload/twitter',
        {
          url: url,
          description: desc,
          expire: exp,
        },
        {
          headers: {
            'adweb-token': localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button type='button' onClick={handleOpen} className='publish-button'>
        Publish New Ads
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className='upload-container'>
              <form onSubmit={handleSubmit} className='upload-form'>
                <div>
                  <label htmlFor=''>Url: </label>
                  <input
                    type='text'
                    required
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor=''>Description: </label>
                  <textarea
                    type='text'
                    required
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor=''>Expire: </label>
                  <input
                    type='text'
                    required
                    onChange={(e) => setExp(e.target.value)}
                  />
                </div>

                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default UploadAd;
