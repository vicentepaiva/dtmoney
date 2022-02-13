import { useState } from 'react';
import Modal from 'react-modal';
import {GlobalStyle} from './assets/styles/global'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';

import {  TransactionsProvider, useTransactions } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTrasactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);
  

  function handleOpenNewTrasactionModal() {
      setIsNewTrasactionModalOpen(true);
  }

  function handleCloseNewTrasactionModal() {
      setIsNewTrasactionModalOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModal}/>

      <Dashboard/>

      <NewTransactionModal 
      isOpen={isNewTrasactionModalOpen} 
      onRequestClose={handleCloseNewTrasactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}




