import React, { useState } from 'react'
import prostar from '../resources/prostars.json'

const starjson = prostar
const Home = () => {
    const [filterstar, getfilter] = useState([])



    const fulltable = prostar.map(ele =>
        <tr key={ele.id}>
            <td><img src={ele.pictureUrl} alt={ele.name} className={"picture"} /> </td>
            <td>{ele.name}</td>
            <td>{ele.popularity}</td>
            <td><button className={"delete"} onClick={() => deletestart(ele.id)}>Delete</button></td>
        </tr>)

    const sortbyname = () => {
        let temp = filterstar
        temp.length = 0
        console.log(prostar);
        prostar.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
        temp = [...prostar]
        getfilter(temp)


    }
    const sortbypopularity = () => {
        let temp = filterstar
        temp.length = 0
        prostar.sort((a, b) => a.popularity - b.popularity)
        temp = [...prostar]
        getfilter(temp)

    }

    const deletestart = (id) => {
        let temp = filterstar
        temp = temp.filter(ele => ele.id !== id)
        getfilter(temp)
    }
    const modifylist = filterstar ? filterstar.map(ele =>
        <tr key={ele.id}>
            <td><img src={ele.pictureUrl} alt={ele.name} className={"picture"} /> </td>
            <td>{ele.name}</td>
            <td>{ele.popularity}</td>
            <td><button className={"delete"} onClick={() => deletestart(ele.id)} >Delete</button></td>
        </tr>) : undefined


    console.log(prostar);

    return (
        <React.Fragment>
            <div className="buttons">
                <button onClick={null}>Get Random Contact</button>
                <button onClick={sortbyname}> Sort by Name</button>
                <button onClick={sortbypopularity}>Sort By Popularity</button>
            </div>
            <div className="tables">
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modifylist[0] ? modifylist : fulltable}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}


export default Home