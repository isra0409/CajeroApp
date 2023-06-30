import { Button, Paper } from "@mui/material";
import { useStoreModal } from "@/store/useStoreModal";
import { useStoreLogin } from "@/store/useStoreLogin";
import { useRouter } from "next/router";
import React from "react";

export const CancelButton = () => {

  const { setFields } = useStoreLogin();
  const { setMessage, setButtons, setTitle, setActive, setInitialState } =
    useStoreModal();
  const router: any = useRouter();
  const handleCancel = () => {
    setTitle("¿Está seguro que desea cancelar?");

    setMessage("Presione 'Sí' para cancelar y 'No' para volver al menú.");

    setButtons([
      {
        label: "Si",

        onClick: () => {
          router.push("/");
          setFields({dni:"", clave:""})
        },
      },

      {
        label: "No",

        onClick: () => {
          handleClose();
        },
      },
    ]);

    setActive({ isActive: true });
  };

  const handleClose = () => {
    setInitialState();
  };

  return (
    <Paper elevation={0} sx={{ padding: "1rem" }}>
      <Button onClick={() => handleCancel()} variant="contained">
        Cancelar
      </Button>
    </Paper>
  );
};
