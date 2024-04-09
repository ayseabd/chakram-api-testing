const chakram = require('chakram'), expect= chakram.expect;

describe("User Tests", function() {

    it("GET /user/{username} Get User Info", function(){
    const response = chakram.post("https://petstore.swagger.io/v2/user/testqa41");
    expect(response).to.have.status(200);
    });

 //   it("TC0002 /v2/user/{userName}", function(){
        
 //   });

});