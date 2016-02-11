
import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    name() { return faker.name.firstName(); },
    type(i) { return faker.list.random('phone', 'tablet', 'camera', 'laptop')(i); },
    producer(i) { return faker.list.random('Apple', 'Samsung', 'Lg', 'Huawei', 'Lenovo', 'Moto')(i); },
    price(i) { return faker.list.random(10, 20, 30, 40, 50, 60)(i);}
});

