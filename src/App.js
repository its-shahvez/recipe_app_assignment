// src/App.js
import React, { useState } from 'react';
import RecipeTable from './components/RecipeTable';
import RecipeDetailDrawer from './components/RecipeDetailDrawer';
import './App.css';

function App() {
  
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  
  const handleRowClick = (recipe) => {
    setSelectedRecipe(recipe); 
    setIsDrawerOpen(true);     
  };

 
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="App">
      <RecipeTable onRowClick={handleRowClick} />
      <RecipeDetailDrawer 
        recipe={selectedRecipe} 
        open={isDrawerOpen} 
        onClose={handleDrawerClose} 
      />
    </div>
  );
}

export default App;