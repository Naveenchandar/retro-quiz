import React from 'react'
import { CategoryContextProvider, DataContextProvider, NameContextProvider, ResultContextProvider, ScoreContextProvider } from '.'

export const ContextProvider = ({ children }) => (
    <>
        <CategoryContextProvider>
            <ResultContextProvider>
                <ScoreContextProvider>
                    <DataContextProvider>
                        <NameContextProvider>
                            {children}
                        </NameContextProvider>
                    </DataContextProvider>
                </ScoreContextProvider>
            </ResultContextProvider>
        </CategoryContextProvider>
    </>
)