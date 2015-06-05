export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  this.namespace = 'api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */

    // GET shorthands

    // Collections
    this.get('/lists');
    // this.get('/lists', 'list');
    // this.get('/lists', ['lists', 'addresses']);

    // Single objects
    this.get('/lists/:id');
    // this.get('/lists/:id', 'user');
    // this.get('/lists/:id', ['contact', 'addresses']);

  /*
    POST shorthands

    this.post('/lists');
    this.post('/lists', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/lists/:id');
    this.put('/lists/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/lists/:id');
    this.del('/lists/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/lists/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection} // returns all the data defined in /app/mirage/fixtures/{collection}.js
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/lists/:id', function(db, request) {
      var contactId = +request.params.id;
      var contact = db.lists.find(contactId);
      var addresses = db.addresses
        .filterBy('contact_id', contactId);

      return {
        contact: contact,
        addresses: addresses
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
