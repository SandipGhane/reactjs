import react, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }
    componentDidCatch(err,errInfo){
         logErrorToMyService(err, errInfo);
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundary
