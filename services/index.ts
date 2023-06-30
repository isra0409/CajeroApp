import Axios from "axios";

const axios = Axios.create({ baseURL: "http://localhost:5001" });

export const getUsers = async () => {
  try {
    let { data } = await axios.get("/users");
    return data;
    
  } catch (error) {
    console.log(error);
  }
};

// Acá podemos agregar logica para POST y enviar un usuario nuevo...

