function ProjectCard({
    title,
    category,
    image,
    description,
    tags
}) {
    return (
        <div className="project-card">

            <img
                src={image}
                alt={title}
                className="project-image"
            />

            <div className="project-content">

                <span className="project-category">
                    {category}
                </span>

                <h3>{title}</h3>

                <p>{description}</p>

                <div className="project-tags">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="tag"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default ProjectCard;