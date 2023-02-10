import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { AppBox, SectionTitle } from './App.styled';

export const App = () => {
  return (
    <AppBox>
      <SectionTitle>Phonebook</SectionTitle>
      <ContactForm />
      <SectionTitle>Contacts</SectionTitle>
      <Filter />
      <ContactList />
    </AppBox>
  );
};