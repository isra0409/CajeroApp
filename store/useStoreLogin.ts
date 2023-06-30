import { create } from "zustand";

interface IFields {
    dni?: string;
    clave?: string
}

interface IStoreLogin {
    fields: IFields;
    disabledButton: boolean
    focusedInput: string
    setFields: (values: IFields) => void
    setFocusedInput: (values: string) => void
    setDisabledButton: (values: boolean) => void
}

const initialState = {
    fields: {
        dni: "",
        clave: ""
    },
    focusedInput: "",
    disabledButton: true
};

export const useStoreLogin = create<IStoreLogin>((set) => ({
    ...initialState,
    setFields: (values) => set((state) => ({ ...state, fields: values })),
    setFocusedInput: (values) => set((state) => ({ ...state, focusedInput: values })),
    setDisabledButton: (values) => set((state) => ({ ...state, disabledButton: values }))
}))