function Book({ id, auther, title, imgUrl, logTheProp, getBook }) {
  const logTheName = (e) => {
    console.log(title)
    console.log(auther)
  }
  const callTheFunc = (id) => {
    logTheName()
    getBook(id)
  }
  return (
    <div className='book'>
      <img className='img' src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <h4>{auther}</h4>
      <div>
        <button
          name={auther}
          style={{ cursor: 'pointer', marginRight: '1rem' }}
          onClick={() => callTheFunc(id)}
        >
          Logs title
        </button>
        <button
          name={auther}
          style={{ cursor: 'pointer' }}
          onClick={logTheProp}
        >
          Logs Prop
        </button>
      </div>
    </div>
  )
}
export default Book
