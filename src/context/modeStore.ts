import { create } from 'zustand'

type State = {
  mode: string
}

type Action = {
  changeMode: (mode: State['mode']) => void
}

export const useModeStore = create<State & Action>()((set) => ({
  mode: 'dark',
  changeMode: (mode) => set(() => ({ mode })),
}))
