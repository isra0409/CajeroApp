import React from 'react'
import { Container, Grid } from '@mui/material';
import { useStore } from '@/store/useStore';
import { FormularioMonto } from '@/components/formularioMonto';
import { TecladoMonto } from '@/components/tecladoMonto';
import { useStoreLogin2 } from '@/store/useStoreLogin2';
import { getUsers } from "@/services";
import styles from "/styles/OtroMonto.module.css"
import { CancelButton } from '@/components/cancelButton';
import ModalBox from '@/components/modal';
import { useStoreModal } from "@/store/useStoreModal";
import { useRouter } from "next/router";
import { useStoreLogin } from "@/store/useStoreLogin";


const OtroMonto = () => {

  const { setFields } = useStoreLogin();
  const router = useRouter();
  const { fieldss, setFields2, focusedInput } = useStoreLogin2();
  const { setMessage, setButtons, setTitle, setActive, setInitialState } = useStoreModal();
  const { user } = useStore();

  const miBalance = user.balance

  const handleOnChange = (value: number) => {
    setFields2({ ...fieldss, [focusedInput]: fieldss[focusedInput] + value })
  }

  const findVar = fieldss.monto
  console.log("estado actualizado y guardado setFields", findVar)
  const handleOnSubmit = async (e: any) => {

    function functionModal(parameters: any) {

      if (parameters === "fail") {
        setTitle("Su saldo es insuficiente. Puede consultar su saldo, probar con otro monto o cancelar la operación.");
        setMessage("");
        setButtons([
          {
            label: "Cancelar",
            onClick: () => {
              handleClose()
              router.push("/operacionCancelada")
            },
          },

          {
            label: "Consultar saldo",
            onClick: () => {
              router.push("/consultarSaldo");
              setActive({ isActive: false });

            },
          },

          {
            label: "Otro monto",
            onClick: () => {
              handleClose()
            },
          },
        ]);

        setActive({ isActive: true });

        const handleClose = () => {
          setInitialState();
        };
      } else {
        setTitle("Su (extracción o depósito) de monto X, en la cuenta N°XXXX-XXXX-XXX,fue realizado con éxito.");

        setButtons([
          {
            label: "Salir",
            onClick: () => {
              router.push("/");
              handleClose();
              setFields({ dni: "", clave: "" })
            },
          },
        ]);

        const handleClose = () => {
          setInitialState();
        };

        setActive({ isActive: true });

      }
    }

    const stringANumber = parseInt(findVar)
    const users = await getUsers()

    if (stringANumber > miBalance) {
      functionModal("fail")
    } if (stringANumber < miBalance) {
      functionModal("success")
      console.log("perfect, podemos operar")
    }
  }

  return (
    <>
      <Container>
        <h1 className={styles.titleMonto}>Otro monto</h1>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={6}>
            <FormularioMonto />
            <CancelButton />
            <ModalBox></ModalBox>
          </Grid>

          <Grid item xs={6}>
            <TecladoMonto
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
            />

          </Grid>

        </Grid>
      </Container>
    </>
  );
}

export default OtroMonto