import { CategoryContextProvider } from '.'

export const ContextProvider = ({ children }) => (
    <>
        <CategoryContextProvider>
            {children}
        </CategoryContextProvider>
    </>
)