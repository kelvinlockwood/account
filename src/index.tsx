import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import WalletProvider from 'decentraland-dapps/dist/providers/WalletProvider'
import ModalProvider from 'decentraland-dapps/dist/providers/ModalProvider'
import TranslationProvider from 'decentraland-dapps/dist/providers/TranslationProvider'

import './setup'
import './themes'

import { store, history } from './modules/store'
import { Routes } from './components/Routes'
import * as locales from './locales'
import * as modals from './components/Modals'

import './index.css'

import reportWebVitals from './reportWebVitals'

const component = (
  <Provider store={store}>
    <TranslationProvider locales={Object.keys(locales)}>
      <WalletProvider>
        <ModalProvider components={modals}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </ModalProvider>
      </WalletProvider>
    </TranslationProvider>
  </Provider>
)

ReactDOM.render(component, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
