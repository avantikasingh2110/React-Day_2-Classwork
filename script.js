const App = React.createElement(
    "div", 
    {className: "mainContainer"},
    React.createElement(
        "h1",
        { className: "heading" },
        "Learn Web Development"
    ),
    React.createElement(
        "p",
        { className: "paragraph1" },
        "Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites."
    ),
    React.createElement(
        "p",
        { className: "paragraph2" },
        'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ',

        React.createElement(
            "a",
            { href: "https://developer.mozilla.org/en-US/" },
            "the rest of MDN"
        ),
        React.createElement(
            "span",
            { className: "spanTag" },
            ", and other intermediate to advanced resources that assume a lot of previous knowledge."
        )
    ),
    React.createElement(
        "p",
        { className: "paragraph3" },
        `If you are a complete beginner, web development can be challenging — we will hold
        your hand and provide enough detail for you to feel comfortable and learn the topics
        properly. You should feel at home whether you are a student learning web
        development (on your own or as part of a class), a teacher looking for class
        materials, a hobbyist, or someone who just wants to understand more about how
        web technologies work.`
    )

)




const rootDiv = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(rootDiv);
reactRoot.render(App);