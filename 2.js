let array = []
let i = 0

function save() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;
    console.log(user, password)

    let json = {};
    json.id = i + 1
    json.username = user;
    json.pass = password;

    console.log(json);
    array[i] = json
    i += 1;
    console.log(array);
    // let div = document.createElement("div");
    // let sp = document.createElement("span");
    // div.append(array0, sp);
    // document.getElementById("content").innerHTML = '<div style="width: 100%;height:50px;"><span>'+array[0].username+'</span></div>';
    let a ="";
    for (let i = 0; i < array.length; i++) {
        a = a + '<div style="width: 100%;height:50px;display: flex;"><div style="align-items: center;display: flex;margin-right: 100px;"><span>' + array[i].id + '</span></div><div style="align-items: center;display: flex;margin-right: 100px;"><span>' + array[i].username + '</span></div><div style="align-items: center;display: flex;margin-right: 100px;"><span>' + array[i].pass + '</span></div></div><br>';
        document.getElementById("content").innerHTML = a;
    }

};
