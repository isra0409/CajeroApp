import { create } from "zustand";

interface IFields {
    monto100?: any;
    monto200?: any;
    monto500?: any;
    monto1000?: any;
    depositAmount?: any;
}

interface IStoreLogin {
    fields: IFields;
    setFields3: (values: IFields) => void
    disabledButton: boolean
    depositAmount: number
    setFocusedInput: (values: string) => void
    setDisabledButton: (values: boolean) => void
    setdepositAmount: (values: number) => void
}

const initialState = {
    fields: {
        monto100: "",
        monto200: "",
        monto500: "",
        monto1000: "",
    },
    depositAmount: 0,
    disabledButton: true
};

export const useStoreLogin3 = create<IStoreLogin>((set) => ({
    ...initialState,
    setFields3: (values) => set((state) => ({ ...state, fields: values })),
    setFocusedInput: (values) => set((state) => ({ ...state, focusedInput: values })),
    setDisabledButton: (values) => set((state) => ({ ...state, disabledButton: values })),
    setdepositAmount: (values) => set((state) => ({ ...state, valueX: values }))
}))