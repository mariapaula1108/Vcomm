import React, { Component } from 'react'
import safetyData from '../result.geojson'

class safetyEvents extends Component{
    render(){
        return (
            <div>
                {safetyData.map((safetyDetail, index) => {
                    return <h1>{safetyDetail.shem_angli}</h1>
                })}
            </div>
        )
    }

}

export default safetyEvents