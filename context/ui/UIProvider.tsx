import { UiContext } from './UIContext'
import React, { FC, ReactNode, useReducer } from 'react'
import { uiReducer } from './uiReducer'

export interface UiState {
    sideMenuOpen: boolean
}

const UI_INITIAL_STATE: UiState = {
    sideMenuOpen: false
}

export const UiProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({ type: 'Ui - Open Sidebar'})
  }

  const closeSideMenu = () => {
    dispatch({ type: 'Ui - Close Sidebar'})
  }

  return (
    <UiContext.Provider value={{
        ...state,
        openSideMenu,
        closeSideMenu
    }}>
        {children}
    </UiContext.Provider>
  )
}