export default function SectionBlock({ id, title, className = '', children }) {
    return (
        <section id={id} className={`home-section ${className}`.trim()} data-anchor={`#${id}`}>
            <h2 className="title">{title}</h2>
            <div className="section-body">{children}</div>
        </section>
    );
}
