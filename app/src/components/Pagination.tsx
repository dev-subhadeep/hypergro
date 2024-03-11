type TPagination = {
  pageNumber: number
  prevPage: React.MouseEventHandler
  nextPage: React.MouseEventHandler
}

const Pagination = ({ pageNumber, prevPage, nextPage }: TPagination) => {
  return (
    <div className="my-4 px-4 flex justify-end items-center">
      <button
        className="shadow-sm px-4 py-2 font-semibold disabled:opacity-30"
        onClick={prevPage}
        disabled={pageNumber === 1}
      >
        Prev
      </button>
      <span className="px-4 font-bold">{pageNumber}</span>
      <button
        className="shadow-sm px-4 py-2 font-semibold disabled:opacity-30"
        onClick={nextPage}
        disabled={pageNumber === 10}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
