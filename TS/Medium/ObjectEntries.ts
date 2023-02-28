// ObjectEntries

// Implement the type version of Object.entries


interface Model {
    name: string;
    age: number;
    locations: string[] | null;
}
type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];


type ObjectEntries<T> = {
    [P in keyof T]-?:  [P, T[P] extends infer R | undefined ? R : T[P]];
}[keyof T];