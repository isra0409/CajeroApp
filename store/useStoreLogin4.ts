import { create } from "zustand";

interface IFieldss {
    monto?: any;
}

interface IStoreLogin4 {
    fieldss: IFieldss;
    setFieldss4: (values: IFieldss) => void
}

const initialState = {
    fieldss: {
        monto: 0
    },
    disabledButton: true
};

export const useStoreLogin4 = create<IStoreLogin4>((set) => ({
    ...initialState,
    setFieldss4: (values) => set((state) => ({ ...state, fieldss: values })),
}))