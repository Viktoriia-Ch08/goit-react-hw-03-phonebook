import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { Container, Headline, Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitData = data => {
    this.state.contacts.some(element => element.name === data.name)
      ? alert('This contact has already exists')
      : this.setState({
          contacts: [...this.state.contacts, data],
        });
  };

  filterInputNames = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  checkExistingContact = data => {
    this.state.contacts.name === data.name
      ? alert('This contact has already existed')
      : this.setState({
          contacts: [...this.state.contacts, data],
        });
  };

  deleteContacts = contactsToDelete => {
    this.setState({
      contacts: this.state.contacts.filter(
        element => !contactsToDelete.includes(element)
      ),
    });
  };

  render() {
    return (
      <Container>
        <Headline>Phonebook</Headline>
        <ContactForm onSubmit={this.formSubmitData} />
        <Title>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.filterInputNames} />
        <ContactsList
          contacts={this.state.contacts}
          filter={this.state.filter}
          deleteContacts={this.deleteContacts}
        />
      </Container>
    );
  }
}

export default App;
