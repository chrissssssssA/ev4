import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App} from './app';
import './style.css';

const container = document.getElementById('root')
const root = createRoot(container); 
root.render(<App />);