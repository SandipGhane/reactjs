## Error Boundary

### step-1
```
Error boundary react components that catch js errors anywhere in their child components tree.
logs those errors and fallback UI instead of the whole component tree crashed.
```

#### methods used
```
1. static getDerivedStateFromError()

2. componentDidError()

```

#### Error Boundary not working
```
1. Event Handler
2. Asynchronous functions
3. Server side rendering

```