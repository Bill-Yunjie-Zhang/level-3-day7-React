import React from 'react'
import cityData from 'all-the-cities'
import distanceFrom from 'distance-from'
import { Button } from 'semantic-ui-react'

const currentCity = cityData.find(c => c.name === "Chengdu")
const closeCities = cityData.filter(c => distanceFrom(currentCity.loc.coordinates).to(c.loc.coordinates) < 100)

class App extends React.Component{
    render(){
        return <div>
            {closeCities.map(c => <div><Button>{c.name}</Button></div>)}
        </div>
    }
}

export default App