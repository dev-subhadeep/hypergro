type TPagination = {
  pageNumber: number
  prevPage: React.MouseEventHandler
  nextPage: React.MouseEventHandler
}

const Pagination = ({ pageNumber, prevPage, nextPage }: TPagination) => {
  return (
    <div className="my-4">
      <button
        className="shadow-sm px-4 py-2"
        onClick={prevPage}
        disabled={pageNumber === 1}
      >
        Prev
      </button>
      <span className="px-4">{pageNumber}</span>
      <button
        className="shadow-sm px-4 py-2"
        onClick={nextPage}
        disabled={pageNumber === 10}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
