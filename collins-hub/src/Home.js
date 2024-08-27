import { useState, useEffect } from "react";
import Applist from "./Applist";

/*const Home = () => {
    const [apps, setApp] = useState([
        { title: 'First Web app', body: 'lorem ipsum latina......', author: 'Legacy', id: 1 },
        { title: 'Second Web App', body: 'lorem......', author: 'Collins', id: 2 },
        { title: 'Third Web App', body: 'lorem ipsum Eng......', author: 'Kaizen', id: 3 }
    ])
 

    return (
        <div className="home">
            <Applist />
        </div>
    );
}
 
export default Home

=>the useState hook: The use state hook lets us make a none reactive element to a reactive one. To use this state we need to make use of the import function then direct it from where its to collect the data which is from our react. We use the setName tag to set the name we would love to change to while also using the array destructuring method to deascribe which we want to change when using the setName tag. in finallity this is used when your writing a code that might change at a certain point in time. the set function is used to update the variable when need be to be changed
*/


/*const Home = () => {
    const [apps, setApp] = useState([
        { title: 'First Web app', body: 'lorem ipsum latina......', author: 'Legacy', id: 1 },
        { title: 'Second Web App', body: 'lorem......', author: 'Collins', id: 2 },
        { title: 'Third Web App', body: 'lorem ipsum Eng......', author: 'Kaizen', id: 3 }
    ])
 

    return (
        <div className="home">
            <Applist apps={apps} title= "All Apps!" />
            <Applist apps={apps.filter((apps) => apps.author === 'Collins')} title= "Collins's Apps!" />
        </div>
    );
}
 
export default Home


=> Re using Components: Componets can be reused by using the filter method which lets us filter through the selected varible while using the comparison operators to compare if they are able to work
*/


const Home = () => {
    const [apps, setApp] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    //the useEffect is used when a code is re-rendered as it tends to work once a code has been refreshed or simply a change has been made in the code. its mostly used in authentiation activities. we can also use these effects with dependencies; these dependences are used to stop the useEffect from running after the first renderiing has occured. we can also make use of dependencies through the  use of useState effect, which lets us add efect

    useEffect(() => {
        const abortConst = new AbortController();
        setTimeout(() => {
            fetch('http://localhost:8000/apps')
                .then(res => {
                    if (!res.ok) {
                        throw Error('Couldnt fetch wanted data.....');
                    }
                    return res.json()
                })
                .then(database => {
                    setError(null)
                    setApp(database)
                    setIsPending(false)
                })
                .catch((err) => {
                    setIsPending(false)
                    setError(err.message);
                })
        }, 1000);
    }, []);

    // the .then method is used to get a function once the promise has been resolved. (which generally means when we get a response from  the server). first of we get a response object (yhis is not actually a date its just a response obj), 
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
            {apps && <Applist apps={apps} title="All Apps!" />}
        </div>
    );

}

export default Home
