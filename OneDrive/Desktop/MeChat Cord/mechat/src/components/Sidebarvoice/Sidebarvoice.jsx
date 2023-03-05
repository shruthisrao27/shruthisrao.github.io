import React from 'react'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import CallEndIcon from '@mui/icons-material/CallEnd';
import {IconButton,makeStyles, Button} from '@mui/material'
import './Sidebarvoice.scss'
const useStyles=makeStyles(()=>{
    return{
        signal:{
            color:"#43b380"
        },
        end:{
            color:'#babbbf'
        },
        button:{
            fontSize:'14px',
            color:'#fff',
            backgroundColor:'#363940',
            padding:'5px 1.9rem',
            textTransform:'none'
        }
    }
})
function Sidebarvoice() {
    const classes=useStyles();
    return (
        <div className='sidebarvoice'>
            <div className="sidebarvoice__header">
                <div className="sidebarvoice__connect">
                    <div className="sidebarvoice__connect-icon">
                        <IconButton className={classes.signal} aria-label="settings">
                            <SignalCellularAltIcon fontSize='large'/>
                        </IconButton>
                        </div>
                    <div className="sidebarvoice__connect-connected">Voice Connected</div>
                </div>
                <div className="sidebarvoice__disconnect">
                    <IconButton className={classes.end} aria-label="settings">
                        <CallEndIcon fontSize='large'/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebarvoice__stream">
                <div className="sidebarvoice__stream-video">
                    <Button variant="text" className={classes.button} startIcon={ <VideocamIcon/>}> Video </Button>
                </div>
                <div className="sidebarvoice__stream-screen">
                    <Button variant="text" className={classes.button} startIcon={ <ScreenShareIcon/>}> Screen </Button>
                </div>
            </div>
        </div>
    )
}
export default Sidebarvoice
