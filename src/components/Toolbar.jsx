const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
        <div className="toolbar">
            {filters.map((filter) =>
                <button
                    type="button"
                    className={"button"}
                    onClick={() => onSelectFilter(filter)}
                    disabled={filter === selected}
                    key={filter}
                >
                {filter}
                </button>
            )}
        </div>
    );
};

export default Toolbar;