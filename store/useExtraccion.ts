import { create } from "zustand";

interface IFieldsss {
    extraccion?: string
}

interface IStoreLogin4 {
    fieldsss: IFieldsss;
    setFieldsss4: (values: IFieldsss) => void
}

const initialState = {
    fieldsss: {
        extraccion: "vacio"
    },
};

export const useExtraccion = create<IStoreLogin4>((set) => ({
    ...initialState,
    setFieldsss4: (values) => set((state) => ({ ...state, fieldsss: values })),
}))