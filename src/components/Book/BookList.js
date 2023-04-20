import { books } from '../../constants/index'
import Book from './Book'

const getBook = (id) => {
  const newBook = books.filter((book) => book.id === id)

  console.log(newBook)
}

const prop = 'send me down to components'
const logTheProp = () => {
  console.log(prop)
}

function BookList() {
  return (
    <div className='booklist '>
      {books.map((book, idx) => {
        return (
          <Book
            key={book.id}
            {...book}
            number={idx}
            logTheProp={logTheProp}
            getBook={getBook}
          />
        )
      })}
    </div>
  )
}
export default BookList
