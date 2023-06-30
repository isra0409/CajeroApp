import { create } from "zustand";

interface IFields {
    monto?: any;
}

interface IStoreLogin {
    fieldss: IFields;
    setFields2: (values: IFields) => void
    disabledButton: boolean
    setFocusedInput: (values: string) => void
    setDisabledButton: (values: boolean) => void
}

const initialState = {
    fieldss: {
        monto: ""
    },
    disabledButton: true
};

export const useStoreLogin2 = create<IStoreLogin>((set) => ({
    ...initialState,
    setFields2: (values) => set((state) => ({ ...state, fieldss: values })),
    setFocusedInput: (values) => set((state) => ({ ...state, focusedInput: values })),
    setDisabledButton: (values) => set((state) => ({ ...state, disabledButton: values }))
}))