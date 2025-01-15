import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div",{id:"parent"},
                [React.createElement("div",{id:"child"}, 
                [React.createElement("h1",{id:"h1tag"},"Hi I am H1 tag"),
                React.createElement("h2",{id:"h2tag"},"Hi I am H2 tag")
                ]
                ),
                React.createElement("div",{id:"child2"}, 
                        [React.createElement("h1",{id:"h1tag"},"Hi I am H1 tag"),
                        React.createElement("h2",{id:"h2tag"},"Hi I am H2 tag")
                        ]
                        )
        ])

const heading = React.createElement("h1",{id:'heading', xyz:'abc'},"Hello World From React");
        const root= ReactDOM.createRoot(document.getElementById('root'));
        root.render(parent);