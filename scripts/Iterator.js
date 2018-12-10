// Function to be able to use lambda funtions with objects

function Iterator(object) {
    this.object = object;

    // Map
    this.map = (mapper) =>{
        Object.keys(this.object).map(index => {
            return mapper(this.object[index]);
        });
        return new Iterator(this.object);
    };

    // For Each
    this.forEach = (operation) => {
        Object.keys(this.object).forEach(index => operation(this.object[index]));
        return new Iterator(this.object);
    };

    // Filter
    this.filter = (predicate) => {
        this.object = Object.keys(this.object)
            .filter( key => predicate(this.object[key]) )
            .reduce( (res, key) => Object.assign(res, { [key]: this.object[key] }), {} );
        return new Iterator(this.object);
    };

    // Reduce
    this.reduce = (operation,init) => {
        return Object.keys(this.object)
            .reduce((p,c,i) => operation(p, this.object[c]),init);
    };
    this.get = () => this.object;

    return {
        map: this.map,
        forEach: this.forEach,
        filter: this.filter,
        reduce: this.reduce
    };
}
