import { FormularioDeposito, TecladoDeposito } from '@/components';
import { useStoreLogin3 } from '@/store/useStoreLogin3';
import { Container, Grid, Button } from '@mui/material'
import { getUsers } from "@/services";
import { useStore } from '@/store/useStore';
import styles from "/styles/Depositos.module.css"
import { useEffect } from 'react';
import { useStoreModal } from '@/store/useStoreModal';
import { useRouter } from "next/router";
import React, { useState } from 'react'
import ModalBox from '@/components/modal';
import { CancelButton } from '@/components/cancelButton';

const Deposito = () => {

  const { fields, setFields3, disabledButton, setDisabledButton, focusedInput, depositAmount, setdepositAmount } = useStoreLogin3();
  const { setMessage, setButtons, setTitle, setActive, setInitialState, setValues } = useStoreModal();
  const router = useRouter();
  const { user } = useStore();
  const miBalance = user.balance
  const findVar = fields

  const findValue100 = fields.monto100
  const findValue200 = fields.monto200
  const findValue500 = fields.monto500
  const findValue1000 = fields.monto1000


  const handleOnChange = (value: number) => {
    setFields3({ ...fields, [focusedInput]: fields[focusedInput] + value })
  }

  const [dati, setDati] = useState(0)

  // useEffect(() => {
  //   let n = 0
  //   n+= parseInt(fields.monto100) * 100;
  //   n+= parseInt(fields.monto200) * 200;
  //   n+= parseInt(fields.monto500) * 500;
  //   n+= parseInt(fields.monto1000) * 1000;

  //   setdepositAmount(n)

  // }, [fields])

  const handleOnDelete = () => {
    setFields3({ monto100: " ", monto200: " ", monto500: " ", monto1000: " " })
  }


  const handleOnSubmit = async (e: any) => {

    function mostrarModal(parameters: any) {

      if (parameters === "ingreseDinero") {
        setTitle("No ingreso ningun monto.");

        setMessage("");

        setButtons([
          {
            label: "Salir",

            onClick: () => {
              router.push("/");
              handleClose();
            },
          },

          {
            label: "Ingresar monto",

            onClick: () => {
              handleClose();
            },
          },
        ]);

        setActive({ isActive: true });

      } else if (parameters === "modalExito") {

        const montoDepositado = total

        setTitle(`Su (extracción o depósito) de monto $${montoDepositado}, en la cuenta N°XXXX-XXXX-XXX, fue realizado con éxito.`);

        setActive({ isActive: true });

        setButtons([
          {
            label: "Salir",
            onClick: () => {
              router.push("/");
              handleClose();
            },
          },
        ]);
      }

      const handleClose = () => {
        setInitialState();
      };
    }

    const users = await getUsers()
    console.log("users", users)
    const arr = []

    if (findValue100) {
      let multiplicacion1 = findValue100 * 100
      arr.push(multiplicacion1)

    } if (findValue200) {
      let multiplicacion2 = findValue200 * 200
      arr.push(multiplicacion2)

    } if (findValue500) {
      let multiplicacion3 = findValue500 * 500
      arr.push(multiplicacion3)

    } if (findValue1000) {
      let multiplicacion4 = findValue1000 * 1000
      arr.push(multiplicacion4)
    }

    let sumaTotal = arr
    let total = sumaTotal.reduce((a, b) => a + b, 0);
    console.log("mi suma total", total)
    setDati(total)


    if (total === 0) {
      mostrarModal("ingreseDinero")
    } else {
      mostrarModal("modalExito")
    }

    return total  
  }


  return (
    <>
      <div className={styles.container}>
        <Container>
          <h1 className={styles.titleDeposito}>Depósito</h1>
          <h4 className={styles.titleMonto}>MONTO A DEPOSITAR: </h4>
          <h4 className={styles.titleMonto}>${depositAmount}</h4>
          <Grid
            container
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item xs={6}>
              <FormularioDeposito />
              <CancelButton />
              <ModalBox></ModalBox>
            </Grid>

            <Grid item xs={6}>
              <TecladoDeposito
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                handleOnDelete={handleOnDelete}
              />
              <ModalBox></ModalBox>

            </Grid>

          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Deposito