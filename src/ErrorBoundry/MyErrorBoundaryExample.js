import React from "react";

export class MyErrorBoundaryExample extends React.Component {
    state = {
        error: null
    };

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, info) {
        console.log({ error, info })
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <h2>{this.state.error.message}</h2>
                    <p>Something went wrong</p>
                </>);
        }
        return this.props.children;
    }
}