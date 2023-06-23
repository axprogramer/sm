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

    document.getElementById('myActivities').innerHTML = "";
    studentN0 = 0;
    firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var name = CurrentRecord.val().name;
                    var id = CurrentRecord.val().id;
                    var ids = CurrentRecord.val().ids;
                    var idw = CurrentRecord.val().idw;
                    var ida = CurrentRecord.val().ida;
                    var idatt = CurrentRecord.val().idatt;
                    var nameRowS = CurrentRecord.val().nameRowS;
                    var nameRowW = CurrentRecord.val().nameRowW;
                    var nameRowA = CurrentRecord.val().nameRowA;
                    var nameRowAtt = CurrentRecord.val().nameRowAtt;
                    var nameRowTotal = CurrentRecord.val().nameRowTotal;
                    var spanTotalS = CurrentRecord.val().spanTotalS;
                    var spanTotalW = CurrentRecord.val().spanTotalW;
                    var spanTotalA = CurrentRecord.val().spanTotalA;
                    var spanTotalAtt = CurrentRecord.val().spanTotalAtt;
                    var sex = CurrentRecord.val().sex;
                    var date = CurrentRecord.val().date;
                    var s = CurrentRecord.val().s;
                    var w = CurrentRecord.val().w;
                    var a = CurrentRecord.val().a;
                    var attitude = CurrentRecord.val().attitude;
                    var note = CurrentRecord.val().note;
                    var total = CurrentRecord.val().total;
                    addItemsToTable(name, id, ids, idw, ida, idatt,
                        nameRowS, nameRowW, nameRowA, nameRowAtt,
                        nameRowTotal, spanTotalS, spanTotalW, spanTotalA,
                        spanTotalAtt,
                        sex, date, s, w, a, attitude, note,
                        total);

                }
            );
        });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id, ids, idw, ida, idatt, nameRowS, nameRowW, nameRowA, nameRowAtt, nameRowTotal,
    spanTotalS, spanTotalW, spanTotalA,
    spanTotalAtt, sex, date, s, w, a, attitude, note,
    total) {
    var tbody = document.getElementById('myActivities');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('br');
    var td11 = document.createElement('br');
    var td12 = document.createElement('br');
    var td13 = document.createElement('br');
    var td14 = document.createElement('br');
    var div1 = document.createElement('div');
    var span = document.createElement('span');
    var span1 = document.createElement('span');
    var span2 = document.createElement('span');
    var span3 = document.createElement('span');
    var span4 = document.createElement('span');


    var noSpSS = spanTotalS.replace(/\s+/g, '');
    var noSpWW = spanTotalW.replace(/\s+/g, '');
    var noSpAA = spanTotalS.replace(/\s+/g, '');
    var noSpAtt = spanTotalAtt.replace(/\s+/g, '');
    span.id = `${nameRowS}`;
    span.className = `${noSpSS}`;
    span1.id = `${nameRowW}`;
    span1.className = `${noSpWW}`;
    span2.id = `${nameRowA}`;
    span2.className = `${noSpAA}`;
    span3.id = `${nameRowAtt}`;
    span3.className = `${noSpAtt}`;
    span4.id = `${nameRowTotal}`;

    td3.style.color = 'green';
    td4.style.color = 'green';
    td5.style.color = 'green';
    td6.style.color = 'red';
    td8.style.color = 'red';
    trow.setAttribute('class', 'item table');
    //checkbox
    var chkS = document.createElement('input');
    chkS.type = "checkbox";
    chkS.value = "3";
    chkS.setAttribute('name', 'myS');
    chkS.setAttribute('class', 'myS');
    chkS.setAttribute('id', `${ids}`);

    var chkW = document.createElement('input');
    chkW.type = "checkbox";
    chkW.value = "1";
    chkW.setAttribute('name', 'myW');
    chkW.setAttribute('id', `${idw}`);

    var chkA = document.createElement('input');
    chkA.type = "checkbox";
    chkA.value = "1";
    chkA.setAttribute('name', 'myA');
    chkA.setAttribute('id', `${ida}`);
    var chkAtt = document.createElement('input');
    chkAtt.type = "checkbox";
    chkAtt.value = "-1";
    chkAtt.setAttribute('name', 'myAtt');
    chkAtt.setAttribute('id', `${idatt}`);
    var chkGet = document.createElement('input');
    chkGet.type = "checkbox";
    chkGet.setAttribute('name', 'myGet');
    chkGet.setAttribute('class', 'chk');
    chkGet.checked = true;
    var ddd = document.getElementById('myDate');

    stdList.push([name, id, ids, idw, ida, idatt, nameRowS, nameRowW, nameRowA, nameRowAtt, nameRowTotal,
        spanTotalS, spanTotalW, spanTotalA,
        spanTotalAtt, sex, date, s, w, a, attitude, note,
        total]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = id;
    td2.innerHTML = sex;
    ddd.value = date;
    if (span == undefined) {
        span.innerText = 0;

    } else {
        span.innerText = s;

    }
    if (span1 == undefined) {
        span1.innerText = 0;

    } else {
        span1.innerText = w;

    }
    if (span2 == undefined) {
        span2.innerText = 0;

    } else {
        span2.innerText = a;

    }
    if (span3 == undefined) {
        span3.innerText = 0;

    } else {
        span3.innerText = attitude;

    }
    if (span4 == undefined) {
        span4.innerText = 0;

    } else {
        span4.innerText = total;

    }
    td7.innerHTML = note;


    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    td9.appendChild(chkGet);

    td3.appendChild(span);
    td3.appendChild(td10);

    td4.appendChild(span1);
    td4.appendChild(td11);

    td5.appendChild(span2);
    td5.appendChild(td12);

    td6.appendChild(span3);
    td6.appendChild(td13);

    td8.appendChild(span4);

    td3.appendChild(chkS);
    td4.appendChild(chkW);
    td5.appendChild(chkA);
    td6.appendChild(chkAtt);


    tbody.appendChild(trow);
    autoCheck();
    dataS();
    getTotalVal();

    document.getElementById("alertMagWait").style.display = "none";

}

//Check all box
function toggleS(source) {
    checkboxes = document.getElementsByName('myS');
    for (var i = 0, n = checkboxes.length; i < n; i++) {

        var idget1 = stdList[i][2]; // for s
        var nameSS = stdList[i][6]; //for name S
        var checkBoxs = document.getElementById(`${idget1}`);
        checkboxes[i].checked = source.checked;
        if (checkBoxs.checked == true) {
            var s = 3;
            checkBoxs.checked = true;
            document.getElementById(`${nameSS}`).innerHTML = 3;

        }
        if (checkBoxs.checked == false) {
            checkBoxs.checked = false;
            document.getElementById(`${nameSS}`).innerHTML = 0;

        }
    }

}
function toggleW(source) {
    checkboxes = document.getElementsByName('myW');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
        var idget2 = stdList[i][3]; // for w
        var nameWW = stdList[i][7]; //for name s
        var checkBoxw = document.getElementById(`${idget2}`);
        if (checkBoxw.checked == true) {
            var w = 1;
            checkBoxw.checked = true;
            document.getElementById(`${nameWW}`).innerHTML = w;
        }
        if (checkBoxw.checked == false) {
            var w = 0;
            checkBoxw.checked = false;
            document.getElementById(`${nameWW}`).innerHTML = w;
        }
    }
}
function toggleA(source) {
    checkboxes = document.getElementsByName('myA');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        var idget3 = stdList[i][4]; // for a
        var nameAA = stdList[i][8]; //for name a
        var checkBoxa = document.getElementById(`${idget3}`);
        checkboxes[i].checked = source.checked;
        if (checkBoxa.checked == true) {
            var a = 1;
            checkBoxa.checked = true;
            document.getElementById(`${nameAA}`).innerHTML = a;
        }
        if (checkBoxa.checked == false) {
            var a = 0;
            checkBoxa.checked = false;
            document.getElementById(`${nameAA}`).innerHTML = a;
        }
    }
}
function toggleAtt(source) {
    checkboxes = document.getElementsByName('myAtt');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        var idget4 = stdList[i][5]; // for a
        var nameAtt = stdList[i][9]; //for name att
        var checkBoxatt = document.getElementById(`${idget4}`);
        checkboxes[i].checked = source.checked;
        if (checkBoxatt.checked == true) {
            var att = -1;
            checkBoxatt.checked = true;
            document.getElementById(`${nameAtt}`).innerHTML = att;
        }
        if (checkBoxatt.checked == false) {
            var att = 0;
            checkBoxatt.checked = false;
            document.getElementById(`${nameAtt}`).innerHTML = att;
        }
    }
}
//Check all row data in table
function toggleGet(source) {
    checkboxes = document.getElementsByName('myGet');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
toggleGet(this);

setInterval(function () {
    $("#myTbaleActivity tbody tr").each(function () {

        var currentRow = $(this);
        var col1 = currentRow.find("td:eq(1)").html();
        var col2 = currentRow.find("td:eq(1)").html();
        var col3 = currentRow.find("td:eq(2)").html();
        var col4 = currentRow.find("td:eq(3)").text();
        var col5 = currentRow.find("td:eq(4)").text();
        var col6 = currentRow.find("td:eq(5)").text();
        var col7 = currentRow.find("td:eq(6)").text();
        var col8 = currentRow.find("td:eq(7)").html();
        var col9 = currentRow.find("td:eq(8)").text();
        var obj = {};
        var objAct = {};
        obj.id = col1;
        obj.ids = col1 + 's';
        obj.idw = col1 + 'w';
        obj.ida = col1 + 'a';
        obj.idatt = col1 + 'att';
        obj.name = col2;
        obj.sex = col3;
        obj.s = col4;
        obj.w = col5;
        obj.a = col6;
        obj.attitude = col7;
        obj.note = col8;
        obj.total = col9;

        objAct.id = col1;
        objAct.name = col2;
        objAct.sex = col3;
        objAct.total = parseFloat(col4) + parseFloat(col5) + parseFloat(col6) + parseFloat(col7);

        if (currentRow.find(".chk").is(":checked")) {
            activityData.push(obj);
            // activityDataAct.push(objAct);
        }
    });


}, 200);

function getTotalVal() {
    for (i = 0; i < stdList.length; i++) {

        //Sum for All score
        var allTotal = stdList[i][10]; // for s
        //get name from array
        var getS = stdList[i][11];
        var getW = stdList[i][12];
        var getA = stdList[i][13];
        var getAtt = stdList[i][14];
        var getAtt = stdList[i][14];
        //remove space from name for class
        var noSpcS = getS.replace(/\s+/g, '');
        var noSpcW = getW.replace(/\s+/g, '');
        var noSpcA = getA.replace(/\s+/g, '');
        var noSpcAtt = getAtt.replace(/\s+/g, '');
        setInterval(function () {
            var sumS = 0;
            var sumW = 0;
            var sumA = 0;
            var sumAtt = 0;
            $(`.${noSpcS}`).each(function () {
                sumS += parseFloat($(this).text()); // 
            });
            $(`.${noSpcW}`).each(function () {
                sumW += parseFloat($(this).text()); // 
            });
            $(`.${noSpcA}`).each(function () {
                sumA += parseFloat($(this).text()); // 
            });
            $(`.${noSpcAtt}`).each(function () {
                sumAtt += parseFloat($(this).text()); // 
            });
            var getSum = parseFloat(sumS) + parseFloat(sumW) + parseFloat(sumA) + parseFloat(sumAtt);
            document.getElementById(`${allTotal}`).innerText = parseFloat(getSum);

        }, 100);
    }
}
function dataS() {
    //S checked for checkbook
    for (i = 0; i < stdList.length; i++) {

        //get id for checkbox
        var idget1 = stdList[i][2]; // for s
        var idget2 = stdList[i][3]; // for w
        var idget3 = stdList[i][4]; // for a
        var idget4 = stdList[i][5]; // for a
        //get name for checkbox id
        var nameSS = stdList[i][6]; //for name s
        var nameWW = stdList[i][7]; //for name w
        var nameAA = stdList[i][8]; //for name a
        var nameAtt = stdList[i][9]; //for name att
        //Checkbox varible
        var checkBoxs = document.getElementById(`${idget1}`);
        var checkBoxw = document.getElementById(`${idget2}`);
        var checkBoxa = document.getElementById(`${idget3}`);
        var checkBoxatt = document.getElementById(`${idget4}`);
        //Checkbox for S
        checkBoxs.addEventListener('click', function () {
            if (checkBoxs.checked == true) {
                var s = 3;
                checkBoxs.checked = true;
                document.getElementById(`${nameSS}`).innerHTML = s;


            }
            if (checkBoxs.checked == false) {
                var s = 0;
                checkBoxs.checked = false;
                document.getElementById(`${nameSS}`).innerHTML = s;

            }
        })
        //Checkbox for W
        checkBoxw.addEventListener('click', function () {
            if (checkBoxw.checked == true) {
                var w = 1;
                checkBoxw.checked = true;
                document.getElementById(`${nameWW}`).innerHTML = w;
            }
            if (checkBoxw.checked == false) {
                var w = 0;
                checkBoxw.checked = false;
                document.getElementById(`${nameWW}`).innerHTML = w;
            }
        })
        //Checkbox for A
        checkBoxa.addEventListener('click', function () {
            if (checkBoxa.checked == true) {
                var a = 1;
                checkBoxa.checked = true;
                document.getElementById(`${nameAA}`).innerHTML = a;
            }
            if (checkBoxa.checked == false) {
                var a = 0;
                checkBoxa.checked = false;
                document.getElementById(`${nameAA}`).innerHTML = a;
            }
        })
        //Checkbox for Att
        checkBoxatt.addEventListener('click', function () {
            if (checkBoxatt.checked == true) {
                var att = -1;
                checkBoxatt.checked = true;
                document.getElementById(`${nameAtt}`).innerHTML = att;
            }
            if (checkBoxatt.checked == false) {
                var att = 0;
                checkBoxatt.checked = false;
                document.getElementById(`${nameAtt}`).innerHTML = att;
            }
        })

    }
}
//Auto Checkbox
function autoCheck() {
    // checked for S W A ATT
    for (i = 0; i < stdList.length; i++) {

        var idget1 = stdList[i][2];
        var idget2 = stdList[i][3];
        var idget3 = stdList[i][4];
        var idget4 = stdList[i][5];
        da1 = '3';
        da2 = '1';
        da3 = '1';
        da4 = '-1';
        var get1 = stdList[i][17];
        var get2 = stdList[i][18];
        var get3 = stdList[i][19];
        var get4 = stdList[i][20];

        var checkBoxs = document.getElementById(`${idget1}`);
        if (get1 == da1) {
            checkBoxs.checked = true;
        } else {
            checkBoxs.checked = false;
        }

        var checkBoxW = document.getElementById(`${idget2}`);
        if (get2 == da2) {
            checkBoxW.checked = true;
        } else {
            checkBoxW.checked = false;

        }

        var checkBoxA = document.getElementById(`${idget3}`);
        if (get3 == da3) {
            checkBoxA.checked = true;
        } else {
            checkBoxA.checked = false;

        }

        var checkBoxAtt = document.getElementById(`${idget4}`);
        if (get4 == da4) {
            checkBoxAtt.checked = true;
        } else {
            checkBoxAtt.checked = false;

        }
    }

};

//Get All data to array
//Month and Times for Activity
document.getElementById('myMonthAct').addEventListener('change', function () {
    var monthact = document.getElementById('myMonthAct').value;
    localStorage.setItem('ownmonthAct', monthact);
    window.location.reload();

})
document.getElementById('myTimesAct').addEventListener('change', function () {
    var timesact = document.getElementById('myTimesAct').value;
    localStorage.setItem('owntimesAct', timesact);
    window.location.reload();

})
document.getElementById('myDate').addEventListener('change', function () {
    var datesact = document.getElementById('myDate').value;
    localStorage.setItem('owndateAct', datesact);
    window.location.reload();

})
document.getElementById('myGradeAct').addEventListener('change', function () {
    var gradeact = document.getElementById('myGradeAct').value;
    localStorage.setItem('owngradeAct', gradeact);
    window.location.reload();

})
document.getElementById('myYearAct').addEventListener('change', function () {
    var yeareact = document.getElementById('myYearAct').value;
    localStorage.setItem('ownyeareAct', yeareact);
    window.location.reload();

})

var dbmonthAct = localStorage.getItem('ownmonthAct'); //month activity
var dbtimesAct = localStorage.getItem('owntimesAct'); // times activity
var dbdateAct = localStorage.getItem('owndateAct'); // date activity
var dbgradeAct = localStorage.getItem('owngradeAct'); // grade activity
var dbyearAct = localStorage.getItem('ownyeareAct'); // year activity
document.getElementById('myMonthAct').value = dbmonthAct;
document.getElementById('myTimesAct').value = dbtimesAct;
document.getElementById('myDate').value = dbdateAct;
document.getElementById('myGradeAct').value = dbgradeAct;
document.getElementById('myYearAct').value = dbyearAct;
//Save data to firebase
var activityData = [];
document.getElementById('btnRows').addEventListener('click', function () {
    cook();
    totalData();
    document.getElementById("alertMag").style.display = "none";
    document.getElementById("alertMagWait").style.display = "block";
    setTimeout(function () {
        window.location.reload();
    }, 3500)
})
// Push data to firebase
function cook() {
    for (i = 0; i < activityData.length; i++) {
        var name = activityData[i].name;
        var idM = activityData[i].id;
        var sex = activityData[i].sex;
        var s = activityData[i].s;
        var w = activityData[i].w;
        var a = activityData[i].a;
        var ids = activityData[i].ids;
        var idw = activityData[i].idw;
        var ida = activityData[i].ida;
        var idatt = activityData[i].idatt;
        var attitude = activityData[i].attitude;
        var note = activityData[i].note;
        var total = activityData[i].total;
        firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idM).update(
            {
                name: name,
                id: idM,
                sex: sex,
                s: s,
                w: w,
                a: a,
                ids, ids,
                idw: idw,
                ida: ida,
                idatt: idatt,
                attitude: attitude,
                note: note,
                total: total,
                date: dbdateAct,
            },
        )

    }
}
// Push total data to firebase
function totalData() {
    for (i = 0; i < activityData.length; i++) {
        var name = activityData[i].name;
        var idM = activityData[i].id;
        var sex = activityData[i].sex;

        if (dbtimesAct == 1) {
            var total1 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total1: total1,
                },
            )

        }
        if (dbtimesAct == 2) {
            var total2 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total2: total2,
                },
            )

        }
        if (dbtimesAct == 3) {
            var total3 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total3: total3,
                },
            )

        }
        if (dbtimesAct == 4) {
            var total4 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total4: total4,
                },
            )

        }
        if (dbtimesAct == 5) {
            var total5 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total5: total5,
                },
            )

        }
        if (dbtimesAct == 6) {
            var total6 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total6: total6,
                },
            )

        }
        if (dbtimesAct == 7) {
            var total7 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total7: total7,
                },
            )

        }
        if (dbtimesAct == 8) {
            var total8 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total8: total8,
                },
            )

        }
        if (dbtimesAct == 9) {
            var total9 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total9: total9,
                },
            )

        }
        if (dbtimesAct == 10) {
            var total10 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total10: total10,
                },
            )

        }
        if (dbtimesAct == 11) {
            var total11 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total11: total11,
                },
            )

        }
        if (dbtimesAct == 12) {
            var total12 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total12: total12,
                },
            )

        }
        if (dbtimesAct == 13) {
            var total13 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total13: total13,
                },
            )

        }
        if (dbtimesAct == 14) {
            var total14 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total14: total14,
                },
            )

        }
        if (dbtimesAct == 15) {
            var total15 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total15: total15,
                },
            )

        }
        if (dbtimesAct == 16) {
            var total16 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total16: total16,
                },
            )

        }
        if (dbtimesAct == 17) {
            var total17 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total17: total17,
                },
            )

        }
        if (dbtimesAct == 18) {
            var total18 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total18: total18,
                },
            )

        }
        if (dbtimesAct == 19) {
            var total19 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total19: total19,
                },
            )

        }
        if (dbtimesAct == 20) {
            var total20 = activityData[i].total;
            firebase.database().ref(`${dbgradeAct}/` + `recordActivity/` + `${dbyearAct}/` + `Total/` + `${dbmonthAct}/` + idM).update(

                {
                    name: name,
                    id: idM,
                    sex: sex,
                    total20: total20,
                },
            )

        }

    }
}
document.getElementById("showAlert").style.display = "none";
//Total in row of table
