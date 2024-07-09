
export interface Contact {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  phoneType: PhoneNumberType;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phoneNumber?: string;
  phoneType?: string;
}

// Mapped Type 
export type ContactFormFields = {
  [K in keyof Omit<Contact, 'id'>]: string;
};

// Enum 
export enum PhoneNumberType {
  Mobile = 'Mobile',
  Home = 'Home',
  Work = 'Work',
}

export type ContactFormState = Omit<Contact, 'id'>;
