{
    // problem 1 
    const problem1 = (value: string | number): number | string => {
        if (typeof value === "string") {
            return value.length;
        } else if (typeof value === "number") {
            return value * value;
        } else {
            throw new Error("Value must be a string or a number");
        }
    }
    const stringResult = problem1("amit");
    const numberResult = problem1(5);

    // console.log("String Result:", stringResult);
    // console.log("Number Result:", numberResult);


    //Problem 2
    interface Person {
        phone?: string;
        address?: {
            city: string;
            street: string;
        }
    }

    const getAddressCity = (person: Person): string | undefined => {
        return person.address?.city
    }
    // const person: Person = {
    //     address: {
    //         city: "Cox's Bazar",
    //         street: 'Dolphine Moor',
    //     },
    //     phone: "01000000"
    // }

    // console.log(getAddressCity(person));


    // Problem 3
    class Cat {

    }

    const isCat = (animal: Cat): animal is Cat => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal: Cat) => {
        if (isCat(animal)) {
            return "yes, it's a cat."
        }
        else {
            return "no, it's not a cat."
        }
    }
    const cat = new Cat();
    const dog = {
    }
    // console.log(getAnimal(cat));

    //Problem 4

    const Problem4 = (mixedData: (string | number)[]): number => {
        let total = 0;
        mixedData.forEach((item) => {
            if (typeof item === 'number') {
                total += item;
            }
        });
        return total;
    }
    const mixedData: (string | number)[] = [10, 'two', 3, 'four', 5]
    // console.log(Problem4(mixedData));

    // Problem 5
    interface Car {
        make: string,
        model: string,
        year: number,
    }

    interface Driver {
        name: string,
        licenseNumber: number
    }

    const CombinedInterface = (car: Car, driver: Driver) => {
        return {
            ...car,
            ...driver
        }
    }
    const car: Car = {
        make: 'Honda',
        model: 'Civic',
        year: 2019
    }

    const driver: Driver = {
        name: 'Amit',
        licenseNumber: 123456
    }
    console.log(CombinedInterface(car, driver));

    // Problem 6
}