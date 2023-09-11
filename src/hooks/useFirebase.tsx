import { create } from "zustand";

interface GenerationState {
	isOpen: boolean;
	setIsOpen: (isLoading: boolean) => void;
}

export const useGenerationStore = create<GenerationState>()((set) => ({
	isOpen: false,
	setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
