const Table = ({ id, children }) => {
    const isIterable = children != null && typeof children[Symbol.iterator] === 'function'
    const childrenCopy = isIterable ? [...children] : children

    return (
        <div class="table-responsive">
            <table class="table table-bordered" id={id} width="100%" cellspacing="0">
                {isIterable ? childrenCopy.shift() : children}

                <tbody>
                    {isIterable ? childrenCopy : null}
                </tbody>
            </table>
        </div>
    )
}

export default Table