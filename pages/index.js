// pages/index.js
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { Container, Typography } from '@mui/material';
import AddPantryItem from '../components/AddPantryItem';
import PantryList from '../components/PantryList';
import SearchBar from '../components/SearchBar';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const Home = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'pantryItems'));
      const itemsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsData);
      setFilteredItems(itemsData);
    };

    fetchItems();
  }, []);

  const addItem = async (item) => {
    const docRef = await addDoc(collection(db, 'pantryItems'), item);
    const newItem = { id: docRef.id, ...item };
    setItems([...items, newItem]);
    setFilteredItems([...items, newItem]);
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'pantryItems', id));
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    setFilteredItems(newItems);
  };

  const handleSearch = (query) => {
    const filtered = items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <Container>
      <Head>
        <title>Pantry Tracker</title>
        <meta name="description" content="A simple pantry management application" />
      </Head>
      <Typography variant="h2" component="h1" sx={{ my: 4 }}>
        Pantry Tracker
      </Typography>
      <AddPantryItem onAdd={addItem} />
      <SearchBar onSearch={handleSearch} />
      <PantryList items={filteredItems} onDelete={deleteItem} />
    </Container>
  );
};

export default Home;
