import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

interface ModalPayload {
  title?: string;
  content?: string;
}

interface UiState {
  modalOpen: boolean;
  modalTitle?: string;
  modalContent?: string;
}

const initialState: UiState = {
  modalOpen: false,
  modalTitle: undefined,
  modalContent: undefined,
};

const modalSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<ModalPayload>) {
      state.modalOpen = true;
      state.modalTitle = action.payload.title;
      state.modalContent = action.payload.content;
    },
    closeModal(state) {
      state.modalOpen = false;
      state.modalTitle = undefined;
      state.modalContent = undefined;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
