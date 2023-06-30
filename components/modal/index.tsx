import { useStoreModal } from "@/store/useStoreModal";
import { Modal, Box, Typography, ButtonGroup, Button } from "@mui/material";
import React from "react";
import styles from "/styles/ModalBox.module.css";

const ModalBox = () => {
  const { setInitialState, active, title, message, buttons } = useStoreModal();
  const handleClose = () => {
    setInitialState();
  };
  return (
    <>
      <Modal open={active.isActive} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography>{title}</Typography>

          <Typography>{message}</Typography>

          <ButtonGroup className={styles.boxModalFlex}>
            {buttons?.map((button) => {
              return (
                <Button className={styles.btnModal} onClick={button.onClick} variant="contained">
                  {button.label}
                </Button>
              );
            })}
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};

export default ModalBox;
