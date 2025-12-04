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
import { useRegister } from '../../../api/auth/useRegister';
import { useForm } from 'react-hook-form';
import {
  type RegisterFormValues,
  RegisterSchema,
} from '../../../api/auth/RegisterSchema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function RegisterForm() {
  const { mutate, isPending } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutate({
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      password: data.password,
    });
  };

  return (
    <FieldSet className="flex flex-col w-full gap-5">
      <FieldGroup>
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            {...register('name')}
          />
          {errors.name && (
            <FieldError className="text-red-500 text-left">
              {errors.name.message}
            </FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel>Username</FieldLabel>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
            {...register('username')}
          />
          {errors.username && (
            <FieldError className="text-red-500 text-left">
              {errors.username.message}
            </FieldError>
          )}
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
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
          <FieldLabel>Phone Number</FieldLabel>
          <Input
            id="phone"
            type="phone"
            placeholder="Enter your phone number"
            {...register('phone')}
          />
          {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
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
        <Field>
          <FieldLabel>Confirm Password</FieldLabel>
          <div className="flex flex-row items-center">
            <Input
              id="password"
              type="password"
              placeholder="Confirm your password"
              required
              className="relative"
              {...register('confirmPassword')}
            />
            {/* <Eye className='absolute cursor-pointer'/>
            <EyeOff className='absolute cursor-pointer'/> */}
          </div>
          {errors.confirmPassword && (
            <FieldError className="text-red-500 text-left">
              {errors.confirmPassword.message}
            </FieldError>
          )}
        </Field>

        <div className="flex flex-col gap-4">
          <Button
            variant={'Primary300'}
            disabled={isPending}
            onClick={handleSubmit(onSubmit)}
          >
            {isPending ? 'Processing...' : 'Submit'}
          </Button>
          <div className="flex flex-row gap-1 justify-center">
            <p className="text-md font-semibold text-neutral-25">
              Already have an account?{' '}
              <Link to="/Login">
                <span className="text-md font-bold text-primary-200">
                  Log in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </FieldGroup>
    </FieldSet>
  );
}
