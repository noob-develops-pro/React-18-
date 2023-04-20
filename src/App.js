import BookList from './components/Book/BookList'

function Greetings() {
  return <h1>Hello</h1>
}

function GreetPerson() {
  return <h1>Usman</h1>
}

function App() {
  return (
    <div>
      <h1
        style={{ display: 'grid', justifyContent: 'center', marginTop: '1rem' }}
      >
        Best Seller Books
      </h1>
      <BookList />
    </div>
  )
}

export default App
