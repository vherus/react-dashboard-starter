const PageHeader = ({ text, children }) => {
    return (
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">{text}</h1>
            {children}
        </div>
    )
}

export default PageHeader
