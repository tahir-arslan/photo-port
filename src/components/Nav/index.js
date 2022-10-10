// going to use `useEffect( )` instead of `useState( )`
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

// function Nav() {
//     const [categories] = useState([
//         {
//             name: 'commercial',
//             description: 'Photos of grocery stores, food trucks, and other commercial projects',
//         },
//         { name: 'portraits', description: 'Portraits of people in my life' },
//         { name: 'food', description: 'Delicious delicacies' },
//         { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
//     ]);
//      // inserting hook to render updated component (will highlight active nav)
//      const [currentCategory, setCurrentCategory] = useState(categories[0]);
function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;
    // note: first arg is callback, second arg is an array with a single element `currentCategory`
    // second arg directs hook to rerender component on change of value of its state
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="camera">
                        {" "}
                        📸
                    </span>{" "}
                    Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a
                            href="#about"
                        >
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        // short-circuit expression: currentCategory is set by mouse click. while mapping, if 
                        // currentCategory.name === category.name from nav is true, string 'navActive' will be
                        // returned. in this case, it will be inserted and become a class to change the color
                        // of the active nav
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;