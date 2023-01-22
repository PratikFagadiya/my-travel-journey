import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";
import VisitListItem from "./components/VisitListItem";

function App() {
    return (<div className="App">
        <NavHeader navName={'My Travel Journey'}/>
        <VisitListItem/>
        <VisitListItem/>
        <Footer name={'Pratik Fagadiya'}/>
    </div>);
}

export default App;