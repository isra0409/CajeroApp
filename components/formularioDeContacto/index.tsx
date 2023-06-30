import { Container, Grid, Switch, TextField } from '@mui/material'
import React from 'react'
import { useStoreLogin } from "@/store/useStoreLogin";
import styles from "/styles/FormularioDeContacto.module.css";

export const FormularioDeContacto = () => {

  const { fields, setFocusedInput } = useStoreLogin()

  return (
    <Grid container className={styles.containerFlex}>
      <Grid item className={styles.inputForm}>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.dni}
          name="dni"
          label="DNI"
          variant="outlined"
          id="outlined-basic"
        ></TextField>
      </Grid>

      <Grid item container>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.clave}
          name="clave"
          label="CLAVE"
          variant="outlined"
          id="outlined-basic"
        ></TextField>
      </Grid>
    </Grid>
  )
}
