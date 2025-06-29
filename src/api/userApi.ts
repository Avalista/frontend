import { UserProfile, UserProfileUpdate } from '../types/auth.types';
import { mockUserProfile } from '../mocks/user.mocks';

export const getUserProfile = async (): Promise<UserProfile> => {
  console.log('SIMULANDO CHAMADA DE API para buscar perfil...');

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Simulando resposta com SUCESSO');
      resolve(mockUserProfile);
    }, 500);
  });
};

export const updateUserProfile = async (data: UserProfileUpdate): Promise<UserProfile> => {
  console.log('SIMULANDO ATUALIZAÇÃO DE PERFIL com:', data);

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simula a atualização dos dados e retorna o perfil "atualizado"
      const updatedProfile = { ...mockUserProfile, ...data };
      console.log('Perfil atualizado com SUCESSO', updatedProfile);
      resolve(updatedProfile);
    }, 1000);
  });
};

export const changePassword = async (passwordData: any): Promise<{ message: string }> => {
  console.log('SIMULANDO ALTERAÇÃO DE SENHA com:', passwordData);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (passwordData.currentPassword !== '123456') {
        const error = { response: { data: { message: ['Senha atual incorreta.'] } } };
        console.log('Simulando erro de senha atual');
        reject(error);
      } else {
        console.log('Senha alterada com SUCESSO');
        resolve({ message: 'Senha alterada com sucesso!' });
      }
    }, 1000);
  });
};