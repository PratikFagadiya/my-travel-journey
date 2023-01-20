import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import VisitListItem from "./components/VisitListItem";

function App() {
    return (<div className="App">
        <NavHeader navName={'My Travel Journey'}/>
        <VisitListItem/>
        <Footer name={'Pratik'}/>
    </div>);
}

export default App;