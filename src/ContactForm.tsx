
import React from 'react';
import { Contact ,PhoneNumberType } from './types';
import { useFormValidation } from './useFormValidation';

const ContactForm: React.FC<{ onAddContact: (contact: Contact) => void }> = ({ onAddContact }) => {
  const { formState, errors, handleChange, validate } = useFormValidation({
    name: '',
    email: '',
    phoneNumber: '',
    phoneType: PhoneNumberType.Mobile,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // // Generate a unique ID 
      const newContact: Contact = {
        ...formState,
        id: Date.now(),
      };
      onAddContact(newContact);
      // Reset form state
      handleChange({ target: { name: 'name', value: '' } } as any);
      handleChange({ target: { name: 'email', value: '' } } as any);
      handleChange({ target: { name: 'phoneNumber', value: '' } } as any);
      handleChange({ target: { name: 'phoneType', value: PhoneNumberType.Mobile } } as any);
    }
  };

  return (
<form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      {/* Name Field */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Phone Number Field */}
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Phone Number:
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formState.phoneNumber}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && (
          <p className="mt-2 text-sm text-red-600">{errors.phoneNumber}</p>
        )}
      </div>

      {/* Phone Type Field */}
      <div className="mb-4">
        <label
          htmlFor="phoneType"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Phone Type:
        </label>
        <select
          id="phoneType"
          name="phoneType"
          value={formState.phoneType}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value={PhoneNumberType.Mobile}>Mobile</option>
          <option value={PhoneNumberType.Home}>Home</option>
          <option value={PhoneNumberType.Work}>Work</option>
        </select>
        {errors.phoneType && (
          <p className="mt-2 text-sm text-red-600">{errors.phoneType}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
