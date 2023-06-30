import React from 'react'
import styles from "/styles/OperacionCancelada.module.css"
import { useStoreLogin } from "@/store/useStoreLogin";
import { useRouter } from "next/router";
import useTimeOut2 from "@/hooks/useTimeOut2";


const OperacionCancelada = () => {

    const router = useRouter();
    const { setFields } =
    useStoreLogin();

    function volverInicio() {
        router.push("/")
        setFields({ dni: " ", clave: " " })
      }
    
      useTimeOut2({
        callback: () => volverInicio(),
        delay: 3000,
      });


    return (
        <div className={styles.containerCancel}>
            <div className={styles.titleCancel}>La operacion ah sido cancelada.</div>
        </div>
    )
}

export default OperacionCancelada