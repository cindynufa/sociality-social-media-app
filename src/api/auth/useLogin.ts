import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { loginRequest } from './LoginServices';
import { setToken } from '../../lib/auth';

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginRequest,

    onSuccess: (data) => {
      console.log('LOGIN SUCCESS -> data:', data);

      setToken(data.data.token);

      navigate('/');
    },

    onError: (error: Error) => {
      console.log('LOGIN ERROR:', error);
    },
  });
};
