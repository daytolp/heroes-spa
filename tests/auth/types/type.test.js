import { types } from '../../../src/auth/types/types';
describe('pruebas en type', () => {

    test('debe regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
    })

});