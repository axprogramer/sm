const firebaseConfig = {
  apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
  authDomain: "teachingrecord-6b575.firebaseapp.com",
  databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
  projectId: "teachingrecord-6b575",
  storageBucket: "teachingrecord-6b575.appspot.com",
  messagingSenderId: "1097574891233",
  appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
};
//Input 1
function passFromValue() {
  var eid = document.getElementById("enrolGrade");
  var put = document.getElementById("mydataBase2");
  var show = eid.options[eid.selectedIndex].value;
  put.innerText = show;
  return show;
}
//Input 2
function passFromValue2() {
  var eid2 = document.getElementById("enrolGradeTo");
  var put2 = document.getElementById("mydataBase3");
  var show2 = eid2.options[eid2.selectedIndex].value;
  put2.innerText = show;
  return show2;
}
//Input 3
function passFromValue3() {
  var eid2 = document.getElementById("academicYear");
  var put2 = document.getElementById("mydataBase4");
  var show3 = eid2.options[eid2.selectedIndex].value;
  put2.innerText = show;
  return show3;
}
//Input 4
function passFromValue4() {
  var eid2 = document.getElementById("academicYearTo");
  var put2 = document.getElementById("mydataBase4");
  var show4 = eid2.options[eid2.selectedIndex].value;
  put2.innerText = show;
  return show4;
}
//Get Value 1
function passToValue() {
  var y = passFromValue();
  var db = document.getElementById("dataBase2").innerText;
  var last = db = y;
  return last;
}
//Get Value 2
function passToValue2() {
  var y = passFromValue2();
  var db2 = document.getElementById("dataBase3").innerText;
  var last2 = db2 = y;
  return last2;
}
//Get Value 3
function passToValue3() {
  var y = passFromValue3();
  var db2 = document.getElementById("dataBase4").innerText;
  var last3 = db2 = y;
  return last3;
}
//Get Value 4
function passToValue4() {
  var y = passFromValue4();
  var db2 = document.getElementById("dataBase5").innerText;
  var last4 = db2 = y;
  return last4;
}
passToValue();
passToValue2();
passToValue3();
passToValue4();

//Show value to HTML page
var myDb = document.getElementById("enrolGrade");
var myDb2 = document.getElementById("enrolGradeTo");
var myDb3 = document.getElementById("academicYear");
var myDb4 = document.getElementById("academicYearTo");
var eid = document.getElementById("enrolGrade");
var eid2 = document.getElementById("enrolGradeTo");
var eid3 = document.getElementById("academicYear");
var eid4 = document.getElementById("academicYearTo");
var put = document.getElementById("mydataBase2");
var put2 = document.getElementById("mydataBase3");
var put3 = document.getElementById("mydataBase4");
var put4 = document.getElementById("mydataBase5");
var show = eid.options[eid.selectedIndex].value;
var show2 = eid2.options[eid2.selectedIndex].value;
var show3 = eid3.options[eid3.selectedIndex].value;
var show4 = eid4.options[eid4.selectedIndex].value;
put.innerText = show;
put2.innerText = show2;
put3.innerText = show3;
put4.innerText = show4;
//Get data form HTML page and store to localStorage
myDb.onchange = function () {
  localStorage.setItem("myData", show);
  var eid = document.getElementById("enrolGrade");
  var put = document.getElementById("mydataBase2");
  var show = eid.options[eid.selectedIndex].value;
  put.innerText = show;

}
myDb2.onchange = function () {
  localStorage.setItem("myData2", show);
  var eid = document.getElementById("enrolGradeTo");
  var put = document.getElementById("mydataBase3");
  var show = eid.options[eid.selectedIndex].value;
  put.innerText = show;

}
myDb3.onchange = function () {
  localStorage.setItem("myData3", show);
  var eid = document.getElementById("academicYear");
  var put = document.getElementById("mydataBase4");
  var show = eid.options[eid.selectedIndex].value;
  put.innerText = show;

}
myDb4.onchange = function () {
  localStorage.setItem("myData9", show);
  var eid = document.getElementById("academicYearTo");
  var put = document.getElementById("mydataBase5");
  var show = eid.options[eid.selectedIndex].value;
  put.innerText = show;

}
//Process the data selected
function setData() {
  var storedb = passToValue();
  var storedb2 = passToValue2();
  var storedb3 = passToValue3();
  var storedb4 = passToValue4();
  localStorage.setItem("myData", storedb);
  localStorage.setItem("myData2", storedb2);
  localStorage.setItem("myData3", storedb3);
  localStorage.setItem("myData9", storedb4);
  window.location.reload();

}
// Database Stores
var text1 = document.getElementById("showEnroll");
var text2 = document.getElementById("showEnrollTo");
var text3 = document.getElementById("myNewGrade");
var storedb = passToValue();
var storedb2 = passToValue2();
var storedb3 = passToValue3();
var storedb4 = passToValue4();
var db = localStorage.getItem("myData");
var db2 = localStorage.getItem("myData2");
var db3 = localStorage.getItem("myData3");
var db4 = localStorage.getItem("myData9");
function showGrade() {
  var getdb = localStorage.getItem("myData2");
  var gg1 = "K2";
  var gg2 = "K3";
  var gg3 = "1A";
  var gg4 = "1B";
  var gg5 = "2A";
  var gg6 = "2B";
  var gg7 = "3A";
  var gg8 = "3B";
  var gg9 = "4A";
  var gg10 = "4B";
  var gg11 = "5A";
  var gg12 = "5B";
  var gg13 = "6A";
  var gg14 = "6B";
  var gg15 = "7A";
  var gg16 = "7B";
  var gg17 = "8A";
  var gg18 = "8B";
  var gg19 = "9A";
  var gg20 = "9B";
  var gg21 = "10A";
  var gg22 = "10B";
  var gg23 = "11A";
  var gg24 = "11B";
  var gg25 = "12A";
  var gg26 = "12B";

  if (getdb == gg1) {
    text3.value = "K2";
  } else if (getdb == gg2) {
    text3.value = "K3";
  } else if (getdb == gg3) {
    text3.value = "1A";
  } else if (getdb == gg4) {
    text3.value = "1B";
  } else if (getdb == gg5) {
    text3.value = "2A";
  } else if (getdb == gg6) {
    text3.value = "2B";
  } else if (getdb == gg7) {
    text3.value = "3A";
  } else if (getdb == gg8) {
    text3.value = "3B";
  } else if (getdb == gg9) {
    text3.value = "4A";
  } else if (getdb == gg10) {
    text3.value = "4B";
  } else if (getdb == gg11) {
    text3.value = "5A";
  } else if (getdb == gg12) {
    text3.value = "5B";
  } else if (getdb == gg13) {
    text3.value = "6A";
  } else if (getdb == gg14) {
    text3.value = "6B";
  } else if (getdb == gg15) {
    text3.value = "7A";
  } else if (getdb == gg16) {
    text3.value = "7B";
  } else if (getdb == gg17) {
    text3.value = "8A";
  } else if (getdb == gg18) {
    text3.value = "8B";
  } else if (getdb == gg19) {
    text3.value = "9A";
  } else if (getdb == gg20) {
    text3.value = "9B";
  } else if (getdb == gg21) {
    text3.value = "10A";
  } else if (getdb == gg22) {
    text3.value = "10B";
  } else if (getdb == gg23) {
    text3.value = "11A";
  } else if (getdb == gg24) {
    text3.value = "11B";
  } else if (getdb == gg25) {
    text3.value = "12A";
  } else if (getdb == gg26) {
    text3.value = "12B";
  }
}
showGrade();
//Acadamic Year to input data
// function showYear(){
//   var text4 = document.getElementById("myNewYear");
//   var kk1 = "2023";
//   var kk2 = "2024";
//   var kk3 = "2025";
//   var kk4 = "2026";
//   var kk5 = "2027";
//   var kk6 = "2028";
//   var kk7 = "2029";
//   var kk8 = "2030";
//   const today = new Date();
//   const [month, day, year] = [
//     today.getMonth(),
//     today.getDate(),
//     today.getFullYear(),
//   ];
//   if(year == kk1){
//     text4.value = "2023-2024"
//   } else if (year == kk2) {
//     text4.value = "2024-2025"
//   } else if (year == kk3) {
//     text4.value = "2025-2026"
//   } else if (year == kk4) {
//     text4.value = "2026-2027"
//   } else if (year == kk5) {
//     text4.value = "2027-2028"
//   } else if (year == kk6) {
//     text4.value = "2028-2029"
//   } else if (year == kk7) {
//     text4.value = "2029-2030"
//   } else if (year == kk8) {
//     text4.value = "2030-2031"
//   }
//   return year;
// }
// showYear();
//Database acadamic year
function dbAcadamic() {
  var yyy = document.getElementById("myNewYear");
  var kk1 = "2023-2024";
  var kk2 = "2024-2025";
  var kk3 = "2025-2026";
  var kk4 = "2026-2027";
  var kk5 = "2027-2028";
  var kk6 = "2028-2029";
  var kk7 = "2029-2030";
  var kk8 = "2030-2031";
  if (db4 == kk1) {
    yyy.value = "2023-2024"
  } else if (db4 == kk2) {
    yyy.value = "2024-2025"
  } else if (db4 == kk3) {
    yyy.value = "2025-2026"
  } else if (db4 == kk4) {
    yyy.value = "2026-2027"
  } else if (db4 == kk5) {
    yyy.value = "2027-2028"
  } else if (db4 == kk6) {
    yyy.value = "2028-2029"
  } else if (db4 == kk7) {
    yyy.value = "2029-2030"
  } else if (db4 == kk8) {
    yyy.value = "2030-2031"
  }

}
dbAcadamic();
//Month, Year, Times, and date for Activity
document.getElementById('myMonthAct').addEventListener('change',function(){
  var monthact = document.getElementById('myMonthAct').value;
  localStorage.setItem('monthAct',monthact);
  window.location.reload();

})
document.getElementById('myTimesAct').addEventListener('change',function(){
  var timesact = document.getElementById('myTimesAct').value;
  localStorage.setItem('timesAct', timesact);
  window.location.reload();

})
document.getElementById('myDate').addEventListener('change',function(){
  var dateact = document.getElementById('myDate').value;
  localStorage.setItem('dateAct', dateact);
  window.location.reload();

})
document.getElementById('myYearAct').addEventListener('change',function(){
  var dateact = document.getElementById('myYearAct').value;
  localStorage.setItem('yearAct', dateact);
  window.location.reload();

})
document.getElementById('myGradeAct').addEventListener('change',function(){
  var dateact = document.getElementById('myGradeAct').value;
  localStorage.setItem('gradeAct', dateact);
  window.location.reload();

})
var dbmonthAct = localStorage.getItem('monthAct'); //month activity
var dbtimesAct = localStorage.getItem('timesAct'); // times activity
var dateAact = localStorage.getItem('dateAct'); // date activity
var yearAact = localStorage.getItem('yearAct'); // year activity
var gradeAact = localStorage.getItem('gradeAct'); // grade activity
document.getElementById('myMonthAct').value = dbmonthAct;
document.getElementById('myTimesAct').value = dbtimesAct;
document.getElementById('myDate').value = dateAact;
document.getElementById('myYearAct').value = yearAact;
document.getElementById('myGradeAct').value = gradeAact;

//Firebase Store

firebase.initializeApp(firebaseConfig);
var my5aAll = firebase.database().ref(`${db}/` + `${db3}/`);
function submitForm(e) {
  e.preventDefault();
  var name = getElementVal('myName');
  var id = getElementVal('myID');
  var sex = getElementVal('mySex');
  var grade = getElementVal('myGrade');
  var year = getElementVal('myYear');

  //November
  //Khmer Name
  var myKh = getElementVal('myKh');
  // window.location.reload();
  saveData(name, id, sex, grade, year, myKh);

}
const saveData = (name, id, sex, grade, year, myKh) => {
  var newData = my5aAll.push();
  newData.set({
    name: name,
    id: id,
    sex: sex,
    grade: grade,
    year: year,
    myKh: myKh,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
function selectAllData() {
  document.getElementById('showInput5a').innerHTML = "";
  studentN0 = 0;
  firebase.database().ref(`${db}/` + `${db3}/`).once('value',
    function (AllRecords) {
      AllRecords.forEach(
        function (CurrentRecord) {
          var name = CurrentRecord.val().name;
          var id = CurrentRecord.val().id;
          var sex = CurrentRecord.val().sex;
          var grade = CurrentRecord.val().grade;
          var year = CurrentRecord.val().year;
          var myKh = CurrentRecord.val().myKh;
          addItemsToTable(name, id, sex, grade, year, myKh);
          showAuto(name, id, sex, grade, year, myKh);
          b = 1;
          document.getElementById('showNNN').value = b;
          cccSS();
          document.getElementById("alertMagWait").style.display = "none";
          document.getElementById("alertMagWait2").style.display = "none";
          document.getElementById("alertMagWait3").style.display = "none";
        }
      );
    });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
var upStd = [];
function addItemsToTable(name, id, sex, grade, year, myKh) {
  var tbody = document.getElementById('showInput5a');
  var trow = document.createElement('tr');
  var td0 = document.createElement('td');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  var td6 = document.createElement('td');
  var td7 = document.createElement('td');

  var ch = document.createElement('input');
  ch.type = "checkbox";
  ch.name = "mCheck";
  ch.setAttribute('class', 'chk');
  td2.setAttribute('class', 'Enname');
  td3.setAttribute('class', 'Khname');
  td4.setAttribute('class', 'mySex');
  td5.setAttribute('class', 'myGrade');
  stdList.push([name, id, sex, grade, year, myKh]);
  td0.innerHTML = ++studentN0;
  td1.innerHTML = id;
  td2.innerHTML = name;
  td3.innerHTML = myKh;
  td4.innerHTML = sex;
  td5.innerHTML = grade;

  trow.appendChild(td0);
  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);
  trow.appendChild(td6);
  td6.appendChild(ch);

  td1.innerHTML = `<button type="button" class="button-7" onclick="Fillbox(${studentN0})">${myKh}</button>`;
  tbody.appendChild(trow);

}
// var io = JSON.parse(localStorage.getItem("students"));
function cook() {
  // e.preventDefault();
  for (i = 0; i < aData.length; i++) {
    var enname = aData[i].myenname;
    var idM = aData[i].id;
    var sex = aData[i].mySex;
    var grade = aData[i].mygrade;
    var khname = aData[i].mykhname;
    firebase.database().ref(`${db2}/` + `${db4}/` + idM).set(
      {
        name: enname,
        id: idM,
        sex: sex,
        grade: grade,
        myKh: khname,
      },
    )

  }


  selectAllData();
}
function cook2() {
  // e.preventDefault();
  for (i = 0; i < aData2.length; i++) {
    var enname = aData2[i].myenname;
    var idM = aData2[i].id;
    var sex = aData2[i].mySex;
    var nameS = idM+'s';
    var nameW = idM+'w';
    var nameA = idM+'a';
    var nameAtt = idM+'att';
    var nameRowS = idM+'rowS';
    var nameRowW = idM+'rowW';
    var nameRowA = idM+'rowA';
    var nameRowAtt = idM+'rowAtt';
    var nameRowTotal = idM+'rowTotal';
    var spanTotalS = idM+'TotalS';
    var spanTotalW = idM+'TotalW';
    var spanTotalA = idM+'TotalA';
    var spanTotalAtt = idM+'TotalAtt';
    var s = 0;
    var w = 0;
    var a = 0;
    var attitude = 0;
    var note = '';
    var total = 0;
    firebase.database().ref(`${gradeAact}/` + `recordActivity/` + `${yearAact}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idM).set(
      {
        name: enname,
        id: idM,
        sex: sex,
        ids: nameS,
        idw: nameW,
        ida: nameA,
        idatt: nameAtt,
        nameRowS: nameRowS,
        nameRowW: nameRowW,
        nameRowA: nameRowA,
        nameRowAtt: nameRowAtt,
        nameRowTotal: nameRowTotal,
        spanTotalS: spanTotalS,
        spanTotalW: spanTotalW,
        spanTotalA: spanTotalA,
        spanTotalAtt: spanTotalAtt,
        s:s,
        w:w,
        a:a,
        attitude:attitude,
        note:note,
        total:total,
        date: dateAact,

      },
    )

  }


  selectAllData();
}
function sportAct() {
  // e.preventDefault();
  for (i = 0; i < aData3.length; i++) {
    var enname = aData3[i].myenname;
    var khname = aData3[i].mykhname;
    var idM = aData3[i].id;
    var sex = aData3[i].mySex;
    var date1 = '';
    var date2 = '';
    var date3 = '';
    var date4 = '';
    var date5 = '';
    var topic1 = '';
    var topic2 = '';
    var topic3 = '';
    var topic4 = '';
    var topic5 = '';
    var prac1 = '';
    var prac2 = '';
    var prac3 = '';
    var prac4 = '';
    var prac5 = '';
    var uniform1 = '';
    var uniform2 = '';
    var uniform3 = '';
    var uniform4 = '';
    var uniform5 = '';
    var shoe1 = '';
    var shoe2 = '';
    var shoe3 = '';
    var shoe4 = '';
    var shoe5 = '';
    var total1 = '';
    var total2 = '';
    var total3 = '';
    var total4 = '';
    var total5 = '';
    var subTotal = '';
    firebase.database().ref(`${gradeAact}/` + `recordSport/` + `${yearAact}/` + `${dbmonthAct}/` + idM).set(
      {
        name: enname,
        id: idM,
        sex: sex,
        khname: khname,
        date1: date1,
        date2: date2,
        date3: date3,
        date4: date4,
        date5: date5,
        topic1: topic1,
        topic2: topic2,
        topic3: topic3,
        topic4: topic4,
        topic5: topic5,
        prac1: prac1,
        prac2: prac2,
        prac3: prac3,
        prac4: prac4,
        prac5: prac5,
        uniform1: uniform1,
        uniform2: uniform2,
        uniform3: uniform3,
        uniform4: uniform4,
        uniform5: uniform5,
        shoe1: shoe1,
        shoe2: shoe2,
        shoe3: shoe3,
        shoe4: shoe4,
        shoe5: shoe5,
        total1: total1,
        total2: total2,
        total3: total3,
        total4: total4,
        total5: total5,
        subTotal: subTotal,

      },
    )

  }


  selectAllData();
}
//Checkbox all check function
function toggle(source) {
  checkboxes = document.getElementsByName('mCheck');
  for (var i = 0, n = checkboxes.length; i < n; i++) {
    checkboxes[i].checked = source.checked;
  }
}
//Upload for Upgrade class
var aData = [];
$(document).ready(function () {

  $("#btnRows").on('click', function () {

    $("#myTable tbody tr").each(function () {
      var currentRow = $(this);
      var col1 = currentRow.find("td:eq(3)").html();
      var col2 = currentRow.find("td:eq(2)").html();
      var col3 = currentRow.find("td:eq(3)").html();
      var col4 = currentRow.find("td:eq(4)").html();
      var col5 = currentRow.find("td:eq(5)").html();
      var obj = {};
      obj.id = col1;
      obj.myenname = col2;
      obj.mykhname = col3;
      obj.mySex = col4;
      obj.mygrade = db2;
      if (currentRow.find(".chk").is(":checked")) {
        aData.push(obj);
        const sleep = async (milliseconds) => {
          await new Promise(resolve => {
            return setTimeout(resolve, milliseconds);
          });
          cook();
          // cook2();
          document.getElementById("alertMagWait").style.display = "block";
          document.getElementById("alertMag").style.display = "none";
          document.getElementById("showBtnn").style.display = "none";
          const sleep = async (milliseconds) => {
            await new Promise(resolve => {
              return setTimeout(resolve, milliseconds);
            });
            window.location.reload();
          };
          sleep(2000);

        };
        sleep(1000);

      }
    });


  });

});
//Upload for Activities
var aData2 = [];
$(document).ready(function () {

  $("#btnAct").on('click', function () {

    $("#myTable tbody tr").each(function () {
      var currentRow = $(this);
      var col1 = currentRow.find("td:eq(3)").html();
      var col2 = currentRow.find("td:eq(2)").html();
      var col3 = currentRow.find("td:eq(3)").html();
      var col4 = currentRow.find("td:eq(4)").html();
      var col5 = currentRow.find("td:eq(5)").html();
      var obj = {};
      obj.id = col1;
      obj.myenname = col2;
      obj.mykhname = col3;
      obj.mySex = col4;
      obj.mygrade = db2;
      if (currentRow.find(".chk").is(":checked")) {
        aData2.push(obj);
        const sleep = async (milliseconds) => {
          await new Promise(resolve => {
            return setTimeout(resolve, milliseconds);
          });
          // cook();
          cook2();
          document.getElementById("alertMagWait2").style.display = "block";
          document.getElementById("alertMag2").style.display = "none";
          document.getElementById("showBtnn2").style.display = "none";
          const sleep = async (milliseconds) => {
            await new Promise(resolve => {
              return setTimeout(resolve, milliseconds);
            });
            window.location.reload();
          };
          sleep(2000);

        };
        sleep(1000);

      }
    });


  });

});
//Upload for Sport
var aData3 = [];
$(document).ready(function () {

  $("#btnSport").on('click', function () {

    $("#myTable tbody tr").each(function () {
      var currentRow = $(this);
      var col1 = currentRow.find("td:eq(3)").html();
      var col2 = currentRow.find("td:eq(2)").html();
      var col3 = currentRow.find("td:eq(3)").html();
      var col4 = currentRow.find("td:eq(4)").html();
      var col5 = currentRow.find("td:eq(5)").html();
      var obj = {};
      obj.id = col1;
      obj.myenname = col2;
      obj.mykhname = col3;
      obj.mySex = col4;
      obj.mygrade = db2;
      if (currentRow.find(".chk").is(":checked")) {
        aData3.push(obj);
        const sleep = async (milliseconds) => {
          await new Promise(resolve => {
            return setTimeout(resolve, milliseconds);
          });
          sportAct();
          document.getElementById("alertMagWait3").style.display = "block";
          document.getElementById("alertMag3").style.display = "none";
          document.getElementById("showBtnn2").style.display = "none";
          setTimeout(function(){
            window.location.reload();

          },2000)

        };
        sleep(1000);

      }
    });


  });

});

var Mname = document.getElementById('myName');
var Mkhname = document.getElementById('myKh');
var Mid = document.getElementById('myID');
var Msex = document.getElementById('mySex');
var Mgrade = document.getElementById('myGrade');
var newgrade = document.getElementById('myNewGrade');
var Myear = document.getElementById('myYear');
var newYear = document.getElementById('myNewYear');

var submit = document.getElementById("mySubmit");
var update = document.getElementById("myUpdate");
var dele = document.getElementById("myDelete");

submit.style.display = 'inline-block';
update.style.display = 'none';
dele.style.display = 'none';
//Show data input auto
function showAuto(name, id, sex, grade, year, myKh){
  Mname.value = stdList[0][0];
  Mid.value = stdList[0][1];
  Msex.value = stdList[0][2];
  Mgrade.value = stdList[0][3];
  Myear.value = stdList[0][4];
  Mkhname.value = stdList[0][5];

}
//Count students in table row
function cccSS(){
  var ss = document.getElementById("myTable");
  var tbodyRowCount = ss.tBodies[0].rows.length;
  return tbodyRowCount;
}
// Next data show in input
let b = 0;
function nextBtn(){
  var stdNum = cccSS();
  if (b < stdNum){
    b++;
    document.getElementById('showNNN').value = b;

  }
  var oo = b;
  --oo;
  Mname.value = stdList[oo][0];
  Mid.value = stdList[oo][1];
  Msex.value = stdList[oo][2];
  Mgrade.value = stdList[oo][3];
  Myear.value = stdList[oo][4];
  Mkhname.value = stdList[oo][5];

}
function goBack(){
  if (b > 1) {
    b--;
    document.getElementById('showNNN').value = b;
  }
  var oo = b;
  --oo;
  Mname.value = stdList[oo][0];
  Mid.value = stdList[oo][1];
  Msex.value = stdList[oo][2];
  Mgrade.value = stdList[oo][3];
  Myear.value = stdList[oo][4];
  Mkhname.value = stdList[oo][5];
}
function Fillbox(index) {
  b = index;
  document.getElementById('showNNN').value = index;

    --index;
    Mname.value = stdList[index][0];
    Mid.value = stdList[index][1];
    Msex.value = stdList[index][2];
    Mgrade.value = stdList[index][3];
    Myear.value = stdList[index][4];
    Mkhname.value = stdList[index][5];

    submit.style.display = 'none';
    update.style.display = 'inline-block';
    dele.style.display = 'inline-block';


  // }
}
function NewBox(e) {
  e.preventDefault();
  submit.style.display = 'inline-block';
  update.style.display = 'none';
  dele.style.display = 'none';
  var Mname = document.getElementById('myName');
  var Mkhname = document.getElementById('myKh');
  var Mid = document.getElementById('myID');
  var Msex = document.getElementById('mySex');
  var Mgrade = document.getElementById('myGrade');
  var Myear = document.getElementById('myYear');

  Mname.value = "";
  Mkhname.value = "";
  Mid.value = "";
  Msex.value = "";
  Mgrade.value = "";
  Myear.value = "";
}

function AddStd(e) {
  e.preventDefault();
  firebase.database().ref(`${db2}/` + `${db3}/` + Mid.value).set(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      grade: newgrade.value,
      myKh: Mkhname.value,
      year: newYear.value,
    },
  )
  selectAllData();

}

function UpStdgade(e) {
  e.preventDefault();

  firebase.database().ref(`${db2}/` + `${db4}/` + Mid.value).update(
    {
      name: Mname.value,
      id: Mid.value,
      sex: Msex.value,
      grade: newgrade.value,
      myKh: Mkhname.value,
      year: newYear.value,
    },
  )

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
document.getElementById("showAlert").style.display = "none";

