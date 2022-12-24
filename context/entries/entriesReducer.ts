import { EntriesState } from './'

type EntriesActionType = 
| { type: 'Ui - Open Sidebar' }

export const entriesReducer = (state: EntriesState, action: EntriesActionType):EntriesState => {
    switch (action.type) {
        default:
            return state
    }
}