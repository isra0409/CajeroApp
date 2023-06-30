import { FormularioDeContacto, Modalls, TecladoNumerico } from "@/components";
import { Container, Grid } from "@mui/material";
import { useStoreLogin } from "@/store/useStoreLogin";
import { useStoreLogin4 } from "@/store/useStoreLogin4";
import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import { getUsers } from "@/services";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import useTimeOut from "../hooks/useTimeOut";
import BasicModal from "@/components/basicModal";
import { useStoreModal2 } from "@/store/useStoreModal2";


export default function Home() {
  const { fields, setFields, disabledButton, setDisabledButton, focusedInput } =
    useStoreLogin();
  const { setUser, setExtraccionMonto } = useStore();

  const { fieldss, setFieldss4 } = useStoreLogin4()


  const handleOnChange = (value: string) => {
    setFields({ ...fields, [focusedInput]: fields[focusedInput] + value });
  };

  const findVar = fields;
  console.log("estado actualizado y guardado setFields", findVar);

  useEffect(() => {
    if (findVar.dni?.length == 8 && findVar.clave?.length == 4) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [fields]);

  const router = useRouter();

  const handleOnDelete = () => {
    setFields({ dni: "", clave: "" });
  };

  useTimeOut({
    callback: () => setFields({ dni: "", clave: "" }),
    delay: 30000,
    state: [fields],
  });


  const handleOnSubmit = async () => {
    const users = await getUsers();
    console.log("users", users);

    if (users.length > 0) {
      let currentUser = users.filter((user: any) => fields.dni === user.dni);
      console.log("mi usuario actual:", currentUser);

      if (currentUser.length > 0 && currentUser[0].clave === fields.clave)
        router.push("/operations");
      setUser(currentUser[0]);

      // console.log( "usuario logueado con dni y pw")
    } else {
      console.log("algo ta pasando...");
    }
  };

  return (
    <>
      <Container className={styles.containerHome}>
        <h1 className={styles.txtTitleClaveDni}>Cajero Automático TASI</h1>
        <h4 className={styles.txtTitleClaveDni}>Ingrese DNI y clave:</h4>
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={6}>
            <FormularioDeContacto />
          </Grid>
          <Grid item xs={6}>
            <TecladoNumerico
              handleOnDelete={handleOnDelete}
              handleOnChange={handleOnChange}
              disabledButtonContinuar={disabledButton}
              handleOnSubmit={handleOnSubmit}
            />
          </Grid>
        </Grid>

        {/* <Modalls>
          <h1>title 1</h1>
          <p>lorem 1</p>
        </Modalls> */}
      </Container>
    </>
  );
}
