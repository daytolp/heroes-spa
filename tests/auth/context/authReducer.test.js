import { authReducer } from '../../../src/auth/context/AuthReducer'
import { types } from '../../../src/auth/types/types';

describe('pruebas en authReducer', () => {
    let initialState = null;
    beforeEach(() => {
        initialState = { logged: false}
    });

    test('debe retornar el estado por defecto', () => {
        const state = authReducer(initialState, {})
        expect(state).toEqual(initialState)
    })

    test('debe llamar el login y autenticar y establecer el usuario y contraeña', () => {
        const action  = { 
            type: types.login,
            payload: {
                name: 'juan',
                id: '123'
            }
        }

        const state = authReducer(initialState, action)
        expect(state.logged).toBeTruthy()
        expect(state.user).toEqual(action.payload)
    })

    test('debe llamar el logout y borrar el nombre del usuario y el logged en false', () => {
        const action  = { 
            type: types.logout
        }

        const state = authReducer(initialState, action)
        expect(state.logged).toBeFalsy()
        expect(state.user).toBeUndefined()
    })

});