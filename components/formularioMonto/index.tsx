import { Container, Grid, Switch, TextField } from '@mui/material'
import React from 'react'
import { useStoreLogin } from "@/store/useStoreLogin";
import { useStoreLogin2 } from '@/store/useStoreLogin2';
import styles from "/styles/FormularioMonto.module.css"

export const FormularioMonto = () => {

  const { fieldss, setFocusedInput } = useStoreLogin2()

  return (
    <Grid container className={styles.containerForm}>
      <Grid item>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fieldss?.monto}
          name="monto"
          placeholder='$0'
          variant="outlined"
          id="outlined-basic"
        ></TextField>
      </Grid>
    </Grid>
  )
}
