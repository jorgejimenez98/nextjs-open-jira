import { UiState } from "./UIProvider";

type UIActionType = 
| { type: 'Ui - Open Sidebar' }
| { type: 'Ui - Close Sidebar' }

export const uiReducer = (state: UiState, action: UIActionType): UiState => {
    switch (action.type) {
        case 'Ui - Open Sidebar':
            return { ...state, sideMenuOpen: true }
    
        case 'Ui - Close Sidebar':
            return { ...state, sideMenuOpen: false }

        default: 
            return state    
    }   
}