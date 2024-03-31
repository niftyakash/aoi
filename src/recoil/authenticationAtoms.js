import { atom } from 'recoil';

export const authenticationState = atom(
    {
        key: 'authenticationState',
        default: {
            adminUserId: 'akash' || 'akash@gmail.com',
            adminPassword: 'hello'
        }
    }
)
