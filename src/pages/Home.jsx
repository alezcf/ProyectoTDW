import React, { useState } from 'react';
import Dog from '/src/pages/components/Dog.jsx';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Home = () => {
  const [value, setValue] = useState(1); // Establecer el valor inicial para mostrar la pestaña "Item Two"

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Candidato" />
          <Tab label="Aceptados" />
          <Tab label="Rechazados" />
        </Tabs>
      </Box>
      {/* Contenido de la pestaña "Item One" (vacío) */}
      <CustomTabPanel value={value} index={0}>
        <Dog />
      </CustomTabPanel>
      {/* Contenido de la pestaña "Item Two" (con el componente Dog) */}
      <CustomTabPanel value={value} index={1}>
        {/* Contenido vacío */}
      </CustomTabPanel>
      {/* Contenido de la pestaña "Item Three" (vacío) */}
      <CustomTabPanel value={value} index={2}>
        {/* Contenido vacío */}
      </CustomTabPanel>
    </Box>
  );
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default Home;
