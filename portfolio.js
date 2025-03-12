(function(){
    emailjs.init({
      publicKey: "XWco4Uit2gqRKgYa1",
    });
 })();

let name = document.getElementById("name");
let contact = document.getElementById("contact");
let email = document.getElementById("email");
let message = document.getElementById("message");
let form = document.getElementById('Contactform')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // sendData();
      emailjs.send("service_ji4veun", "template_ddceck9", {
        from_name: `${name.value}`,
        to_name: "Anish",
        message: `${message.value}`,
      });
})

function sendData(){
    fetch('https://sheetdb.io/api/v1/ubomyi4sizqfo', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'id': "INCREMENT",
                    'name': name.value,
                    'contact': contact.value,
                    'email': email.value,
                    'message': message.value
                }
            ]
        })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
}