import { create } from "zustand";

interface IFieldsss {
    extraccion?: number;
}

interface IStoreLogin4 {
    fieldsss: IFieldsss;
    setFieldsss4: (values: IFieldsss) => void
}

const initialState = {
    fieldsss: {
        extraccion: 0
    },
};

export const useExtraccion = create<IStoreLogin4>((set) => ({
    ...initialState,
    setFieldsss4: (values) => set((state) => ({ ...state, fieldsss: values })),
}))