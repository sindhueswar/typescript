
import { useState } from 'react';
import { ContactFormState, FormErrors} from './types';

export function useFormValidation(initialState: ContactFormState) {
  const [formState, setFormState] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]:  value,
    }));
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email || !validateEmail(formState.email)) newErrors.email = 'Invalid email address';
    if (!formState.phoneNumber || !validatePhoneNumber(formState.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    if (!formState.phoneType) newErrors.phoneType = 'Phone type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { formState, errors, handleChange, validate };
}

// Validate email
const validateEmail = (email: string) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

// Validate phone number 
const validatePhoneNumber = (phoneNumber: string) => {
  const phonePattern = /^(\+?\d{1,4}?[\s-.\(\)]*)?(\(?\d{1,5}\)?[\s-.\(\)]*){1,5}(\d{1,5}[\s-.\(\)]*){1,5}\d{1,5}$/;
  return phonePattern.test(phoneNumber);
};
