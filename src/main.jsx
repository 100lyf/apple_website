import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://0ebce77c4235657b5521fc59ec1cba73@o4510083116826624.ingest.us.sentry.io/4510083120889856",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)