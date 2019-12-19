import React from 'react'
//if we are using jsx we need to import React
//so in components ALWAYS import React
import {
    Link, Route
} from 'react-router-dom'
//math is from props to topic
function Topic ({match}) {
    //console.log('PROPS to TOPIC', props)
    return (

        <h3>{match.params.topicId}</h3>
    )
}


export default function Topics (props) {
    //console.log('props in topics', props);
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${props.match.url}/rendering`}>Rendering with React</Link>
                </li>
                 <li>
                     <Link to={`${props.match.url}/components`}>Componets</Link>
                </li>
                 <li>
                     <Link to={`${props.match.url}/props-v-state`}>Props vs State</Link>
                </li>

            </ul>

            <hr />

            <Route path='/topics/:topicId' component={Topic} />

        </div>
    )

}
