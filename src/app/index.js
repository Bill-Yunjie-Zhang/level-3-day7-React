import React from 'react' // import react
import cityData from 'all-the-cities' // import all-the-cities
import distanceFrom from 'distance-from' // import distance-from
import { Button } from 'semantic-ui-react' // import semantic-ui-react

const currentCity = cityData.find(c => c.name === "Chengdu") // find Chengdu
const closeCities = cityData.filter(c => distanceFrom(currentCity.loc.coordinates).to(c.loc.coordinates) < 100) //find the city within 100 km from chengdu

class App extends React.Component{ // write a class named App
    render(){ // render is required in a React class
        return <div> 
            {closeCities.map(c => <div><Button>{c.name}</Button></div>)} 
        </div>
    } // return should be in render, map out each city name into a button
}

export default App // export App