import { useState } from 'react';
import { Navbar, Search, SummarizedComponent } from './Components';

import './App.css'
import { Toaster } from 'react-hot-toast';

function App() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  return (
    <div className="App">
      <Toaster />
      <Navbar />
      <Search setContent={setContent} setLoading={setLoading} />
      <SummarizedComponent content={content} loading={loading} />
    </div>
  )
}

export default App
