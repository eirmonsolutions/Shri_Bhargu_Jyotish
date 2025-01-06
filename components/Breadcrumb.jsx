import React from 'react';

const Breadcrumb = ({ items, title }) => {
    return (
        <section className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcrumb-content">
                            <h1>{title}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    {items.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`breadcrumb-item ${
                                                index === items.length - 1 ? 'active' : ''
                                            }`}
                                            aria-current={index === items.length - 1 ? 'page' : undefined}
                                        >
                                            {index === items.length - 1 || !item.url ? (
                                                item.label
                                            ) : (
                                                <a href={item.url}>{item.label}</a>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;
