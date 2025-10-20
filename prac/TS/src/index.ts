function printId(id: string | number): void {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// Example usage
printId("hello");
printId(123);