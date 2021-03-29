import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const ScrollBar = (props) => {
    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
            backgroundColor: "#46b04a",
            borderRadius: "10px",
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
    };
    return (
        <Scrollbars
            renderThumbHorizontal={renderThumb}
            renderThumbVertical={renderThumb}
            {...props}
        />
    );
};

export default ScrollBar;
