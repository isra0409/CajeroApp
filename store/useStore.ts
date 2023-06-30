import { create } from 'zustand';

interface IUser {
    id: number,
    name: string,
    clave: string,
    dni: string,
    balance: number,
    accountNumber: string,
    datoNuevo1 : number,
    datoNuevo2 : string,
    extracionMonto: any,
}

interface IStore {
    user: IUser,
    setUser: (value: IUser) => void,
    setExtraccionMonto: (value: any) => void,
}

const initialState = {
    user: {
        id: 0,
        name: "",
        clave: "",
        dni: "",
        balance: 0,
        accountNumber: "",
        datoNuevo1: 0,
        extracionMonto: 0,
        datoNuevo2: ""
    }
}

export const useStore = create<IStore>((set) => ({
    ...initialState,
    setUser: (values) => set((state) => ({ ...state, user: values })),
    setExtraccionMonto: (values) => set((state) => ({ ...state, extraccionMonto: values }))
}))