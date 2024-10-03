import * as React from 'react';
import { useState } from 'react';

import createEvent from 'createEvent.css'; 

import TextField from '@mui/material/TextField';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';

import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const createEvent = () => {

    const[data, setData]  = useState([])

    const [id , setId]  = useState(0)
    const [eventName, setEventName] = useState('')
    const [desc , setDesc] = useState('')
    const [date , setDate]  = useState('MM/DD/YYYY')
    const [time , setTime]  = useState('hh:mm aa')
    const [creator,  setCreator]  = useState('')
    const [eventType,setEventType]  =  useState('')

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
      };

      const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
      };

      const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 400px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
        background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
        border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    
        &:hover {
          border-color: ${blue[400]};
        }
    
        &:focus {
          border-color: ${blue[400]};
          box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
        }
    
        // firefox
        &:focus-visible {
          outline: 0;
        }
      `,
      );
  
  const handelClear  =() =>{
    setId(0)
    setEventName('')
    setCreator('')
    setDesc('')
    setDate()
    setTime()
    setEventType('')

  }
  const handelSave  =(e) =>{    
    e.preventDefault();
    const dt = [...data];   
    const newObject = {
        id : id,
        enentName : eventName,
        description : desc,
        date : date,
        time : time,
        creator : creator,
        type : eventType
    }
    dt.push(newObject);
    setData(dt)
    
  }

  return (
    <>
        <FormControl>

    
        <div className='event-form' style={{display:'flex', justifyContent:'center'}}>
            <div>
            <TextField
                sx={{ width: '80px' }}
                required
                id="outlined-required"
                label="ID"
                onChange={(e)=>setId(e.target.value)}
                value={id}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
                sx={{ width: '300px' }}
                required
                id="outlined-required"
                label="Event Name"
                onChange={(e)=>setEventName(e.target.value)}
                value={eventName}
            />
                
                <div>
                <br/>
                <Textarea aria-label="minimum height" minRows={4} placeholder="Event Description" onChange={(e)=>setDesc(e.target.value)} value={desc}/>    
                </div>
                <br/>
                    <TextField
                        sx={{ width: '400px' }}
                        required
                        id="outlined-required"
                        label="Creator Name"
                        onChange={(e)=>setCreator(e.target.value)}
                        value={creator}
                    />

                    <div>
                    <br/>
                    <p style={{textAlign:'left'}}>Event Type</p>
                    <RadioGroup
                            row
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Offline" control={<Radio />} label="Offline" onChange={(e)=>setEventType(e.target.value)}/>
                            <FormControlLabel value="Virtual" control={<Radio />} label="Virtual" onChange={(e)=>setEventType(e.target.value)}/>
                    </RadioGroup>
                    </div>
                   

                <div>
                <br/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <div>
                    <DatePicker label="Pick date" sx={{ width: '190px' }} onChange={(e)=>setDate(e.target.value)}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <TimePicker label="Pick date" sx={{ width: '190px' }} onChange={(e)=>setTime(e.target.value)}/>
                    </div>                 
                </LocalizationProvider>
                </div>
                <br/>
                
            </div>

        </div>  
        <ButtonGroup variant="contained" aria-label="Basic button group">
                    <Button sx={{ width: '200px' }} onClick={()=>handelClear()}>Clear</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button sx={{ width: '200px' }} onClick={(e)=>handelSave(e)}>Save</Button>
        </ButtonGroup>
    </FormControl>
    </>
  )
}

export default createEvent