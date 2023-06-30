import { Container, Radio, FormControl, FormLabel, FormControlLabel, RadioGroup, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { useStoreLogin } from "@/store/useStoreLogin";
import React, { useState } from 'react'
import { useStore } from "@/store/useStore";
import { useRouter } from "next/router";
import styles from "/styles/Extracciones.module.css"
import { CancelButton } from '@/components/cancelButton';
import ModalBox from '@/components/modal';
import { useExtraccion } from "@/store/useExtraccion";
import { useStoreModal } from "@/store/useStoreModal";
import useTimeOut2 from "@/hooks/useTimeOut2";


const Extracciones = () => {

  const { setFields } = useStoreLogin();
  const { setMessage, setButtons, setTitle, setActive, setInitialState, setValues } = useStoreModal();
  const [miDatoN, setMiDatoN] = useState(0)
  const { fieldsss, setFieldsss4 } = useExtraccion()
  const [miDatoX, setMiDatox] = useState("")
  const { user } = useStore();
  const miBalance = user.balance
  const router = useRouter();


  function calcularExtracciones(e: any, numeroPasado: any) {
    const restaDatos = miBalance - numeroPasado
    setMiDatoN(restaDatos)
    console.log("mi balance restado: ", restaDatos)
    console.log("dato pasao", setFieldsss4)
  }

  function calcularValues(e: any, datoPasado: any) {
    const valueDato = datoPasado
    console.log("yes", valueDato)
    setMiDatox(valueDato)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (miDatoX === "otro-monto") {
      router.push("/otroMonto")
    }
    else if (miDatoX != "otro-monto" && miBalance > 0 && miDatoN > 0) {
      functionSet("success")
    } else {
      functionSet("fail")
    }
  }

  function functionSet(parameter: String) {

    if (parameter === "fail") {
      setTitle("Su saldo es insuficiente. Puede consultar su saldo, probar con otro monto o cancelar la operación.");

      setMessage("");

      setButtons([
        {
          label: "Cancelar",
          onClick: () => {
            router.push("/operacionCancelada");
          },
        },

        {
          label: "Consultar saldo",
          onClick: () => {
            router.push("/consultarSaldo");
            setActive({ isActive: false }) 

          },
        },

        {
          label: "Otro monto",
          onClick: () => {
            router.push("/otroMonto");
            setActive({ isActive: false })
          },
        },

      ]);

      setActive({ isActive: true });

      const handleClose = () => {
        setInitialState();
      };


    } else if (parameter === "success") {
      {
        setTitle("Su (extracción o depósito) de monto X, en la cuenta N°XXXX-XXXX-XXX,fue realizado con éxito.");

        setButtons([
          {
            label: "Salir",
            onClick: () => {
              router.push("/");
              handleClose();
              setFields({dni:"", clave:""})
            },
          },
        ]);

        const handleClose = () => {
          setInitialState();
        };


        setActive({ isActive: true });
      };
    }
  }


  function volverInicio() {
    router.push("/")
    setFields({ dni: " ", clave: " " })
  }

  useTimeOut2({
    callback: () => volverInicio(),
    delay: 30000,
  });

  return (
    <div>

      <h2 className={styles.titleExtracciones}>Extracción</h2>

      <Container className={styles.containerFormControl}>

        <Grid container spacing={2}>

          <FormControl>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >

              <div className={styles.contenedorFlex}>
                <div className={styles.contenedor1}>
                  <FormControlLabel value="500" onClick={e => calcularExtracciones(e, 500)} control={<Radio />} label="$500" />
                  <FormControlLabel value="2000" onClick={e => calcularExtracciones(e, 2000)} control={<Radio />} label="$2000" />
                  <FormControlLabel value="3000" onClick={e => calcularExtracciones(e, 3000)} control={<Radio />} label="$3000" />
                </div>


                <div className={styles.contenedor2}>
                  <FormControlLabel value="5000" onClick={e => calcularExtracciones(e, 5000)} control={<Radio />} label="$5000" />
                  <FormControlLabel value="6000" onClick={e => calcularExtracciones(e, 6000)} control={<Radio />} label="$6000" />
                  <FormControlLabel value="otro-monto" onClick={e => calcularValues(e, "otro-monto")} control={<Radio />} label="Otro monto" />
                </div>
              </div>

            </RadioGroup>

            <div className={styles.containerBtns}>

              <Button className={styles.continuarBtn} variant={"contained"} onClick={handleSubmit}>
                continuar
              </Button>

              <CancelButton />
              <ModalBox></ModalBox>

            </div>

          </FormControl>

        </Grid>
        
      </Container>
    </div>
  )
}

export default Extracciones
