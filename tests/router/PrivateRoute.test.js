
import { PrivateRoute } from '../../src/router/PrivateRoute'
import { AuthContext } from "../../src/auth";
import { screen } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { MemoryRouter} from 'react-router-dom'

describe('pruebas en <PrivateRoute/>', () => {

    test('debe mostrar el children si está autenticado', () => {
        const contextValue = { logged: true, user: { name: 'juan fidel', id: '123' } }
        Storage.prototype.setItem = jest.fn()
        render(
            <AuthContext.Provider value={contextValue}>                
                <MemoryRouter>
                   <PrivateRoute>
                       <h1>Ruta privada</h1>
                   </PrivateRoute>
                </MemoryRouter>         
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalled();
    });


});