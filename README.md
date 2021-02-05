## Context in React

### Step-1
```
it is same as reducer function in Redux.
1. create a Provider using React.createContext()
2. pass state and functions to the 'value' object.
```

```
class MyProvider extends Component {
    state = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 }
        }
    }
    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }

}
```

### step-2

```
1. Wrapped all components thats need to an global state.
```

```
<MyProvider>
    <Comp-1/>
    <Comp-2/>
    <Comp-3>
</MyProcider>
```

### step-3
```
1. Get global state in any coponents thats wrapped in Provder.
and manipulates state easily.
```

```
 <MyContext.Consumer>
        {
            context => (
                <React.Fragment>
                    <h4>Cars:</h4>
                    {Object.keys(context.cars).map(carID => (
                        <Car
                            key={carID}
                            name={context.cars[carID].name}
                            price={context.cars[carID].price}
                            incrementPrice={() => context.incrementPrice(carID)}
                            decrementPrice={() => context.decrementPrice(carID)}
                        />
                    ))}
                </React.Fragment>
            )
        }
    </MyContext.Consumer>
```
