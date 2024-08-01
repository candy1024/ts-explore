interface One {
    a: 1;
    b: 2;
    fun: () => void
}

interface Two {
    c: 3;
    d: 4;
}


type Combine<A extends Record<string, any>, B extends Record<string, any>> = {
    [Key in keyof (A & B)]: Key extends keyof A
    ? A[Key]
    : Key extends keyof B
    ? B[Key]
    : never;
}

type res = Combine<One, Two>


export default Combine;