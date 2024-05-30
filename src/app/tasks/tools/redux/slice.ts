import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Elemento {
  id: number;
  valor: string;
}

interface ElementosState {
  elementos: Elemento[];
}

const initialState: ElementosState = {
  elementos: [],
};

const elementosSlice = createSlice({
  name: 'elementos',
  initialState,
  reducers: {
    agregarElemento: (state, action: PayloadAction<Elemento>) => {
      state.elementos.push(action.payload);
    },
    editarElemento: (state, action: PayloadAction<{ id: number; nuevoValor: string }>) => {
      const { id, nuevoValor } = action.payload;
      const elemento = state.elementos.find(elemento => elemento.id === id);
      if (elemento) {
        elemento.valor = nuevoValor;
      }
    },
    listarElementos: (state) => state,
  },
});

export const { agregarElemento, editarElemento, listarElementos } = elementosSlice.actions;
export default elementosSlice.reducer;
