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


export default function Topics ({match}) {
    //console.log('props in topics', props);
    //exact is bringing logic - if no path chosen then show - Please select a topic
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                 <li>
                     <Link to={`${match.url}/components`}>Componets</Link>
                </li>
                 <li>
                     <Link to={`${match.url}/props-v-state`}>Props vs State</Link>
                </li>

            </ul>

            <hr />

            <Route path={`${match.path}/:topicId`} component={Topic} />

            <Route exact path={match.path} render={() => {
                return ( <h3>Please select a topic</h3> )
            }} />

        </div>
    )

}
