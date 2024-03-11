
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from "../../src/auth";
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('pruebas en <PublicRoute/>', () => {

    test('debe mostrar el children si no está autenticado', () => {
        const contextValue = { logged: false }

        render(<AuthContext.Provider value={contextValue}>
            <PublicRoute>
                <h1>Ruta publica</h1>
            </PublicRoute>
        </AuthContext.Provider>
        )
        // screen.debug()
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });

    test('debe navegar si está autenticado', () => {
        const contextValue = { logged: true, user: { name: 'juan', id: '123' } }
        render(
            <AuthContext.Provider value={contextValue}>                
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                            <h1>Ruta publica</h1>
                        </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Página marvel</h1>}/>
                    </Routes>
                </MemoryRouter>         
            </AuthContext.Provider>
        )
        expect(screen.getByText('Página marvel')).toBeTruthy();
    });

});