function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_qpcuap8";
    const templateID = "template_i7u0qgt";

    emailjs
        .send(serviceID,templateID,params)
        .then((res) => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message sent successfully. Ps. Ignore alert of @")
            })
        .catch((err) => console.log(err));
}