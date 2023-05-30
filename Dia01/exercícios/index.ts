import Client from "./classes/Client";
import Order from "./classes/Order";
import OrderItem from "./classes/OrderItem";
import Student from "./classes/Student";

// const student1 = new Student(1, "Maria da Silva", [4, 4, 6, 6], [4, 6]);

// const student2 = new Student(2, "José", [4, 4, 6, 6], [4, 6]);

// const student3 = new Student(3, "Pirulito", [5, 5, 1, 2], [1, 8]);

// console.log(student3.getMediaDasNotas());

const client = new Client('Alex')

const item1 = new OrderItem('Pão', 20)
const item2 = new OrderItem('Suco de goiaba', 5)
const item3 = new OrderItem('Cú do zé', 1)

const order = new Order(client, [item1, item2, item3], 'money', 0.2)



console.log(order);


