import React from 'react';
import CreateList from './components/CreateList';
import List from './components/List';

const App = () => (
    <>
        <h1>To-Do application</h1>
        <CreateList />
        <List name="Training" />
    </>
)

export default App;