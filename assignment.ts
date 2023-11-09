{
    // problem 1 
    const problem1 = (value: string | number): number | string => {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value * value;
        }
    }
    const stringResult = problem1("amit sengupta");
    const numberResult = problem1(10);

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
    // console.log(getAnimal(dog));

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
    const mixedData: (string | number)[] = [0, 'two', 3, 'four', 5]
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
    // console.log(CombinedInterface(car, driver));

    // Problem 6
    const problem6 = (params: unknown) => {
        if (Array.isArray(params) && params.every((item) => typeof item === 'number')) {
            let sum = 0;
            params.forEach((item) => (sum += item))
            console.log('sum of number', sum);
        } else {
            console.log('parameter is not an array of number');
        }
    }
    // problem6([10, 20, 30, 40])
    // problem6(['apple', 'mango'])

    //Problem 7
    const findFirstOccurrence = <T>(array: T[], value: T): number => {
        return array.indexOf(value);
    };

    const numbers: number[] = [1, 2, 3, 4, 5, 2];

    const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

    const targetNumber = 5;

    const targetString = "date";

    const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

    const indexInStrings = findFirstOccurrence(strings, targetString);

    // console.log(indexInNumbers); 
    // console.log(indexInStrings);  

    //problem 8
    interface Product {
        name: string,
        price: number,
        quantity: number
    }

    const CalculateTotalCost = (products: Product[]): number => {
        let totalCost = 0;
        products.map((product) => {
            totalCost += product.price * product.quantity;
        })

        return totalCost;
    }

    const Shopping: Product[] = [
        {
            name: "match",
            price: 10,
            quantity: 5
        },
        {
            name: "apple",
            price: 10,
            quantity: 3
        }
    ]

    // console.log(CalculateTotalCost(Shopping));
}