import React from "react";
// helper function that needs to be imported for use
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from "../PhotoList";
// import photo from "../../assets/small/commercial/0.jpg";

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    // instead of hard coding each category name/description, will create an object
    // and render it in the component
    // const currentCategory = {
    //     name: "commercial",
    //     description:
    //         "Photos of grocery stores, food trucks, and other commercial projects",
    // };
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList />
        </section>
    );
}
export default Gallery;