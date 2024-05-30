// import React, { useState } from 'react';
// import {
//   Typography,
//   Toolbar,
//   IconButton,
//   Tooltip,
//   Stack,
//   Box,
//   TextField,
//   styled,
// } from '@mui/material';
// import { blue, blueGrey, purple } from '@mui/material/colors';
// import 'draft-js/dist/Draft.css';
// import { Editor, EditorState, RichUtils, ContentState } from 'draft-js';

// /** Import MUI Icons */
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
// import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';


// const NoteBox: React.FC = () => {
//   const [editorState, setEditorState] = useState(() =>
//     EditorState.createWithContent(ContentState.createFromText('texto'))
//   );


//   const handleBoldClick = () => {
//     setEditorState((prevState) => RichUtils.toggleInlineStyle(prevState, 'BOLD'));
//   };

//   const handleItalicClick = () => {
//     setEditorState((prevState) => RichUtils.toggleInlineStyle(prevState, 'ITALIC'));
//   };

//   const handleUnderlineClick = () => {
//     setEditorState((prevState) => RichUtils.toggleInlineStyle(prevState, 'UNDERLINE'));
//   };

//   const handleBulletListClick = () => {
//     setEditorState((prevState) => RichUtils.toggleBlockType(prevState, 'unordered-list-item'));
//   };

//   return (
//     <Box sx={{ marginTop: 6 }}>
//       <Stack direction="row" justifyContent="space-between">
//         <Stack direction="column">
//           <Typography sx={{ marginTop: 2, fontFamily: "Helvetica" }}> <NoteAltRoundedIcon fontSize='medium' sx={{ color: purple[200], marginBottom: -0.5, marginLeft: 2, marginRight: 1 }}/>Nota</Typography>
//         </Stack>
//         <Stack direction="column">
//         <Toolbar>

//           <Tooltip title="Negrita">
//             <IconButton onClick={handleBoldClick}>
//               <FormatBoldIcon sx={{color: blueGrey[400]}}/>
//             </IconButton>
//           </Tooltip>
          
//           <Tooltip title="Cursiva">
//             <IconButton onClick={handleItalicClick}>
//               <FormatItalicIcon sx={{color: blueGrey[100]}}/>
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Subrayado">
//             <IconButton onClick={handleUnderlineClick}>
//               <FormatUnderlinedIcon sx={{color: blueGrey[400]}}/>
//             </IconButton>
//           </Tooltip>

//           <Tooltip title="Viñetas">
//             <IconButton onClick={handleBulletListClick}>
//               <FormatListBulletedRoundedIcon sx={{color: blue[100]}}/>
//             </IconButton>
//           </Tooltip>

//         </Toolbar>
//         </Stack>
//       </Stack>
//       <div>
//       <Editor
//         editorState={editorState}
//         onChange={setEditorState}
//       />
//       </div>
//     </Box>
//   );
// };

// export default NoteBox;
import React, { useState } from 'react';
import { Button, Toolbar, IconButton, Tooltip } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {
  Editor,
  EditorState,
  RichUtils,
  ContentState,
  convertToRaw,
  convertFromRaw,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

const NoteBox: React.FC = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText('Tu texto inicial aquí'))
  );

  const handleBoldClick = () => {
    setEditorState((prevState) =>
      RichUtils.toggleInlineStyle(prevState, 'BOLD')
    );
  };

  const handleItalicClick = () => {
    setEditorState((prevState) =>
      RichUtils.toggleInlineStyle(prevState, 'ITALIC')
    );
  };

  const handleUnderlineClick = () => {
    setEditorState((prevState) =>
      RichUtils.toggleInlineStyle(prevState, 'UNDERLINE')
    );
  };

  const handleBulletListClick = () => {
    setEditorState((prevState) =>
      RichUtils.toggleBlockType(prevState, 'unordered-list-item')
    );
  };


  return (
    <div>
      <Toolbar>
        <Tooltip title="Negrita">
          <IconButton onClick={handleBoldClick}>
            <FormatBoldIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Cursiva">
          <IconButton onClick={handleItalicClick}>
            <FormatItalicIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Subrayado">
          <IconButton onClick={handleUnderlineClick}>
            <FormatUnderlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Viñetas">
          <IconButton onClick={handleBulletListClick}>
            <FormatListBulletedIcon />
          </IconButton>
        </Tooltip>

      </Toolbar>

      <Editor
        editorState={editorState}
        onChange={setEditorState}
      />

      <div>
        <strong>Texto seleccionado:</strong>{' '}
        {editorState.getCurrentContent().getPlainText()}
      </div>
    </div>
  );
};

export default NoteBox;
