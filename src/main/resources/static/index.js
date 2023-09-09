const form = document.getElementById("form")

form.addEventListener("submit" , (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const pastwork = document.getElementById("pastwork").value;
    const joining = document.getElementById("joining").value;
    const qualification = document.getElementById("qualification").value;

    const date = new Date();
    const currdate = date.getFullYear()

    const dobdate = new Date(dob)
    const newdob = dobdate.getFullYear()

    age = currdate-newdob

    const joindate = new Date(joining)
    const newjoin = joindate.getFullYear()
    console.log(joining)

    const presentWork = currdate-newjoin
    console.log(presentWork)

   const data ={
        name:name,
        email:email,
        mobile:mobile,
        gender:gender,
        age:age,
        pastwork:pastwork,
        presentWork:presentWork,
        qualification:qualification,
       }

       axios.post("http://54.251.148.150:8080/post-data",data)
       .then((res)=>{console.log(res.data)
        })
        .catch((err)=>console.log(err))
    //    }
})

const displayer = document.getElementById("view")

displayer.addEventListener("click" ,(e)=>{
    e.preventDefault()
    window.location.href = "/data"
})

