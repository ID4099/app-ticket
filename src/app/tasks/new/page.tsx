'use client'
import * as React from "react";
import { Box, Typography, Stack, Grid, Tooltip, Button, Container } from "@mui/material";
import { styled, TextField } from "@mui/material";
import { blueGrey, orange, yellow  } from "@mui/material/colors";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

/** Import MUI Icons */
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import KeyboardCapslockTwoToneIcon from '@mui/icons-material/KeyboardCapslockTwoTone';
import KeyboardControlKeyTwoToneIcon from '@mui/icons-material/KeyboardControlKeyTwoTone';
import Link from "next/link";


const CustomSelect = styled(Select)({
    color: blueGrey[100],
    backgroundColor: blueGrey[800],
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: blueGrey[300],
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'green',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
});

const CustomInputLabel = styled(InputLabel)(({ theme }) => ({
    color: blueGrey[300],
    '&.Mui-focused': {
      color: blueGrey[300],
    },
}));

const CustomDescriptionTextField = styled(TextField)({
    '& .MuiInputBase-input': {
        color: blueGrey[100],
      },    
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: blueGrey[300]
      },
      "&:hover fieldset": {
        borderColor: blueGrey[300]
      },
      "&.Mui-focused fieldset":{
        borderColor: blueGrey[300]
      }
    }
});

const StatusSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 26,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 26,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 24,
      height: 22,
      borderRadius: 16,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
    '&.Mui-selected': {
      backgroundColor: blueGrey[900], // Cambia el color de fondo cuando está seleccionado
      color: blueGrey[600], // Cambia el color del texto cuando está seleccionado
      '&:hover': {
        backgroundColor: blueGrey[900], // Cambia el color de fondo cuando está seleccionado y se pasa el ratón por encima
      },
    },
    '&:not(.Mui-selected)': {
      backgroundColor: blueGrey[800],
    },
  }));

function NewTask(){
    const [ TicketDescription, setTicketDescription ] = React.useState<string>('');
    const [ TicketType, setTicketType ] = React.useState<string>('');
    const [ TicketStatus, setTicketStatus ] = React.useState<boolean>(false);
    const [TicketPriority, setTicketPriority] = React.useState('');


    const handleSelectType = (event: SelectChangeEvent<any>) => {
        setTicketType(event.target.value);
    };

    const handlePriority = (
        event: React.MouseEvent<HTMLElement>,
        newTicketPriority: string | null,
      ) => {
        if (newTicketPriority !== null) {
          setTicketPriority(newTicketPriority);
        }
    };

    const handleSave = () => {
        const ticket = {
            description: TicketDescription,
            type: TicketType,
            status: TicketStatus,
            priority: TicketPriority
        }
        console.log(ticket);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ flexGrow: 1, margin: 1 }}>

                <Stack direction="row" justifyContent={"space-between"}>
                    <Stack direction="column">
                        <Typography variant="h5" marginTop={3} marginBottom={1}>Nuevo Ticket</Typography>
                    </Stack>
                    <Stack direction="column">
                        <Stack marginTop={2.5} />

                        <Grid marginTop={-1.5} item xs={6}>
                            <ToggleButtonGroup
                                value={TicketPriority}
                                exclusive
                                onChange={handlePriority}
                                color='info'
                            >
                                <Tooltip title='Alta' placement="top-start">
                                    <CustomToggleButton size='small' value="Alta" aria-label="left aligned" sx={{ marginTop: 2}}>
                                        <KeyboardDoubleArrowUpRoundedIcon style={{ color: orange[800] }} />
                                    </CustomToggleButton>
                                </Tooltip>

                                <Tooltip title='Media' placement="top-start">
                                    <CustomToggleButton size='small' value="Media" aria-label="centered" sx={{ marginTop: 2}}>
                                        <KeyboardCapslockTwoToneIcon style={{ color: orange[400] }} />
                                    </CustomToggleButton>
                                </Tooltip>

                                <Tooltip title='Baja' placement="top-start">
                                    <CustomToggleButton size='small' value="Baja" aria-label="right aligned" sx={{ marginTop: 2}}>
                                        <KeyboardControlKeyTwoToneIcon style={{ color: yellow[100] }} />
                                    </CustomToggleButton>
                                </Tooltip>
                            </ToggleButtonGroup>
                        </Grid>
                    </Stack>
                </Stack>

                <CustomDescriptionTextField multiline rows={4} id="description" name="description" value={TicketDescription} onChange={(event: React.ChangeEvent<HTMLInputElement>) => (setTicketDescription(event.target.value))} placeholder="Escribe aquí la descripción del ticket..." size="small" InputLabelProps={{ style: { color: blueGrey[500] } }} sx={{ width: '100%', marginTop: 2, input: { color: blueGrey[50] } }} />

                <Box marginTop={5} marginBottom={5}>

                    <Stack direction="row" justifyContent="space-between" padding={2}>
                        <Stack direction="column">
                            <FormControl sx={{ minWidth: 180, marginLeft: 0 }} size="small">
                                <CustomInputLabel id="select-TicketType-label">Tipo </CustomInputLabel>
                                <CustomSelect
                                    color='secondary'
                                    labelId="select-TicketType-label"
                                    id="demo-select-small"
                                    value={TicketType}
                                    label="Type"
                                    onChange={handleSelectType}
                                >
                                    <MenuItem value="">
                                    <em>Vacío</em>
                                    </MenuItem>
                                    <MenuItem value='TECNICO'>Técnico</MenuItem>
                                    <MenuItem value='FUNCIONAL'>Funcional</MenuItem>
                                </CustomSelect>
                            </FormControl>
                        </Stack>

                        <Stack direction="row">
                            <Grid container spacing={-0.5}>
                                <Grid item xs={6}>
                                    <Typography marginTop={1} variant="h6">{TicketStatus ? 'Abierto' : 'Cerrado'}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    <StatusSwitch sx={{ marginTop: 1.5, marginLeft: 4 }} checked={TicketStatus} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setTicketStatus(event.target.checked) }} inputProps={{ 'aria-label': 'Status design' }} />
                                </Grid>
                            </Grid>
                        </Stack>
                    </Stack>
                    <Stack spacing={2} marginTop={4} direction="column">
                        <Link href="/">
                            <Button sx={{ width: '100%'}} variant="contained" type="submit" onClick={handleSave}>Guardar Cambios</Button>
                        </Link>

                        <Link href="/">
                            <Button sx={{ width: '100%'}} variant="contained" color="error" type="submit" >Cancelar</Button>
                        </Link>
                    </Stack>
                </Box>

            </Box>
        </Container>
)

};
export default NewTask;