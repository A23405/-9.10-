function send() {
    let c = document.getElementById("count").value;

    let res;

    if (c <= 1500) {
        res = 70;
    }
    else if (c > 1500) {
        res = 70;
        x = Math.ceil((c - 1500) / 500)

        res = res + 5 * x
    }

    document.getElementById("res").innerHTML = res;
}
function send2() {
    let xar = document.getElementById("count2").value;
    console.log(xar);
    // let data = ["A=10", "B=11", "C=12",
    //     "D=13", "E=14", "F=15",
    //     "G=16", "H=17", "I=34",
    //     "J=18", "K=19", "L=20",
    //     "M=21", "N=22", "O=35",
    //     "P=23", "Q=24", "R=25",
    //     "S=26", "T=27", "U=28",
    //     "V=29", "W=32", "X=30",
    //     "Y=31", "Z=33"
    // ];

    
    let data2 = {"A" : 10, "B":11, "C":12,
    "D":13, "E":14, "F":15,
    "G":16, "H":17, "I":34,
    "J":18, "K":19, "L":20,
    "M":21, "N":22, "O":35,
    "P":23, "Q":24, "R":25,
    "S":26, "T":27, "U":28,
    "V":29, "W":32, "X":30,
    "Y":31, "Z":33
    }; 
    res2 = data2[xar];
    document.getElementById("res2").innerHTML = res2;

}
function star1() {
    let stars = String;
    stars +="\n";
    for (j = 1;j<=5;j++){
    for (i = 1;i<=5;i++){
        stars += "*";
    }
    stars += "\n";
}
    console.log(stars);
}
function star2() {
    let stars = String;
    stars +="\n";
    for (j = 1;j<=5;j++){
        if (j == 2 || j== 3 || j==4){
            stars += "*   *\n";
        }
        else{
stars += "*****\n";
        }
        
    }
    console.log(stars);
}
function star3() {
    let stars = String;
    stars +="\n";
    for (j = 1;j<=5;j++){
        for (i = 1;i<=j;i++){
        stars += "*";
    }
    stars += "\n";
}
    console.log(stars);
}


