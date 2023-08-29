import React, { useEffect, useState } from "react";
import "./App.css";
const App=()=>{
    const [Data,setData]=useState([]);
    const CovidData=async()=>{
        var res=await fetch("https://data.covid19india.org/data.json");
        var actualData=await res.json();
        setData(actualData.statewise);
        console.log(actualData.statewise);
    }
    useEffect(()=>{
        CovidData();
    },[])
    return (
        <>
        <h1 className="text-center bg-secondary">Covid 19 Data forecast</h1>
            <div className="container-fluid table-responsive">
                <table className="table table-hover table-bordered table-striped">
                    <thead className="bg-dark text-white">
                        <th>state</th>
                        <th className="text-center fw-bold">active</th>
                        <th className="text-center fw-bold">confirmed</th>
                        <th className="text-center fw-bold">deaths</th>
                        <th className="text-center fw-bold">recovered</th>
                    </thead>
                    <tbody>
                    {Data.map((val,index)=>{
                        return (
                            <tr key={index}>
                                <td>{val.state}</td>
                                <td className="text-center ">{val.active}</td>
                                <td className="text-center ">{val.confirmed}</td>
                                <td className="text-center ">{val.deaths}</td>
                                <td className="text-center ">{val.recovered}</td>
                            </tr>
                        );
                    })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default App;