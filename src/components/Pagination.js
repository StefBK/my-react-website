const Pagination = ({ page, nextPage }) => (
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className={"page-item " + (page < 2 ? "disabled" : "")}>
                <a className="page-link" href="#" onClick={() => nextPage(page - 1)}>Previous</a>
            </li>
            {
                (page - 2 > 0) ? (<li className="page-item">
                    <a className="page-link" href="#" onClick={() => nextPage(page - 2)}>{page - 2}</a>
                </li>) : null
            }
            {
                (page - 1 > 0) ? (<li className="page-item">
                    <a className="page-link" href="#" onClick={() => nextPage(page - 1)}>{page - 1}</a>
                </li>) : null
            }
            <li className="page-item active">
                <a className="page-link" href="#" onClick={() => nextPage(page)}>{page}</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" onClick={() => nextPage(page + 1)}>{page + 1}</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" onClick={() => nextPage(page + 2)}>{page + 2}</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#" onClick={() => nextPage(page + 1)}>Next</a>
            </li>
        </ul>
    </nav>
)

export default Pagination;