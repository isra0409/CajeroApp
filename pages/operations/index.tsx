import React from 'react'
import { useStoreLogin } from "@/store/useStoreLogin";
import { useRouter } from "next/router";
import { Button, Grid } from "@mui/material";
import styles from "/styles/Operatios.module.css"
import { useStoreModal } from '@/store/useStoreModal';
import { CancelButton } from '@/components/cancelButton';
import ModalBox from '@/components/modal';
import { useStore } from '@/store/useStore';
import useTimeOut2 from "@/hooks/useTimeOut2";


const Operations = () => {

    const { setFields } = useStoreLogin();
    const { user } = useStore()
    const router = useRouter();
    const { setMessage, setButtons, setTitle, setActive, setInitialState, setValues } = useStoreModal();
    const handleClose = () => {
        setInitialState()
        setActive({ isActive: false });
    };


    const extraccionPag = () => {
        router.push("/extracciones")
    }

    const depositoPag = () => {
        router.push("/depositos")
    }

    const saldoPag = () => {
        router.push("/consultarSaldo")
    }

    function volverInicio(){
        router.push("/")
        setFields({dni: " ", clave: " "})
    }
    
    useTimeOut2({
        callback: () => volverInicio(),
        delay: 30000,
      });


    return (
        <>
            <div className={styles.wtf}>
                <h3 className={styles.titlesCenter}>Bienvenido {user.name}</h3>
                <p className={styles.titlesCenter}>Que operacion te gustaria realizar?</p>

                <Grid container className={styles.containerDeposito}>

                    <div className={styles.containerExtraccionDeposito}>
                        <Grid>
                            <Button onClick={() => extraccionPag()} className={styles.btnExtraccionSaldoDeposito} variant={"contained"}> Extraccion </Button>
                        </Grid>
                        <Grid>
                            <Button onClick={() => depositoPag()} className={styles.btnExtraccionSaldoDeposito} variant={"contained"}> Deposito </Button>
                        </Grid>
                    </div>
                </Grid>

                <div className={styles.btnConsultarSaldo}>
                    <Grid>
                        <Button className={styles.btnExtraccionSaldoDeposito} onClick={() => saldoPag()} variant={"contained"}> Consultar Saldo </Button>
                    </Grid>
                </div>
                <CancelButton />
                <ModalBox></ModalBox>
            </div>
        </>
    )
}

export default Operations