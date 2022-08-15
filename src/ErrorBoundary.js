import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = {hasError: false};

    static getDerivedStateFromError() {
        return {hasError : true}; 
    } 

    componentDidCatch(error,info) {
        console.error(error ,info)
    }
    
    render(){
        if(this.state.hasError) {
            return (
                <h2>
                    There was an error. Oh noo. what are going todo. JK . 
                    <Link to="/">Click Here</Link> to  go back to homepage or wait five second and we will doit for you, or not,im not you mom              
                </h2>
            )
        }

        return this.props.children;
    }
}


export default ErrorBoundary;