import { createContext } from 'react'

interface ContextProps {
     sideMenuOpen: boolean;
     isAddingEntry: boolean

     // Methods
     openSideMenu: () => void
     closeSideMenu: () => void
     setIsAddingEntry: (value: boolean) => void
}

export const UiContext = createContext({} as ContextProps)