import React from 'react';
import { StatusBar } from 'expo-status-bar';  // Optional: Manages status bar appearance
import Navigation from './navigation/Navigation';  // Import Navigation component

export default function App() {
  return (
    <>
      <StatusBar style="auto" />  {/* Keeps the status bar auto */}
      <Navigation />  {/* Displays the navigation */}
    </>
  );
}
