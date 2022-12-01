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
    else if (Userspassword_Length <=0){
        document.querySelector('.input_wrong').innerText = 'Password is required......'
    }
    else if(Userspassword_Length <=5){
        document.querySelector('.input_wrong').innerText = 'Password is too Short.....'
    }
    else if(Userspassword_Length <=10){
        document.querySelector('.input_wrong').innerText = 'Password is Moderate.....'
    }
    else if(Userspassword_Length <=20){
        document.querySelector('.input_wrong').innerText = ''
        document.querySelector('.input_success').innerText = 'Password is Strong & Submitted '
    }
    else{
       document.querySelector('.input_wrong').innerText = 'Wrong Input!!!!!' 
    }
    

}