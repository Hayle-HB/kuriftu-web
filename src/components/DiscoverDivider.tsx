
const DiscoverDivider = () => {
    return (
        <div
            style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0",
            }}
        >
            {/* Left Line */}
            <hr
                style={{
                    flex: 1,
                    border: "none",
                    borderTop: "1px solid black",
                    margin: "0",
                }}
            />
            {/* Center Icon */}
            <span
                style={{
                    margin: "0 10px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "black",
                }}
            >
                ✦
            </span>
            {/* Right Line */}
            <hr
                style={{
                    flex: 1,
                    border: "none",
                    borderTop: "1px solid black",
                    margin: "0",
                }}
            />
        </div>
    );
};

export default DiscoverDivider;
