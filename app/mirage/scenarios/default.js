export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

    server.createList('model', 10);
    //server.create('user', {admin: true});
}
