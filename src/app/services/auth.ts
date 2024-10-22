import { v4 as uuid } from 'uuid';

export type TSignInRequestData = {
  email: string;
  password: string;
}

// Simula o delay de um backend real
const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: TSignInRequestData) {
  await delay()

  return {
    token: uuid(),
    user: {
      name: 'Juliana Castilho',
      email: 'juliana.castilho@fakemail.com',
      avatar_url: 'https://github.com/juliana-castilho.png',
    },
  }
}

export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Juliana Castilho',
      email: 'juliana.castilho@fakemail.com',
      avatar_url: 'https://github.com/juliana-castilho.png',
    }
  }
}