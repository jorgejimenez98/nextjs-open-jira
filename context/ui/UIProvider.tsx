import { UiContext } from './UIContext'
import React, { FC, ReactNode, useReducer } from 'react'
import { uiReducer } from './uiReducer'

export interface UiState {
    sideMenuOpen: boolean
    isAddingEntry: boolean
}

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false,
    isAddingEntry: false
}

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({ type: 'Ui - Open Sidebar'})
  }

  const closeSideMenu = () => {
    dispatch({ type: 'Ui - Close Sidebar'})
  }

  const setIsAddingEntry = (value: boolean) => {
    dispatch({ type: 'Ui - Set is Adding Entry', payload: value})
  }

  return (
    <UiContext.Provider value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry
    }}>
        {children}
    </UiContext.Provider>
  )
}