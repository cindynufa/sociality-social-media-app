// import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../../ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '../../ui/field';
import { Input } from '../../ui/input';
import { useLogin } from '../../../api/auth/useLogin';
import { useForm } from 'react-hook-form';
import type { LoginRequest } from '../../../api/auth/LoginTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../../api/auth/LoginSchema';

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginRequest) => {
    mutate(data);
  };

  return (
    <FieldSet className="flex flex-col w-full gap-5">
      <FieldGroup>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Input your email"
            required
            {...register('email')}
          />
          {errors.email && (
            <FieldError className="text-red-500 text-left">
              {errors.email.message}
            </FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel>Password</FieldLabel>
          <div className="flex flex-row items-center">
            <Input
              id="password"
              type="password"
              placeholder="Input your password"
              required
              className="relative"
              {...register('password')}
            />
            {/* <Eye className='absolute cursor-pointer'/>
            <EyeOff className='absolute cursor-pointer'/> */}
          </div>
          {errors.password && (
            <FieldError className="text-red-500 text-left">
              {errors.password.message}
            </FieldError>
          )}
        </Field>

        <div className="flex flex-col gap-4">
          <Button
            variant={'Primary300'}
            disabled={isPending}
            onClick={handleSubmit(onSubmit)}
          >
            {isPending ? 'Logging in...' : 'Login'}
          </Button>
          <div className="flex flex-row gap-1 justify-center">
            <p className="text-md font-semibold text-neutral-25">
              Don't have an account?{' '}
              <Link to="/Register">
                <span className="text-md font-bold text-primary-200">
                  Register
                </span>
              </Link>
            </p>
          </div>
        </div>
      </FieldGroup>
    </FieldSet>
  );
}
