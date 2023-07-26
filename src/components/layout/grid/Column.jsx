const Column = ({ span, children, className }) => <div className={`col-lg-${span} ${className}`}>{children}</div>

export default Column