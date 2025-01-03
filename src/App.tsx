import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { Header } from './components/Header';
import { TestForm } from './components/TestForm';

// RTL cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

// RTL theme
const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'inherit',
  },
  palette: {
    primary: {
      main: '#f97316',
    },
  },
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="min-h-screen bg-orange-50">
          <Header />
          <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <TestForm />
          </main>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;