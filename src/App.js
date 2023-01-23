import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import VisitListItem from "./components/VisitListItem";
import tourData from "./data/Data";
import React from "react";
import './App.css'

function App() {

    const visitData = tourData.map(item => {
        return (<VisitListItem
            key={item.id}
            title={item.title}
            country={item.country}
            placeLink={item.placeLink}
            img={item.img}
            startDate={item.duration.startDate}
            endDate={item.duration.endDate}
            description={item.description}
        />)
    })

    return (<div className="App">
        <NavHeader navName={'My Travel Journey'}/>
        {visitData}
        <Footer name={'Pratik Fagadiya'}/>
    </div>);
}

export default App;