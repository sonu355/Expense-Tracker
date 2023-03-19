import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Expenses from './components/Expenses';
import TransactionList from './components/TransactionList';
import Form from './components/Form';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Expenses />
        <TransactionList />
        <Form />
      </div>
    </GlobalProvider>
  );
}
export default App;
