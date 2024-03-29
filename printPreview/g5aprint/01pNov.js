const firebaseConfig = {
  apiKey: "AIzaSyAOX5I_BB9soXF4yHMp9NCPVk2Z-d3DEPE",
  authDomain: "teachingrecord-6b575.firebaseapp.com",
  databaseURL: "https://teachingrecord-6b575-default-rtdb.firebaseio.com",
  projectId: "teachingrecord-6b575",
  storageBucket: "teachingrecord-6b575.appspot.com",
  messagingSenderId: "1097574891233",
  appId: "1:1097574891233:web:d69ed85c4f4b83daad41a0"
};
var db = localStorage.getItem("preGrade"); //Grade
var db2 = localStorage.getItem("preMonth"); //Month
var db3 = localStorage.getItem("preYear");  //Year
document.getElementById('year1').innerHTML = db3;
document.getElementById('year2').innerHTML = db3;
document.getElementById('year3').innerHTML = db3;

firebase.initializeApp(firebaseConfig);
// var db = document.getElementById("dataBase").innerText;

function myPrintNov() {
  document.getElementById('tbody3').innerHTML = "";
  document.getElementById('tbodySave').innerHTML = "";
  document.getElementById('tbodyView').innerHTML = "";
  studentN0 = 0;
  firebase.database().ref(`${db}/` + `${db3}/`).once('value',
    function (AllRecordsPrint) {
      AllRecordsPrint.forEach(
        function (CurrentRecord) {
        }
      );
      GetData2(AllRecordsPrint);
      GetDataSave2(AllRecordsPrint);
      GetDataView(AllRecordsPrint);

    });
}
function GetData2(datas) {
  let tbody = document.getElementById("tbody3");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingNov = data.val().speakingNov;
    var writingNov = data.val().writingNov;
    var listeningNov = data.val().listeningNov;
    var readingNov = data.val().readingNov;
    var averageNov = data.val().averageNov;
    var myKh = data.val().myKh;


    students.push({
      name,
      sex,
      speakingNov,
      writingNov,
      listeningNov,
      readingNov,
      averageNov,
      myKh,
    });
  });

  students.sort(function (a, b) { return b.averageNov - a.averageNov });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averageNov;
    let studentsWithRank = students.filter(
      (student) => student.averageNov === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let tr = `
            <td>${No}</td>
            <td>${student.name}</td>
            <td>${student.sex}</td>
            <td>${student.speakingNov}</td>
            <td>${student.writingNov}</td>
            <td>${student.listeningNov}</td>
            <td>${student.readingNov}</td>
            <td>${student.averageNov}</td>
            <td>${student.Rank}</td>
    `;
    tbody.innerHTML += tr;
  });
}
function GetDataView(datas) {
  let tbody = document.getElementById("tbodyView");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingNov = data.val().speakingNov;
    var writingNov = data.val().writingNov;
    var listeningNov = data.val().listeningNov;
    var readingNov = data.val().readingNov;
    var averageNov = data.val().averageNov;
    var myKh = data.val().myKh;


    students.push({
      name,
      sex,
      speakingNov,
      writingNov,
      listeningNov,
      readingNov,
      averageNov,
      myKh,
    });
  });

  students.sort(function (a, b) { return b.averageNov - a.averageNov });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averageNov;
    let studentsWithRank = students.filter(
      (student) => student.averageNov === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    var mention = "";
    var my = parseFloat(student.averageNov);
    if (my <= 4.9) {
      mention = "Fail"
    } else if (my <= 5) {
      mention = "Poor"
    } else if (my <= 6.4) {
      mention = "Faily Good";
    } else if (my <= 7.9) {
      mention = "Good";
    } else if (my <= 9.4) {
      mention = "Very Good";
    } else if (my <= 10) {
      mention = "Excellent";
    }

    let tr = `
            <td>${No}</td>
            <td>${student.name}</td>
            <td>${student.sex}</td>
            <td>${student.speakingNov}</td>
            <td>${student.writingNov}</td>
            <td>${student.listeningNov}</td>
            <td>${student.readingNov}</td>
            <td>${student.averageNov}</td>
            <td>${student.Rank}</td>
            <td style="display: none;">${mention}${student.sex}</td> 
    `;
    tbody.innerHTML += tr;
  });
}
function GetDataSave2(datas) {
  let tbody = document.getElementById("tbodySave");
  let No = 0;
  let students = [];

  datas.forEach((data) => {
    var name = data.val().name;
    var sex = data.val().sex;
    var speakingNov = data.val().speakingNov;
    var writingNov = data.val().writingNov;
    var listeningNov = data.val().listeningNov;
    var readingNov = data.val().readingNov;
    var averageNov = data.val().averageNov;
    var myKh = data.val().myKh;


    students.push({
      name,
      myKh,
      sex,
      speakingNov,
      writingNov,
      listeningNov,
      readingNov,
      averageNov,
    });
  });

  // students.sort(function(a,b){return b.averageNov - a.averageNov });

  for (let i = 0; i < students.length; i++) {
    let avg = students[i].averageNov;
    let studentsWithRank = students.filter(
      (student) => student.averageNov === avg
    );
    for (let student of studentsWithRank) {
      student.Rank = i + 1;
    }
    i += studentsWithRank.length - 1;
  }

  students.forEach((student) => {
    No++;
    let tr = `
            <td>${No}</td>
            <td>${student.name}</td>
            <td>${student.myKh}</td>
            <td>${student.sex}</td>
            <td>${student.speakingNov}</td>
            <td>${student.writingNov}</td>
            <td>${student.listeningNov}</td>
            <td>${student.readingNov}</td>
            <td>${student.averageNov}</td>
    `;
    tbody.innerHTML += tr;
  });
}

function myNov() {
  var date = document.getElementById("inDate").value;
  document.getElementById("showDate").innerText = date;
  var newstr = document.getElementById("myNovPrint").innerHTML;
  var oldstr = document.body.innerHTML;
  document.body.innerHTML = newstr;
  window.print();
  document.body.innerHTML = oldstr;
  // window.location.reload();
  return false;
}
function addClassNov() {
  var els = document.querySelectorAll("#myNovemberT td:nth-child(8)");
  var len = els.length;
  for (var i = 0, len = els.length; i < len; i++) {
    els[i].classList.add("myScoreNov"); //To add class on top of existing ones
  }
}
function saveNov(type, fn, dl) {
  var elt = document.getElementById("myNovemberSaveT2");
  var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
  return dl
    ? XLSX.write(wb, { bookType: type, bookSST: true, type: "base64" })
    : XLSX.writeFile(wb, fn || `${db}/ ` + `${db2}/.` + (type || "xlsx"));
}
window.onload = myPrintNov;


$(document).ready(function () {
  var Sf = "F";
  var failM = "FailM";
  var failF = "FailF";
  const sleep = async (milliseconds) => {
    await new Promise(resolve => {
      return setTimeout(resolve, milliseconds);
    });
    getOccurance(Sf);

  };
  sleep(3000);
  function getOccurance(Sf) {
    getOccurancefailM(failM);
    getOccurancefailF(failF);
    var f2 = document.getElementById("ssTotal").innerHTML;
    var m1 = document.getElementById("fMst").innerHTML;
    var m2 = document.getElementById("ffst").innerHTML;
    var tfail = document.getElementById("fasTotal");
    var pass = document.getElementById("PsTotal");
    var showw = document.getElementById("fFails");
    var sumFs = parseFloat(m1) + parseFloat(m2);
    var sum = f2 - sumFs;
    pass.innerHTML = sum;
    tfail.innerHTML = sumFs;
    showw.innerHTML = m2;
    console.log(sum);

    var noOfOccurance = 0;

    $("#tbody3 td").each(function (ind, obj) {
      if (Sf == $.trim($(obj).text())) noOfOccurance++;

    });

    var show = document.getElementById("TotalSF");
    show.innerHTML = noOfOccurance;
    var show3 = document.getElementById("TotalSF2");
    var show4 = document.getElementById("fsTotal");
    var f1 = document.getElementById("sFail");
    show3.innerHTML = noOfOccurance;
    show4.innerHTML = noOfOccurance;
    f1.innerHTML = sumFs;

  }
  // Male
  function getOccurancefailM(failM) {
    var failSM = 0;

    $("#tbodyView td").each(function (ind, obj) {
      if (failM == $.trim($(obj).text())) failSM++;

    });

    var show2 = document.getElementById("fMst");
    show2.innerHTML = failSM;

  }
  // Female
  function getOccurancefailF(failF) {
    var failSF = 0;

    $("#tbodyView td").each(function (ind, obj) {
      if (failF == $.trim($(obj).text())) failSF++;

    });

    var show2 = document.getElementById("ffst");
    show2.innerHTML = failSF;

  }

})
function totalStudent() {
  var ss = document.getElementById("myTableVivew");
  var tbodyRowCount = ss.tBodies[0].rows.length;
  // var rowCount = document.getElementById('tbodyView').rows.length;
  var show = document.getElementById("TotalSs");
  var show3 = document.getElementById("ssTotal");
  show.innerHTML = tbodyRowCount;
  show3.innerHTML = tbodyRowCount;
  var show2 = document.getElementById("TotalSs2");
  show2.innerHTML = tbodyRowCount;

}
const sleep = async (milliseconds) => {
  await new Promise(resolve => {
    return setTimeout(resolve, milliseconds);
  });
  totalStudent();

};
sleep(3000);
var sss = document.getElementById("view2");
var sss1 = document.getElementById("view3");
sss.style.display = "none";
sss1.style.display = "none";
document.getElementById("showMyTable").style.display = "block";