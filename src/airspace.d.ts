/**
 * Adds the Airspace debug and execute literals to core type prototypes.
 */
interface AirspaceExtension<T> {
    /**
     *  The Airspace debug function. Prints out this value to the console.
    * @see {@link https://github.com/TodePond/Airspace#debug-operator}
     */
    d: () => void;

    /** 
     * The Airspace execute literal. Executes func, supplying the current object and returns the result
     * @see {@link https://github.com/TodePond/Airspace#execute-operator}
     */
    x: (func: (self: T) => any) => any;
}


interface Boolean extends AirspaceExtension<Boolean> { }
interface Number extends AirspaceExtension<Number> { }
interface String extends AirspaceExtension<String> { }
interface Function extends AirspaceExtension<Function> { }
interface Object extends AirspaceExtension<Object> { }
