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
  document.getElementById('showData').innerHTML = "";
  studentN0 = 0;
  NewBox();
  firebase.database().ref(`${db}/` + `${db3}/`).once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {
          var name = CurrentRecord.val().name;
          var id = CurrentRecord.val().id;
          var sex = CurrentRecord.val().sex;
          var speakingjun = CurrentRecord.val().speakingjun;
          var writingjun = CurrentRecord.val().writingjun;
          var listeningjun = CurrentRecord.val().listeningjun;
          var readingjun = CurrentRecord.val().readingjun;
          var averagejun = CurrentRecord.val().averagejun;
          var myKh = CurrentRecord.val().myKh;
          addItemsToTable(name, id, sex, speakingjun, writingjun, listeningjun,
            readingjun, averagejun, myKh);
        }
      );
    });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id, sex, speakingjun, writingjun, listeningjun,
  readingjun, averagejun, myKh) {
  var tbody = document.getElementById('showData');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');

  stdList.push([name, id, sex, speakingjun, writingjun, listeningjun,
    readingjun, averagejun, myKh]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = sex;
  td3.innerHTML = speakingjun;
  td4.innerHTML = writingjun;
  td5.innerHTML = listeningjun;
  td6.innerHTML = readingjun;
  td7.innerHTML = averagejun;


  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  trow.appendChild(td7);

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
    MspeakingNov.value = stdList[index][3];
    MwritingNov.value = stdList[index][4];
    MlisteningNov.value = stdList[index][5];
    MreadingNov.value = stdList[index][6];
    MaverageNov.value = stdList[index][7];
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

  Mname.value = "";
  Mid.value = "";
  Msex.value = "";
  MspeakingNov.value = "";
  MwritingNov.value = "";
  MlisteningNov.value = "";
  MreadingNov.value = "";
  MaverageNov.value = "";
}


function AddStd(e) {
  firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      speakingjun: MspeakingNov.value,
      writingjun: MwritingNov.value,
      listeningjun: MlisteningNov.value,
      readingjun: MreadingNov.value,
      averagejun: MaverageNov.value,
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
      speakingjun: MspeakingNov.value,
      writingjun: MwritingNov.value,
      listeningjun: MlisteningNov.value,
      readingjun: MreadingNov.value,
      averagejun: MaverageNov.value,
    },
  )
  document.getElementById("showAlert").style.display = "block";
  document.getElementById("info").innerText = `${Mid.value} has been updated!`;
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds);
    });
    document.getElementById("showAlert").style.display = "none";


  };
  sleep(2000);

  // selectAllData();
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

function adder1() {
  var num5 = parseFloat(document.getElementById('mySnov').value);
  var num6 = parseFloat(document.getElementById('myWnov').value);
  var num7 = parseFloat(document.getElementById('myLnov').value);
  var num8 = parseFloat(document.getElementById('myRnov').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAnov").value = total1;
  // divid1();
}
function divid1() {
  var num5 = parseFloat(document.getElementById('mySnov').value);
  var num6 = parseFloat(document.getElementById('myWnov').value);
  var num7 = parseFloat(document.getElementById('myLnov').value);
  var num8 = parseFloat(document.getElementById('myRnov').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAnov").value = total1;


  var num9 = parseFloat(document.getElementById('myScorenov').value);
  var score1 = num9;
  var get4 = score1 / 3;
  get4 = parseFloat(get4).toFixed(2);
  document.getElementById("myWnov").value = get4;
  document.getElementById("myLnov").value = get4;
  document.getElementById("myRnov").value = get4;
  adder1();
}
function adder2() {
  var num5 = parseFloat(document.getElementById('mySnov').value);
  var num6 = parseFloat(document.getElementById('myWnov').value);
  var num7 = parseFloat(document.getElementById('myLnov').value);
  var num8 = parseFloat(document.getElementById('myRnov').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAnov").value = total1;
  // divid1();
}
function divid2() {
  var num5 = parseFloat(document.getElementById('mySnov').value);
  var num6 = parseFloat(document.getElementById('myWnov').value);
  var num7 = parseFloat(document.getElementById('myLnov').value);
  var num8 = parseFloat(document.getElementById('myRnov').value);

  var get2 = num5 + num6 + num7 + num8;
  var total1 = get2 / 4;
  total1 = parseFloat(total1).toFixed(2);
  document.getElementById("myAnov").value = total1;

  console.log(get2);
  var num9 = parseFloat(document.getElementById('myScorenov').value);
  var score1 = num9;
  var get4 = score1 / 4;
  get4 = parseFloat(get4).toFixed(2);
  document.getElementById("myWnov").value = get4;
  document.getElementById("myLnov").value = get4;
  document.getElementById("myRnov").value = get4;
  document.getElementById("mySnov").value = get4;
  divid2();

}
function scoreFun() {
  var put = document.getElementById("myScorenov");
  var put2 = document.getElementById("mySnov");
  var check = document.getElementById("myCheck");
  var ll = "simple";
  var lll = "unsimple";
  if (db4 == ll) {
    put.addEventListener('input', divid2, false);
    check.checked = true;
  } else if (db4 == lll) {
    put.addEventListener('input', divid1, false);
    put2.addEventListener('input', adder1, false);
    check.checked = false;
  }
}
scoreFun();
var table1 = document.getElementById("my1stsemetable");
var table2 = document.getElementById("myTable2");
table1.style.display = "none";
table2.style.display = "none";