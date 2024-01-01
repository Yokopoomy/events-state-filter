const ProjectList = ({projects}) => {
    return (
        <div className="content">
            {
            projects.map(((project, index) => {
                const {img, category} = project;
                return (
                    <div key={index + img}>
                        <img
                            className="content_image"
                            src={img}
                            alt={category + " image"}
                            key={index + img + category}
                        />
                    </div >)
            }))}
        </div>
    );
};

export default ProjectList;