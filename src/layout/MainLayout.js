import React from 'react';
import Nav from "../components/Nav";

const MainLayout = (props) => {
    return (
        <>
            <Nav />
            {props.children}
        </>
    );
}

export default MainLayout;