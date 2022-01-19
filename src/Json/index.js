import './index.css';

const ak = [{
    "name": "hello",
    "Email": "hello@gmail.com",
    "Password": "123"
},
{
    "name": "world",
    "Email": "world@gmail.com",
    "Password": "123"
},
{
    "name": "ak",
    "Email": "ak@gmail.com",
    "Password": "123"
},
{
    "name": "arshit",   
    "Email": "arshit@gmail.com",
    "Password": "123"
}
]
const validation = () => {

    let Email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    for (let index = 0; index < ak.length; index++) {
        if (Email !== "" || password !== "") 
        {
            if (ak[index]['Email'] === Email) {

                if (ak[index]['Password'] === password) {
                    document.getElementById("form").innerHTML = `<h1> ${ak[index]["name"]} </h1>`;

                    

                    break;

                }
                else {
                    document.getElementById('wom').style.display = "none";
                    document.getElementById('wop').style.display = "block";
                    
                    break;
                }
            } else {
                document.getElementById('wom').style.display = "block";
                    document.getElementById('wop').style.display = "none";
                
            }
        } else{
            document.getElementById('wom').style.display = "block";
            document.getElementById('wop').style.display = "block";
            break;
        }
    }


};
export default function Index() {
     return (
    <div id="form">
        <form action="#" method="get">

            <div className="heading">
                <label>AK GAMMING LOGIN FORM</label>
            </div>


            <div className="fillup">
                <table border="0">
                    <tr>
                        <td>
                            <label>E-mail</label>
                        </td>
                        <td>
                            <input type="email" name="email" id="email" placeholder="ak_gamming_08@Email.com " required/>
                            <div id='wom'>Email is not valid</div>
                        </td>
                        <td>
                            <label>Password</label>
                        </td>
                        <td>
                            <input type="password" name="" id="password" placeholder="enter a strong password" required/>
                            <div id='wop'>Password is not valid</div>
                        </td>
                        <td>
                            <button type='button' onClick = {validation} >SUBMIT</button>

                        </td>
                    </tr>
                </table>
            </div>

        </form>
    </div>
    )
}