console.log('testing')

function sarveen(){

    let Persons_Name = document.querySelector('#user_person').value
    console.log(Persons_Name)

    let Personsname_Length = Persons_Name.length
    console.log(Personsname_Length)


    let Users_Mail = document.querySelector('#user_email').value
    console.log(Users_Mail)

    let Usersmail_Length = Users_Mail.length
    console.log(Usersmail_Length)

    let emailStructure = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    console.log(emailStructure)

    let Users_Password = document.querySelector('#user_password').value
    console.log(Users_Password)

    let Userspassword_Length = Users_Password.length
    console.log(Userspassword_Length)



    if(Personsname_Length <=3){
        document.querySelector('.input_wrong').innerText = 'User name should contain 3 character...'
    }
    else if(!Users_Mail.match(emailStructure)){
        document.querySelector('.input_wrong').innerText = 'Enter valid e-mail...'
    }
    else if(Userspassword_Length <=8){
        document.querySelector('.input_wrong').innerText = 'require minimum 8 character'
    }
    else{
        document.querySelector('.input_success').innerText = 'Successfull'
    }
    // else{
        // document.querySelector('input_success').innerText = 'success'
    // }
}