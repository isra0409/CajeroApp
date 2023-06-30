import { create } from "zustand";

interface IModal {
    isActive: boolean
}

interface IStore{
    active: IModal;
    title: string;
    message: string;
    buttons: Array<any>
    setValues: (values: any) => void;
    setActive: (values: IModal) => void;
    setButtons: (values:Array<object>) => void;
    setTitle: (values: string) => void;
    setMessage: (values: string) => void;
    setInitialState: any;
}

const initialState = {
    active: { isActive: false},
    title: "",
    message: "",
    buttons: [{label: "", onclick: () => {}}]
}

export const useStoreModal = create<IStore>((set) => ({
    ...initialState,
    setValues: (values) => 
    set((state) => ({
         ...state, 
         active: values.isActive,
         buttons: values.buttons,
         title: values.title,
         mesagge: values.message,
        })),
    setActive: (value) => set((state) => ({ ...state, active: value})),
    setButtons: (value) => set((state) => ({ ...state, buttons: value})),
    setTitle: (value) => set((state) => ({ ...state, title: value})),
    setMessage: (value) => set((state) => ({ ...state, message: value})),
    setInitialState: () => set((state) => ({ ...state, ...initialState}))
}))