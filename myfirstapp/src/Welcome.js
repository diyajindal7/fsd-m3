function Welcome(props){
    return(
        <div>
            <h2>student details</h2>
            <p>Name:{props.name}</p>
            <p>Age:{props.age}</p>
        </div>
    );
}
export default Welcome;