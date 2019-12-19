import React from 'react'
//if we are using jsx we need to import React
//so in components ALWAYS import React
import {
    Link, Route
} from 'react-router-dom'
//math is from props to topic
function Topic (props) {
    console.log('PROPS to TOPIC', props)
    return (

        <h3>{props.match.params.topicId}</h3>
    )
}


export default function Topics () {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to='/topics/rendering'>Rendering with React</Link>
                </li>
                 <li>
                     <Link to='/topics/components'>Componets</Link>
                </li>
                 <li>
                     <Link to='/topics/props-v-state'>Props vs State</Link>
                </li>

            </ul>

            <hr />

            <Route path='/topics/:topicId' component={Topic} />

        </div>
    )

}
