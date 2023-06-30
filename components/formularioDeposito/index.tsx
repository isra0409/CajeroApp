import { Container, Grid, Switch, TextField } from '@mui/material'
import React from 'react'
import { useStoreLogin3 } from '@/store/useStoreLogin3';
import styles from "/styles/FormularioDeposito.module.css"

export const FormularioDeposito = () => {

  const { fields, setFocusedInput } = useStoreLogin3()

  return (

    <Grid container className={styles.containerFlex}>


      <Grid item className={styles.itemRow}>
        <h5 className={styles.titlePesos}>PESOS</h5>
        <h5 className={styles.titleCantidad}>CANTIDAD</h5>
      </Grid>


      <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>$100</h5>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.monto100}
          name="monto100"
          placeholder='$0'
          variant="outlined"
          defaultValue="Default Value"
          id="outlined-basic"
          className={styles.inputsTxt}
        ></TextField>
      </Grid>

      <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>$200</h5>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.monto200}
          name="monto200"
          placeholder='$0'
          variant="outlined"
          id="outlined-basic"
          className={styles.inputsTxt}
        ></TextField>
      </Grid>

      <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>$500</h5>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.monto500}
          name="monto500"
          placeholder='$0'
          variant="outlined"
          id="outlined-basic"
          className={styles.inputsTxt}
        ></TextField>
      </Grid>

      <Grid item className={styles.itemRow}>
        <h5 className={styles.pesos}>$1000</h5>
        <TextField
          onFocus={(e) => setFocusedInput(e?.target?.name)}
          value={fields?.monto1000}
          name="monto1000"
          placeholder='$0'
          variant="outlined"
          id="outlined-basic"
          className={styles.inputsTxt}
        ></TextField>
      </Grid>
    </Grid>
  )
}
