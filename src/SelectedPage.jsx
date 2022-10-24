import React, {useContext} from 'react'

const SelectedPageContext = React.createContext();

export default function SelectedPage({children}) {
  return (
    <SelectedPageContext.Provider >
        {children}
    </SelectedPageContext.Provider>
  )
}
