const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.name;
  const telefone = order.phoneNumber;
  const endereco = Object.values(order.address);
  const receptor = order.order.delivery.deliveryPerson;
  return `Olá ${receptor}, entrega para: ${name}, Telefone: ${telefone}, ${endereco}`;

}

console.log(customerInfo(order));
console.log(order.order.drinks.coke.type);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const nome = order.name;
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;
  const valor = order.payment.total;
  return `Olá ${nome}, o total do seu pedido de ${pizzas} e ${bebida} é R$ ${valor},00`
}

console.log(orderModifier(order));