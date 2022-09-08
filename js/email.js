/* EmailJS */

function validate()
{
    let name = document.querySelector('.name');
    let lastName = document.querySelector('.lastName');
    let email = document.querySelector('.email-send');
    let phone = document.querySelector('.tel');
    let msg = document.querySelector('.msg');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {

        e.preventDefault();

        if(name.value == "" || lastName.value == "" || email.value == ""|| phone.value == "" || msg.value == "")
        {
            emptyerror();
        }
        else
        {
            sendmail(name.value, lastName.value, email.value, phone.value, msg.value);
            success();
        }

    });
}

validate();

/* Sweet Alert */

function sendmail(name,lastName,email,phone,msg)
{

    emailjs.send("service_fqie3wc","template_jjgb2lg",
    {
        phone: phone,
        to_name: name,
        lastname: lastName,
        from_name: email,
        message: msg
    });

}

function emptyerror()
{

    swal(
    {
        title: "Erreur !",
        text: "Un ou plusieurs champs ne sont pas remplis",
        icon: "error"
    });

};

function success()
{

    swal(
    {
        title: "Envoyé !",
        text: "L'email a bien été envoyé !",
        icon: "success"
    });

};