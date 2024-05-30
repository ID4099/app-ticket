import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Chip, Stack, Typography } from '@mui/material';
import { blue, blueGrey, orange, purple, red, yellow } from '@mui/material/colors';

/** Import MUI Icons */
import AssignmentIcon from '@mui/icons-material/Assignment';
import KeyboardDoubleArrowUpRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import KeyboardCapslockTwoToneIcon from '@mui/icons-material/KeyboardCapslockTwoTone';
import KeyboardControlKeyTwoToneIcon from '@mui/icons-material/KeyboardControlKeyTwoTone';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: blueGrey[800],
  ":hover":{
    backgroundColor: blueGrey[700]
  },
  cursor: 'pointer',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: blue[50],
  borderRadius: 0
}));
interface BacklogGridPropsInterface{
    task: any;
    handleSelectTask: any;
}
const priorityIconMap = (priority: string) => {
  const ICON_MAP: any = {
    Alta: <Chip icon={<KeyboardDoubleArrowUpRoundedIcon style={{ color: orange[800] }}/>} label={priority[0]} variant='outlined' sx={{ marginLeft: 1, color: orange[800] }} />,
    Media: <Chip icon={<KeyboardCapslockTwoToneIcon style={{ color: orange[400] }}/>} label={priority[0]} variant='outlined' sx={{ marginLeft: 1, color: orange[400] }} />,
    Baja: <Chip icon={<KeyboardControlKeyTwoToneIcon style={{ color: yellow[100] }}/>} label={priority[0]} variant='outlined' sx={{ marginLeft: 1, color: yellow[100] }} />,
  };
  return (ICON_MAP[`${priority}`]);
}

function BacklogGrid({ task, handleSelectTask }: BacklogGridPropsInterface) {
  const taskDate = new Date(task.createdAt).toLocaleDateString("en-US");

  return (
    <Box sx={{ flexGrow: 1, margin: 1 }}>
      <Grid container spacing={0.5} onClick={() => (handleSelectTask(task))}>
        <Grid item xs={18}>
          <Item>
            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={1}>
                    <Stack direction="column">
                        <AssignmentIcon sx={{ marginTop: 0.5, color: purple['A100']}} />
                    </Stack>
                    <Stack direction="column">
                      <Typography marginTop={0.5}>{task.code}</Typography>
                    </Stack>
                    <Stack direction="column" borderRight={2} borderColor={blueGrey[400]}>
                        <Typography sx={{ fontFamily: "Helvetica, Arial, sans-serif", marginTop: 0.5, marginRight: 1 }}>{task.title}</Typography>
                    </Stack>
                    <Stack direction="column">
                        <Typography sx={{marginTop: 0.5, fontFamily: "Helvetica"}}>{task.description}</Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Stack direction="column">
                      <Typography sx={{marginTop: 0.5, fontFamily: "Helvetica"}}>{`${taskDate}`}</Typography>
                  </Stack>
                  <Stack direction="column" borderLeft={2} marginLeft={2} borderColor={blueGrey[400]}>
                    {priorityIconMap(task.priority)}
                  </Stack>
                </Stack>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default BacklogGrid;