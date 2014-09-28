describe('Working with Contexts', function() {

  it('change the context of a function call', function() {
    // Write a function "fullName" that concatenates the <firstName> and
    // <lastName> then executed in the context of "person"
    var personFullName;
    var person = {
      firstName: 'Jhon',
      lastName: 'Doe'
    }

    assert.equal(personFullName, 'Jhon Doe')
  })

  it('change the context of a function call -call-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };

    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })

  it('change the context of a function call -apply-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };

    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })

  it('change the context of a function call -bind-', function() {
    // Write a function "accelerate" that takes the Km/h and the time in seconds
    // and returns '<modelName>' accelerates to <Km/h> in <seconds> seconds
    var acceleration;
    var mazda = {
      model: 'mazda 3'
    };

    assert.equal(acceleration, 'mazda 3 accelerates to 150 in 30 seconds');
  })
})
