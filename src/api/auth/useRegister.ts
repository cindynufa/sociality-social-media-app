import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { registerRequest } from './RegisterServices';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerRequest,

    onSuccess: (data) => {
      console.log('REGISTER SUCCESS -> data:', data);

      alert('Register Success!');

      navigate('/login');
    },

    onError: (error: Error) => {
      console.log(error);
    },
  });
};
