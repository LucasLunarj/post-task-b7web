import { Page } from './components/Page'
import { initialState, reducer } from "./reducers/dataReducer"
import { useReducer } from 'react'
import { DataContext } from './contexts/DataContext'
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        <Page />
      </DataContext.Provider>
    </>
  )
}