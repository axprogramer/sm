const firebaseConfig = {
  apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
  authDomain: "teachingrecord-6b575.firebaseapp.com",
  databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
  projectId: "teachingrecord-6b575",
  storageBucket: "teachingrecord-6b575.appspot.com",
  messagingSenderId: "1097574891233",
  appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
};
var db = localStorage.getItem("myData6");
var db2 = localStorage.getItem("myData8");
var db3 = localStorage.getItem("myData7");
var db4 = localStorage.getItem("myData13"); //simple

firebase.initializeApp(firebaseConfig);
var my5aAll = firebase.database().ref(db);
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
function selectAllData() {
  document.getElementById('showData1').innerHTML = "";
  studentN0 = 0;
  NewBox();
  firebase.database().ref(`${db}/` + `${db3}/`).once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {
          var name = CurrentRecord.val().name;
          var id = CurrentRecord.val().id;
          var sex = CurrentRecord.val().sex;
          var my2Se = CurrentRecord.val().my2Se;
          var my2Sa = CurrentRecord.val().my2Sa;
          var myKh = CurrentRecord.val().myKh;
          addItemsToTable(name, id, sex, my2Se, my2Sa, myKh);
        }
      );
    });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id, sex, my2Se, my2Sa, myKh) {
  var tbody = document.getElementById('showData1');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');

  stdList.push([name, id, sex, my2Se, my2Sa, myKh]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = sex;
  td3.innerHTML = my2Se;
  td4.innerHTML = my2Sa;


  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);

  td1.innerHTML = `<button type="button" class="button-6" onclick="Fillbox(${studentN0})">${myKh}</button>`;
  tbody.appendChild(trow);
}

var Mname = document.getElementById('myName');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var MspeakingNov = document.getElementById('mySnov');
var MwritingNov = document.getElementById('myWnov');
var MlisteningNov = document.getElementById('myLnov');
var MreadingNov = document.getElementById('myRnov');
var MaverageNov = document.getElementById('myAnov');
var firtSescore = document.getElementById('my1Sescore');
var firstSeA = document.getElementById('my1SeA');

var submit = document.getElementById("mySubmit");
var update = document.getElementById("myUpdate");
var dele = document.getElementById("myDelete");


function Fillbox(index) {
  if (index == null) {
    submit.style.display = 'none';
    update.style.display = 'none';
    dele.style.display = 'none';
  }
  else {
    --index;
    Mname.value = stdList[index][0];
    Mid.value = stdList[index][1];
    Msex.value = stdList[index][2];
    firtSescore.value = stdList[index][3];
    firstSeA.value = stdList[index][4];
    submit.style.display = 'none';
    update.style.display = 'inline-block';
    dele.style.display = 'none';


  }
}
function NewBox() {
  submit.style.display = 'none';
  update.style.display = 'none';
  dele.style.display = 'none';
  var Mname = document.getElementById('myName');
  var Mid = document.getElementById('myID');
  var Msex = document.getElementById('mySex');
  var MspeakingNov = document.getElementById('mySnov');
  var MwritingNov = document.getElementById('myWnov');
  var MlisteningNov = document.getElementById('myLnov');
  var MreadingNov = document.getElementById('myRnov');
  var MaverageNov = document.getElementById('myAnov');
  var firtSescore = document.getElementById('my1Sescore');
  var firstSeA = document.getElementById('my1SeA');

  Mname.value = "";
  Mid.value = "";
  Msex.value = "";
  MspeakingNov.value = "";
  MwritingNov.value = "";
  MlisteningNov.value = "";
  MreadingNov.value = "";
  MaverageNov.value = "";
  firtSescore.value = "";
  firstSeA.value = "";
}


function AddStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      my2Se: firtSescore.value,
      my2Sa: firstSeA.value,
    },
  )
  selectAllData();
  // window.location.reload();

}
function UpStd(e) {
  e.preventDefault();

  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).update(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      my2Se: firtSescore.value,
      my2Sa: firstSeA.value,
    },
  )
  selectAllData();
  // window.location.reload();

}

function DelStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).remove().then(
    function () {
      selectAllData();
      // window.location.reload();
      e.preventDefault();

    }
  )
}
function DelStdAll() {
  firebase.database().ref(`${db}/` + `${db3}/`).remove();

  // window.location.reload();
}


function divid2() {
  var num6 = parseFloat(document.getElementById('my1Sescore').value);
  var total = num6 / 4;
  total = parseFloat(total).toFixed(2);
  console.log(total);
  document.getElementById('my1SeA').value = total;
}
var iii = document.getElementById("my1Sescore");
iii.addEventListener('input', divid2, false);

//Hide some inputs
var table1 = document.getElementById("myScoretable1");
var table2 = document.getElementById("myScoretable2");
var table3 = document.getElementById("myTable");
table1.style.display = "none";
table2.style.display = "none";
table3.style.display = "none";
//Style
var div = document.getElementById("myDiv");
div.style.backgroundColor = "transparent";
div.style.padding = "10px";
div.style.height = "30em";
document.getElementById("myTable2").style.display = "block";
document.getElementById("my1stsemetable").style.display = "block";

