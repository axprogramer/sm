const firebaseConfig = {
    apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
    authDomain: "teachingrecord-6b575.firebaseapp.com",
    databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
    projectId: "teachingrecord-6b575",
    storageBucket: "teachingrecord-6b575.appspot.com",
    messagingSenderId: "1097574891233",
    appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
};

firebase.initializeApp(firebaseConfig);

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
function selectAllData() {
    // document.getElementById('myScedual').innerHTML = "";
    firebase.database().ref(`${dbgradeAct}/` + `${dbyearAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (outlineData) {
                    var name = outlineData.val().name;
                    var myKh = outlineData.val().myKh;
                    var sex = outlineData.val().sex;
                    var grade = outlineData.val().grade;
                    var url = outlineData.val().urlImg;
                    addItemsToTable(
                        name,
                        myKh,
                        sex,
                        grade,
                        url,
                    );
                }
            );
            showText();
        });
}
window.onload = selectAllData;
function addItemsToTable(
    name,
    myKh,
    sex,
    grade,
    url,

) {
    stDname.push(
        myKh
    );
}

var stDname = [];
function showText() {
    var storage = [];
    for (var i = 0; i < stDname.length; i++) {
        storage.push(stDname[i])
    };
    var uuu = storage.length;
    var ii = uuu.toString();
    document.getElementById('numberOfStd').innerHTML = `Students: ${ii}`;
    var mydiv = document.getElementById('rand_options_items');
    mydiv.value = storage.join('\n')
}
document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradeact = document.getElementById('myGradeAct').value;
    localStorage.setItem('cardsgradeAct', gradeact);
    window.location.reload();
})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yeareact = document.getElementById('myYearAct').value;
    localStorage.setItem('cardsyeareAct', yeareact);
    window.location.reload();

})

var dbgradeAct = localStorage.getItem('cardsgradeAct'); // grade activity
var dbyearAct = localStorage.getItem('cardsyeareAct'); // year activity
document.getElementById('myGradeAct').value = dbgradeAct;
document.getElementById('myYearAct').value = dbyearAct;


//Save data to firebase
var sportData = [];
document.getElementById('btnRows').addEventListener('click', function () {
    document.getElementById("alertMag").style.display = "none";
    document.getElementById("alertMagWait").style.display = "block";
    setTimeout(function () {
        setData();
        setTimeout(function () {
            window.location.reload();
        }, 1500)
    }, 1500)
})
// Push data to firebase

document.getElementById("showAlert").style.display = "none";
document.getElementById("alertMagWait").style.display = "none";

// $("textarea").each(function () {
//     this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
// }).on("input", function () {
//     this.style.height = 0;
//     this.style.height = (this.scrollHeight) + "px";
// });
document.getElementById('goPrint').addEventListener('click', function () {
    var printContents = document.getElementById('myPrint').innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = "<html><head><title></title></head><body>" + printContents + "</body>";
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
    return true;
})
