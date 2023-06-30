import { Button, Grid } from '@mui/material';
import React, { FC } from "react";
import styles from "/styles/TecladoNumerico.module.css";

interface iTecladoNumerico {
  handleOnChange: (value: number) => void,
  disabledButtonContinuar?: boolean,
  handleOnSubmit: () => void,
  handleOnDelete: () => void
}

export function TecladoNumerico({ handleOnChange, disabledButtonContinuar = false, handleOnDelete, handleOnSubmit }: iTecladoNumerico) {

  const keyboardItems = [];

  for (let i = 1; i <= 12; i++) {

    switch (i) {
      case 10:
        keyboardItems.push({
          name: "borrar",
          onClick: () => handleOnDelete()
        });
        break;

      case 11:
        keyboardItems.push({
          name: "0",
          onClick: () => handleOnChange(0)
        })
        break;

      case 12:
        keyboardItems.push({
          name: "continuar",
          onClick: () => handleOnSubmit(),
          disabled: disabledButtonContinuar
        })
        break;

      default:
        keyboardItems.push({
          name: i,
          onClick: () => handleOnChange(i)
        })
        break;
    }

  }

  return (
    <Grid className={styles.containerTecladoDeposito} container rowSpacing={1}>
        {keyboardItems.map((i, key) => {
            return (
                <Grid key={key} item xs={4}>
                    <Button className={styles.btns} disabled={i?.disabled? i.disabled : false} variant={"contained"} onClick={() => {i.onClick()}}>
                        {i.name}
                    </Button>
                </Grid>
            );
        })
        }
    </Grid>
);
}
