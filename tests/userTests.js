const chakram = require('chakram'), expect= chakram.expect;

describe("User Tests", function() {

    it("GET /user/{username} Get User Info", function(){
    const response = chakram.get("https://petstore.swagger.io/v2/user/testqa41");
    expect(response).to.have.status(200);
    return chakram.wait();
    });

    it("GET /user/logout", function(){
        const response = chakram.get("https://petstore.swagger.io/v2/user/logout");
        expect(response).to.have.status(200);
        return chakram.wait();

        });

    it("GET /user/login", function(){
        const response = chakram.get("https://petstore.swagger.io/v2/user/login?username=test&password=123");
        expect(response).to.have.status(200);
        return chakram.wait();
        
        });
    
    it("POST /user/userCreate", function(){

        const data = {
            "id": 416161,
            "username": "testqa41",
            "firstName": "test",
            "lastName": "deneme",
            "email": "test@test.com",
            "password": "testqa123",
            "phone": "2121242",
            "userStatus": 0
          };

          const resData = {
            "code": 200,
            "type": "unknown",
            "message": "416161"
          };

        const response = chakram.post("https://petstore.swagger.io/v2/user", data);
        expect(response).to.have.status(200);

         return response.then(function(res){
            console.log(res.body);
            expect(res).to.have.status(200);
            expect(res).to.have.json(resData);
         })         
    });

    it("PUT /user userUpdate", function(){

        const data = {
            "id": 416161,
            "username": "testqa41",
            "firstName": "test",
            "lastName": "deneme",
            "email": "test@test.com",
            "password": "testqa123",
            "phone": "2121242",
            "userStatus": 0
          };

        const response = chakram.post("https://petstore.swagger.io/v2/user/testqa41", data);

            return response.then(function(res){
            expect(res).to.have.status(200);
        })         
    });

    it("DELETE /user/{username}", function(){
            const response = chakram.delete("https://petstore.swagger.io/v2/user/testqa41");
            expect(response).to.have.status(200);
            return chakram.wait();
        });



});