"use client"
import * as React from 'react';
import {
    Button,
    Stack,
    Typography,
    Tooltip,
    Grid
} from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TaskGrid from "@/components/Grids/Task-grid";
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Link from 'next/link';

/** Import MUI Icons */
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';


import TaskDetails from "@/components/Backlog-components/Task-details";
import rows from './mockData.json'

interface TicketInterface {
    id: string
    title: string
    description: string
    type: string
    status: boolean
    priority: string
    createdAt: string
    updatedAt: string
  }


function Tasks(){
    const [ allTasks, setAllTasks ] = React.useState(rows);
    const [ taskSelected, setTaskSelected ] = React.useState(allTasks[0]);

    const [taskTypeState, setTaskTypeState] = React.useState('');

    const [taskTypePriority, setTaskTypePriority] = React.useState('');

    const [checkedtaskCreatedAtAsc, setCheckedTaskCreatedAtAsc] = React.useState(false);

    const rowsCopy = [...rows];
    

    const sortedByDate =(currentRows: TicketInterface[]): TicketInterface[] => currentRows.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

    const restoreAllTasks = (allTasks: TicketInterface[]): TicketInterface[] => [...allTasks];

    const originalAllTasks: TicketInterface[] = [...rows];

    const sortedAllTasks: TicketInterface[] = sortedByDate([...rows]);

    const newOriginalAllTasks: TicketInterface[] = restoreAllTasks(originalAllTasks);

    const filterTaskByType = (taskType: string) => rows.filter( task => task.type === taskType);
    const filterTaskTByPriority = (priority: string) => rows.filter( task => task.priority === priority);
    const filterTaskByStatus = (status: boolean) => rows.filter( task => task.status === status);

    const handleSelectTask = (task: any) => {
        setTaskSelected(task);
    }

    const handleTaskTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTypeState((event.target as HTMLInputElement).value);
        setAllTasks(filterTaskByType((event.target as HTMLInputElement).value));
        setTaskSelected(filterTaskByType((event.target as HTMLInputElement).value)[0]);
        setTaskTypePriority('');
        setCheckedTaskCreatedAtAsc(false);
    };

    const handleTaskPriorityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTypePriority((event.target as HTMLInputElement).value);
        setAllTasks(filterTaskTByPriority((event.target as HTMLInputElement).value));
        setTaskSelected(filterTaskTByPriority((event.target as HTMLInputElement).value)[0])
        setTaskTypeState('');
        setCheckedTaskCreatedAtAsc(false);
    };

    const handleTaskCreatedAtAsc = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedTaskCreatedAtAsc( event.target.checked,);
        setTaskTypePriority('');
        setTaskTypeState('');
        if(event.target.checked) {
            setAllTasks(sortedAllTasks);
            setTaskSelected(sortedAllTasks[0]);
        }
        else {
            setAllTasks(newOriginalAllTasks);
            setTaskSelected(newOriginalAllTasks[0]);
        }
    };

    return (
        <>
        <Grid container spacing={4} columns={16} padding={4}>
            <Grid item xs={6} md={8} marginTop={4}>
                <Stack>
                    <Typography variant="h4" color="White" marginBottom={2}>
                        Backlog
                    </Typography>
                </Stack>

                <Stack direction="row" justifyContent={"space-between"} spacing={4}>

                    <Stack direction={"column"}>
                        <FormControl>
                            <FormLabel id="radio-buttons-group-type">Tipo</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="radio-buttons-group-type"
                                name="radio-buttons-group-type"
                                value={taskTypeState}
                                onChange={handleTaskTypeChange}
                            >
                                <FormControlLabel value="TECNICO" control={<Radio />} label="Técnico" />
                                <FormControlLabel value="FUNCIONAL" control={<Radio />} label="Funcional" />
                            </RadioGroup>
                        </FormControl>
                    </Stack>

                    <Stack direction={"column"}>
                        <FormControl>
                            <FormLabel id="radio-buttons-group-priority">Prioridad</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="radio-buttons-group-priority"
                                name="radio-buttons-group-priority"
                                value={taskTypePriority}
                                onChange={handleTaskPriorityChange}
                            >
                                <FormControlLabel value="Alta" control={<Radio />} label="ALta" />
                                <FormControlLabel value="Media" control={<Radio />} label="Media" />
                                <FormControlLabel value="Baja" control={<Radio />} label="Baja" />
                            </RadioGroup>
                        </FormControl>
                    </Stack>
                    <Stack direction={"column"}>
                        <FormControl component="fieldset" variant="standard">
                        <FormLabel component="legend">Orden por fechas</FormLabel>
                            <FormGroup>
                                <FormControlLabel control={<Switch />} label="Ascendente" name='CreatedAt' checked={checkedtaskCreatedAtAsc} onChange={handleTaskCreatedAtAsc} />
                            </FormGroup>
                        </FormControl>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={11} >
                <Stack direction="row" justifyContent={"space-between"}>
                    <Stack direction="column">
                        <Typography variant="h4" marginTop={2} marginLeft={1} marginBottom={2}>Tickets</Typography>
                    </Stack>
                    <Stack direction="column">
                        <Link href="/tasks/new">
                            <Tooltip title="Agregar tarea">
                                <Button variant="contained" color="success" sx={{ marginTop: 3, marginBottom: 2 }} ><PlaylistAddRoundedIcon/></Button>
                            </Tooltip>
                        </Link>

                    </Stack>
                </Stack>
                {allTasks.length < 1 ? (<Typography marginTop={2} marginLeft={1} marginBottom={2}>No existen tickets que mostrar...</Typography>) : allTasks.map((task) => (<TaskGrid key={task.title} task={task} handleSelectTask={handleSelectTask} />))}
            </Grid>
            <Grid item xs={5} sx={{ height: 800, overflowY: "auto" }}>
                <Stack marginTop={7.5} />
                {allTasks.length < 1 ? (<></>) : <TaskDetails task={taskSelected} />}
                
            </Grid>
        </Grid>
      </>
    )
}
export default Tasks;