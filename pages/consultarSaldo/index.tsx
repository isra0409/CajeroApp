import React from 'react'
import { useStore } from '@/store/useStore';
import { useStoreLogin4 } from '@/store/useStoreLogin4';
import styles from "/styles/ConsultarSaldo.module.css"
import { Button } from '@mui/material';
import ModalBox from '@/components/modal';
import { CancelButton } from '@/components/cancelButton';
import { useStoreModal } from "@/store/useStoreModal";
import { useRouter } from 'next/router';
import useTimeOut2 from "@/hooks/useTimeOut2";
import { useStoreLogin } from "@/store/useStoreLogin";

const ConsultarSaldo = () => {
  const { setFields } = useStoreLogin();
  const { fieldss, setFieldss4 } = useStoreLogin4()
  const findVar = fieldss
  const { user } = useStore();
  const miBalance = user.balance
  const router = useRouter();
  const btnSi = () => {
    router.push("/operations")
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
      <div className={styles.contenedor}>
        <div className={styles.titles}>Su saldo es:</div>
        <div className={styles.titles}> $ {miBalance} </div>
        <h3 className={styles.titleSub}>Desea realizar otra operacion?</h3>
        <div className={styles.box}>
          <Button onClick={btnSi} className={styles.itemsBox} variant={"contained"}>Aceptar</Button>
          <CancelButton />
          <ModalBox></ModalBox>
        </div>
      </div>
    </>
  )
}

export default ConsultarSaldo