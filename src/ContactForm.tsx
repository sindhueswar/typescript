import React from 'react';
import { ContactFormState, PhoneNumberType } from './types';
import { useFormValidation } from './useFormValidation';

interface ContactFormProps {
  onAddContact: (contact: ContactFormState) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onAddContact }) => {
  const initialFormState: ContactFormState = {
    name: '',
    email: '',
    phoneNumber: '',
    phoneType: PhoneNumberType.Mobile,
  };

  const { formState, errors, handleChange, validate } = useFormValidation(initialFormState);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      onAddContact(formState);
      // Reset form state
      setFormState(initialFormState);
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-5">
            <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formState.name}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phone"
              placeholder="Enter your phone number"
              value={formState.phoneNumber}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.phoneNumber && <p className="text-red-600 text-sm">{errors.phoneNumber}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formState.email}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-5">
            <label htmlFor="phoneType" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Type
            </label>
            <select
              name="phoneType"
              id="phoneType"
              value={formState.phoneType}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              {Object.keys(PhoneNumberType).map(key => (
                <option key={key} value={PhoneNumberType[key as keyof typeof PhoneNumberType]}>
                  {key}
                </option>
              ))}
            </select>
            {errors.phoneType && <p className="text-red-600 text-sm">{errors.phoneType}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none hover:shadow-form"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
