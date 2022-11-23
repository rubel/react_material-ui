import React from 'react'
import TextField from '@mui/material/TextField';
import { Alert, Autocomplete, Box, Button, Checkbox, Collapse, FormControlLabel, IconButton, Snackbar, Stack, Switch, TextareaAutosize } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
function BasicMuiForm() {
    const [snackBarOpen, setSnakeBarOpen] = React.useState(false);
    const [alertShown, setAlertShown] = React.useState(false);
    const religionList = [
        { label: 'Islam', value: 100 },
        { label: 'Christanity', value: 0 },
        { label: 'Hinduism', value: -100 },
    ]

    const handleClose = () => {
        setSnakeBarOpen(false);
    };
    const handleSubmit = evt => {
        evt.preventDefault();
        console.log(evt);
    };
    return (
        <div>
            <div className="fullShadow">
                <div className="customerFormBg">
                    <Button onClick={()=>{setSnakeBarOpen(true);}}>show snackbar</Button>
                    <Button onClick={()=>{setAlertShown(true);}}>show alert</Button>

                    <Snackbar
                        open={snackBarOpen}
                        autoHideDuration={3000}
                        onClose={handleClose}
                        message="Message Here"
                    />

                    {/* severity="error"
                    severity="warning"
                    severity="info"
                    severity="success" */}
                    <Collapse in={alertShown}>
                        <Alert onClose={() => {setAlertShown(false)}}>This is a success alert — check it out!</Alert>
                    </Collapse>
                    
                    <Box height={10} />
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth id="name" label="Name" variant="outlined" />
                        <Box height={15} />
                        <TextField fullWidth id="email" label="eMail" variant="outlined" />
                        <Box height={15} />
                        <TextField fullWidth multiline id="address" label="Address" variant="outlined" rows={3} />
                        <FormControlLabel
                            value="top"
                            control={<Checkbox />}
                            label="I love MUI+Formik"
                            labelPlacement="end"
                        />
                        <Box height={15} />
                        <FormControlLabel control={<Switch defaultChecked />} label="Love On" />
                        <Box height={15} />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={religionList}
                            sx={{ width: "100%" }}
                            renderInput={(params) => <TextField {...params} label="Religion" />}
                        />
                        
                        <Box height={30} />
                        
                        <Button type="submit" variant="contained">Submit Form</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BasicMuiForm