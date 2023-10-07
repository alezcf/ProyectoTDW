import React, { useEffect, useState } from "react";
import { Button, Divider, Grid, LinearProgress, List, ListItem, ListItemText } from "@mui/material";
import { useBuscarInfoQuery } from "../../queries/query";
import { Link } from "react-router-dom";

const Home = () => {
    const [listaAux, setListaAux] = useState([]);
    const [listaSeleccionados, setListaSeleccionados] = useState([]);
    const [buscador, setBuscador] = useState("");
    const [params, setParams] = useState({ limit: 151, page: 1 });

    const { data: dogs, isLoading: cargandoDogs, isSuccess, isError } = useBuscarInfoQuery(params);
    console.log("Inicio al home")
    useEffect(() => {
        isSuccess && setListaAux(dogs);
    }, [isSuccess, dogs]);

    useEffect(() => {
        isError && console.log("error");
    }, [isError]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setBuscador(value);
    };

    const handleInputChangeLimit = (event) => {
        const { value } = event.target;
        setParams({ ...params, limit: value });
    };

    function selectDog(valor) {
        if (!listaSeleccionados.includes(valor)) {
        setListaSeleccionados((listaSeleccionados) => [...listaSeleccionados, valor]);
        let otros;
        otros = listaAux.filter((item) => item !== valor);
        setListaAux(otros);
        }
    }

    function returnDog(valor) {
        setListaAux((listaAux) => [valor, ...listaAux]);
        let filtro1;
        filtro1 = listaSeleccionados.filter((item) => item !== valor);
        setListaSeleccionados(filtro1);
    }

    useEffect(() => {
        if (buscador.trim() !== "") {
        let result = dogs.filter((item) => item.name.startsWith(buscador));
        setListaAux(result);
        } else {
        setListaAux(dogs);
        }
    }, [buscador, dogs]);

    return (
        <>
        <input name="buscador" onChange={handleInputChange} placeholder="Buscar perros"></input>
        <input name="limitMax" onChange={handleInputChangeLimit} placeholder="Límite máximo"></input>

        <Grid container spacing={1}>
            <Grid item md={4} xs={6}>
            {cargandoDogs && <LinearProgress />}
            <List>
                {listaAux.map((item, index) => (
                <React.Fragment key={index}>
                    <ListItem disablePadding>
                    <ListItemText primary={item.name} />
                    </ListItem>
                    <Divider></Divider>
                </React.Fragment>
                ))}
            </List>
            </Grid>

            <Grid item md={4} xs={6}>
            <List>
                {listaSeleccionados.map((item, index) => (
                <React.Fragment key={index}>
                    <ListItem disablePadding>
                    <ListItemText primary={item.name} />
                    <Button variant="outlined" onClick={() => returnDog(item)}>
                        de vuelta
                    </Button>
                    </ListItem>
                    <Divider></Divider>
                </React.Fragment>
                ))}
            </List>
            </Grid>
        </Grid>
        </>
    );
};

export default Home;
