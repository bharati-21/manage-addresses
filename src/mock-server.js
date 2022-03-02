import {createServer, Model} from 'miragejs';
import faker from 'faker';

createServer({
  models: {
    address: Model,
  },

  routes() {
    this.namespace = 'api';
    this.timing = 3000;

    this.get('/addresses', (schema, request) => {
      return schema.addresses.all();
    });

    this.post('/addresses', (schema, request) => {
      let attrs = JSON.parse(request.requestBody).address;
      return schema.addresses.create(attrs);
    });

    this.patch("/addresses/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody).address;
      let id = request.params.id;
      let movie = schema.addresses.find(id);
    
      return movie.update(newAttrs);
    });


    this.delete("/addresses/:id", (schema, request) => {
      const id = request.params.id;

      let address = schema.addresses.find(id);
      return address.destroy();
    });

  },

  seeds(server) {
    [...Array(5)].forEach(array => {
      server.create('address', {id: faker.datatype.uuid(), city: faker.address.city()})
    })
    // server.create('address', {id:'1111', city: 'Lake city'})
  }
});