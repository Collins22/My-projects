/*const Applist = () => {
    return ( 
        <div className="app-list">
            {apps.map((app) => (
            <div class="app-preview" key={app.id}>
                    <h2>{app.title}</h2>
                    <p>It was developped by { app.author}</p>
            </div>
            ))}
        </div>
     );
}
 
export default Applist
*/
/*
=> (Outputing lists): This is the use of the array method(map) to circle through a list of values. its used when we are working with lots of values and in which more might be added or deleted later on, this method lets us circle through each option in the list of values. while using this method in react we should always remeber to add a key variable as thats what lets react keep track of all the values in the list. first you create the list  of values with their data we then go to the return part and use the (.map method) to circle through the values, remeber to always add an id (it can be property as far as its a unique one) to the list of values as that serves as the key value that react uses to keep record, then we can use the dynamic values template ( which is curly braces{} that will carry the variable name) together with the assigned name in the fuction we are trying to return.
*/


/*const Applist = ({apps, title}) => {
    
    return (
        <div className="app-list">
            <h2> { title }</h2>
            {apps.map((app) => (
            <div className="app-preview" key={app.id}>
                    <h2>{app.title}</h2>
                    <p>It was developped by { app.author}</p>
            </div>
            ))}
        </div>
    );
}

export default Applist



=> (Props): this is a ways to pass in data from one parent component to child component. its done by creating a property name on the child tag in the parent component once the tag is created we come over to the child component to link it. its done by giving our nameless function a name then, use the name to call the parent component.  In general props r used to connect diffrent components together. we can also simply achievie proping by using the destructuring method.
*/




const Applist = ({apps, title}) => {
    
    return (
        <div className="app-list">
            <h2> { title }</h2>
            {apps.map((app) => (
            <div className="app-preview" key={app.id}>
                    <h2>{app.title}</h2>
                    <p>It was developped by {app.author}</p>
            </div>
            ))}
        </div>
    );
}

export default Applist

/*
=> Functions as props: props can also be used in functions through the use of the filter method which is used in the parent component, the action to be detcted in first of all carried out in the child component where the name or attribute to be acted upon is chosen then, we move over to the parenet where we set up the variables and assign them to a function then use the set attribute to set the new attribute when its selected or acted upon. remeber to always set the variable in the parameter area of the child component.
*/