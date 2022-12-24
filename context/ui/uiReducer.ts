import { UiState } from "./UIProvider";

type UIActionType = 
| { type: 'Ui - Open Sidebar' }
| { type: 'Ui - Close Sidebar' }
| { type: 'Ui - Set is Adding Entry', payload: boolean }
| { type: 'Ui - Start Dragging' }
| { type: 'Ui - End Dragging' }

export const uiReducer = (state: UiState, action: UIActionType): UiState => {
    switch (action.type) {
        case 'Ui - Open Sidebar':
            return { ...state, sideMenuOpen: true }
    
        case 'Ui - Close Sidebar':
            return { ...state, sideMenuOpen: false }
        
        case 'Ui - Set is Adding Entry':
            return { ...state, isAddingEntry: action.payload }
        
        case 'Ui - End Dragging':
            return { ...state, isDragging: false }
        
        case 'Ui - Start Dragging':
            return { ...state, isDragging: true }

        default: 
            return state    
    }   
}