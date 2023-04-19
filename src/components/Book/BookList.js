// import { img1 } from './images/1.jpg'
import Book from './Book'

const getBook = (id) => {
  const newBook = books.filter((book) => book.id === id)

  console.log(newBook)
}

const prop = 'send me down to components'
const logTheProp = () => {
  console.log(prop)
}

const books = [
  {
    id: 1,
    title: 'You cann not Joke About That: Why Everything ',
    auther: 'Kat Timpf',
    imgUrl: './images/1.jpg',
  },
  {
    id: 2,
    title: 'The Last Thing He Told Me: A Novel ',
    auther: 'Laura Dave',
    imgUrl: './images/2.jpg',
  },
  {
    id: 3,
    title: 'The Wager: A Tale of Shipwreck, Mutiny and ',
    auther: 'David Grann',
    imgUrl: './images/3.jpg',
  },
  {
    id: 4,
    title: 'The Montessori Toddler: A Parents Guide to ',
    auther: 'Simone Davies',
    imgUrl: './images/4.jpg',
  },
  {
    id: 5,
    title: 'The Wager: A Tale of Shipwreck, Mutiny and ',
    auther: 'David Grann',
    imgUrl: './images/3.jpg',
  },
  {
    id: 7,
    title: 'The Last Thing He Told Me: A Novel ',
    auther: 'Laura Dave',
    imgUrl: './images/1.jpg',
  },
]

function BookList() {
  return (
    <div className='booklist '>
      {books.map((book) => {
        return (
          <Book
            key={book.id}
            {...book}
            logTheProp={logTheProp}
            getBook={getBook}
          />
        )
      })}
    </div>
  )
}
export default BookList
