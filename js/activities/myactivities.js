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
    firebase.database().ref(`padRecord/` + `2022-2023/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var name = CurrentRecord.val().name;
                    var id = CurrentRecord.val().id;
                    var ids = CurrentRecord.val().ids;
                    var idw = CurrentRecord.val().idw;
                    var ida = CurrentRecord.val().ida;
                    var idatt = CurrentRecord.val().idatt;
                    var sex = CurrentRecord.val().sex;
                    var date = CurrentRecord.val().date;
                    var s = CurrentRecord.val().s;
                    var w = CurrentRecord.val().w;
                    var a = CurrentRecord.val().a;
                    var attitude = CurrentRecord.val().attitude;
                    var note = CurrentRecord.val().note;
                    var total = CurrentRecord.val().total;
                    addItemsToTable(name, id, ids, idw, ida, idatt, sex, date, s, w, a, attitude, note,
                        total);
                    uii();
                    autoCheck();
                }
            );
        });
}
window.onload = selectAllData;
var studentN0;
function getS() {
    var ssChcek = sum();
    console.log(ssChcek);
    return ssChcek;
}
var stdList = [];
console.log(stdList);
function addItemsToTable(name, id, ids, idw, ida, idatt, sex, date, s, w, a, attitude, note,
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
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    td3.style.color = 'green';
    td4.style.color = 'green';
    td5.style.color = 'green';
    td6.style.color = 'red';
    td8.style.color = 'red';
    //checkbox
    var chkS = document.createElement('input');
    chkS.type = "checkbox";
    chkS.setAttribute('name', 'myS');
    chkS.setAttribute('id', `${ids}`);
    var chkW = document.createElement('input');
    chkW.type = "checkbox";
    chkW.setAttribute('name', 'myW');
    chkW.setAttribute('id', `${idw}`);
    var chkA = document.createElement('input');
    chkA.type = "checkbox";
    chkA.setAttribute('name', 'myA');
    chkA.setAttribute('id', `${ida}`);
    var chkAtt = document.createElement('input');
    chkAtt.type = "checkbox";
    chkAtt.setAttribute('name', 'myAtt');
    chkAtt.setAttribute('id', `${idatt}`);
    var chkGet = document.createElement('input');
    chkGet.type = "checkbox";
    chkGet.setAttribute('name', 'myGet');
    chkGet.setAttribute('id', 'myGet');
    chkGet.setAttribute('class', 'chk');
    chkGet.checked = true;
    var ddd = document.getElementById('getDate');
    stdList.push([name, id, ids, idw, ida, idatt, sex, date, s, w, a, attitude, note,
        total]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = id;
    td2.innerHTML = sex;
    ddd.innerText = date;
    td3.innerHTML = s;
    td4.innerHTML = w;
    td5.innerHTML = a;
    td6.innerHTML = attitude;
    td7.innerHTML = note;
    td8.innerText = parseFloat(s) + parseFloat(w) + parseFloat(a) + parseFloat(attitude);


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
    td3.appendChild(chkS);
    td4.appendChild(chkW);
    td5.appendChild(chkA);
    td6.appendChild(chkAtt);

    // td1.innerHTML = `<button type="button" class="button-7" onclick="Fillbox(${studentN0})">${myKh}</button>`;
    tbody.appendChild(trow);
}
//Check all box
function toggleS(source) {
    checkboxes = document.getElementsByName('myS');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
function toggleW(source) {
    checkboxes = document.getElementsByName('myW');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
function toggleA(source) {
    checkboxes = document.getElementsByName('myA');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
function toggleAtt(source) {
    checkboxes = document.getElementsByName('myAtt');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
function toggleGet(source) {
    checkboxes = document.getElementsByName('myGet');
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
    }
}
toggleGet(this);

function uii() {
    $(document).ready(function () {

        $("#btnRows").on('click', function () {

            $("#myTbaleActivity tbody tr").each(function (checkBoxs) {
                var currentRow = $(this);
                var col1 = currentRow.find("td:eq(1)").html();
                var col2 = currentRow.find("td:eq(1)").html();
                var col3 = currentRow.find("td:eq(2)").html();
                var col4 = currentRow.find("td:eq(3)").text();
                var col5 = currentRow.find("td:eq(4)").text();
                var col6 = currentRow.find("td:eq(5)").text();
                var col7 = currentRow.find("td:eq(6)").text();
                var col8 = currentRow.find("td:eq(7)").html();
                var col9 = currentRow.find("td:eq(8)").html();
                var col10 = currentRow.find("td:eq(3)").html();
                var obj = {};
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
                if (currentRow.find(".chk").is(":checked")) {
                    activityData.push(obj);

                    // Check for S
                    for (i = 0; i < activityData.length; i++) {
                        var idss = activityData[i].ids;
                        var checkBox = document.getElementById(`${idss}`);
                        if (checkBox.checked == true && checkBox.id == idss) {
                            console.log(idss);
                            // console.log('3');
                            obj.s = '3';
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                cook();
                                document.getElementById("showAlert").style.display = "block";
                                document.getElementById("info").innerText = `All students have been upgraded!`;
                                const sleep = async (milliseconds) => {
                                    await new Promise(resolve => {
                                        return setTimeout(resolve, milliseconds);
                                    });
                                    document.getElementById("showAlert").style.display = "none";
                                    window.location.reload();
                                    // sum();
                                    // getS();
                                };
                                sleep(1000);

                            };
                            sleep(1000);
                        } else {
                            obj.s = '0';
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                cook();
                                document.getElementById("showAlert").style.display = "block";
                                document.getElementById("info").innerText = `All students have been upgraded!`;
                                const sleep = async (milliseconds) => {
                                    await new Promise(resolve => {
                                        return setTimeout(resolve, milliseconds);
                                    });
                                    document.getElementById("showAlert").style.display = "none";
                                    window.location.reload();
                                    // sum();
                                    // getS();
                                };
                                sleep(1000);

                            };
                            sleep(1000);
                        }

                    }
                    // //Check for W
                    for (i = 0; i < activityData.length; i++) {
                        var idww = activityData[i].idw;

                        var checkBox = document.getElementById(`${idww}`);
                        if (checkBox.checked == true && checkBox.id == idww) {
                            console.log(idww);
                            // console.log('3');
                            obj.w = '1';
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                cook();
                                document.getElementById("showAlert").style.display = "block";
                                document.getElementById("info").innerText = `All students have been upgraded!`;
                                const sleep = async (milliseconds) => {
                                    await new Promise(resolve => {
                                        return setTimeout(resolve, milliseconds);
                                    });
                                    document.getElementById("showAlert").style.display = "none";
                                    window.location.reload();
                                    // sum();
                                    // getS();
                                };
                                sleep(1000);

                            };
                            sleep(1000);
                        } else {
                            obj.w = '0';
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                cook();
                                document.getElementById("showAlert").style.display = "block";
                                document.getElementById("info").innerText = `All students have been upgraded!`;
                                const sleep = async (milliseconds) => {
                                    await new Promise(resolve => {
                                        return setTimeout(resolve, milliseconds);
                                    });
                                    document.getElementById("showAlert").style.display = "none";
                                    window.location.reload();
                                    // sum();
                                    // getS();
                                };
                                sleep(1000);

                            };
                            sleep(1000);
                        }
                    }
                    // //Check for A
                    for (i = 0; i < activityData.length; i++) {
                        var idaa = activityData[i].ida;

                        var checkBox = document.getElementById(`${idaa}`);
                        if (checkBox.checked == true && checkBox.id == idaa) {
                            console.log(idaa);
                            // console.log('3');
                            obj.a = '1';
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                cook();
                                document.getElementById("showAlert").style.display = "block";
                                document.getElementById("info").innerText = `All students have been upgraded!`;
                                const sleep = async (milliseconds) => {
                                    await new Promise(resolve => {
                                        return setTimeout(resolve, milliseconds);
                                    });
                                    document.getElementById("showAlert").style.display = "none";
                                    window.location.reload();
                                    // sum();
                                    // getS();
                                };
                                sleep(1000);

                            };
                            sleep(1000);
                        } else {
                            obj.a = '0';
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                cook();
                                document.getElementById("showAlert").style.display = "block";
                                document.getElementById("info").innerText = `All students have been upgraded!`;
                                const sleep = async (milliseconds) => {
                                    await new Promise(resolve => {
                                        return setTimeout(resolve, milliseconds);
                                    });
                                    document.getElementById("showAlert").style.display = "none";
                                    window.location.reload();
                                    // sum();
                                    // getS();
                                };
                                sleep(1000);

                            };
                            sleep(1000);
                        }
                    }
                    // //Check for Attitude
                    for (i = 0; i < activityData.length; i++) {
                        var idattu = activityData[i].idatt;

                        var checkBox = document.getElementById(`${idattu}`);
                        if (checkBox.checked == true && checkBox.id == idattu) {
                            console.log(idattu);
                            // console.log('3');
                            obj.attitude = '-1';
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                cook();
                                document.getElementById("showAlert").style.display = "block";
                                document.getElementById("info").innerText = `All students have been upgraded!`;
                                const sleep = async (milliseconds) => {
                                    await new Promise(resolve => {
                                        return setTimeout(resolve, milliseconds);
                                    });
                                    document.getElementById("showAlert").style.display = "none";
                                    window.location.reload();
                                    // sum();
                                    // getS();
                                };
                                sleep(1000);

                            };
                            sleep(1000);
                        } else {
                            obj.attitude = '0';
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                cook();
                                document.getElementById("showAlert").style.display = "block";
                                document.getElementById("info").innerText = `All students have been upgraded!`;
                                const sleep = async (milliseconds) => {
                                    await new Promise(resolve => {
                                        return setTimeout(resolve, milliseconds);
                                    });
                                    document.getElementById("showAlert").style.display = "none";
                                    window.location.reload();
                                    // sum();
                                    // getS();
                                };
                                sleep(1000);

                            };
                            sleep(1000);
                        }
                    }
                }
            });

            console.log(activityData);

        });

    });

}

function autoCheck() {
    //S checked for checkbook
    for (i = 0; i < stdList.length; i++) {
        var idget1 = stdList[i][2];
        da1 = '3';
        var get1 = stdList[i][8];
        var checkBoxs = document.getElementById(`${idget1}`);
        if (get1 == da1) {
            checkBoxs.checked = true;
        } else {
            checkBoxs.checked = false;

        }
    }
    //W checked for checkbook
    for (i = 0; i < stdList.length; i++) {
        var idget2 = stdList[i][3];
        da2 = '1';
        var get2 = stdList[i][9];
        var checkBoxs = document.getElementById(`${idget2}`);
        if (get2 == da2) {
            checkBoxs.checked = true;
        } else {
            checkBoxs.checked = false;

        }
    }
    //A checked for checkbook
    for (i = 0; i < stdList.length; i++) {
        var idget3 = stdList[i][4];
        da3 = '1';
        var get3 = stdList[i][10];
        var checkBoxs = document.getElementById(`${idget3}`);
        if (get3 == da3) {
            checkBoxs.checked = true;
        } else {
            checkBoxs.checked = false;

        }
    }
    //Attitude checked for checkbook
    for (i = 0; i < stdList.length; i++) {
        var idget4 = stdList[i][5];
        da4 = '-1';
        var get4 = stdList[i][11];
        var checkBoxs = document.getElementById(`${idget4}`);
        if (get4 == da4) {
            checkBoxs.checked = true;
        } else {
            checkBoxs.checked = false;

        }
    }

};

//Get All data to array
var activityData = [];

// Push data to firebase
function cook() {
    // e.preventDefault();
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
        firebase.database().ref(`padRecord/` + `2022-2023/` + idM).set(
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
            },
        )

    }


    selectAllData();
}
document.getElementById("showAlert").style.display = "none";
//Checkbox give value in row
// function sum() {
//     for (i = 0; i < activityData.length;i++){
//         var id = activityData[i].id;
//         var scheck = '';
//         var checkBox = document.getElementById(`${id}`);
//         if (checkBox.checked == true && checkBox.id == id) {
//             console.log(id);
//             console.log('3');
//             scheck = '3';
//         } else {
//             console.log('0');
//         }
//         return scheck;
//     }

// }

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

// //Show data input auto
// function showAuto() {
//     Mname.value = stdList[0][0];
//     Mid.value = stdList[0][1];
//     Msex.value = stdList[0][2];
//     MspeakingNov.value = stdList[0][3];
//     MwritingNov.value = stdList[0][4];
//     MlisteningNov.value = stdList[0][5];
//     MreadingNov.value = stdList[0][6];
//     MaverageNov.value = stdList[0][7];
//     update.style.display = 'inline-block';
//     dele.style.display = 'inline-block';

// }
// //Count students in table row
// function cccSS() {
//     var ss = document.getElementById("myTable");
//     var tbodyRowCount = ss.tBodies[0].rows.length;
//     // console.log(tbodyRowCount);
//     return tbodyRowCount;
// }
// // Next data show in input
// let b = 0;
// function nextBtn() {
//     var stdNum = cccSS();
//     if (b < stdNum) {
//         b++;
//         document.getElementById('showNNN').value = b;

//     }
//     var oo = b;
//     // console.log(b);
//     --oo;
//     Mname.value = stdList[oo][0];
//     Mid.value = stdList[oo][1];
//     Msex.value = stdList[oo][2];
//     MspeakingNov.value = stdList[oo][3];
//     MwritingNov.value = stdList[oo][4];
//     MlisteningNov.value = stdList[oo][5];
//     MreadingNov.value = stdList[oo][6];
//     MaverageNov.value = stdList[oo][7];

// }
// function goBack() {
//     if (b > 1) {
//         b--;
//         document.getElementById('showNNN').value = b;
//     }
//     var oo = b;
//     // console.log(oo);
//     --oo;
//     Mname.value = stdList[oo][0];
//     Mid.value = stdList[oo][1];
//     Msex.value = stdList[oo][2];
//     MspeakingNov.value = stdList[oo][3];
//     MwritingNov.value = stdList[oo][4];
//     MlisteningNov.value = stdList[oo][5];
//     MreadingNov.value = stdList[oo][6];
//     MaverageNov.value = stdList[oo][7];
// }
// function Fillbox(index) {
//     b = index;
//     document.getElementById('showNNN').value = index;
//     // if (index == null) {
//     //   submit.style.display = 'inline-block';
//     //   update.style.display = 'none';
//     //   dele.style.display = 'none';
//     // }
//     // else {
//     --index;
//     Mname.value = stdList[index][0];
//     Mid.value = stdList[index][1];
//     Msex.value = stdList[index][2];
//     MspeakingNov.value = stdList[index][3];
//     MwritingNov.value = stdList[index][4];
//     MlisteningNov.value = stdList[index][5];
//     MreadingNov.value = stdList[index][6];
//     MaverageNov.value = stdList[index][7];

//     submit.style.display = 'none';
//     update.style.display = 'inline-block';
//     dele.style.display = 'inline-block';


//     // }
// }
// function Fillbox(index) {
//   if (index == null) {
//     submit.style.display = 'none';
//     update.style.display = 'none';
//     dele.style.display = 'none';
//   }
//   else {
//     --index;
//     Mname.value = stdList[index][0];
//     Mid.value = stdList[index][1];
//     Msex.value = stdList[index][2];
//     MspeakingNov.value = stdList[index][3];
//     MwritingNov.value = stdList[index][4];
//     MlisteningNov.value = stdList[index][5];
//     MreadingNov.value = stdList[index][6];
//     MaverageNov.value = stdList[index][7];
//     submit.style.display = 'none';
//     update.style.display = 'inline-block';
//     dele.style.display = 'none';


//   }
// }
// function NewBox() {
//     submit.style.display = 'none';
//     update.style.display = 'none';
//     dele.style.display = 'none';
//     var Mname = document.getElementById('myName');
//     var Mid = document.getElementById('myID');
//     var Msex = document.getElementById('mySex');
//     var MspeakingNov = document.getElementById('mySnov');
//     var MwritingNov = document.getElementById('myWnov');
//     var MlisteningNov = document.getElementById('myLnov');
//     var MreadingNov = document.getElementById('myRnov');
//     var MaverageNov = document.getElementById('myAnov');

//     Mname.value = "";
//     Mid.value = "";
//     Msex.value = "";
//     MspeakingNov.value = "";
//     MwritingNov.value = "";
//     MlisteningNov.value = "";
//     MreadingNov.value = "";
//     MaverageNov.value = "";
// }

function AddStd(e) {
    firebase.database().ref(`padRecord/` + `2022-2023/` + Mid.value).set(
        {
            name: Mname.value,
            id: Mid.value,
            sex: Msex.value,
            speakingNov: MspeakingNov.value,
            writingNov: MwritingNov.value,
            listeningNov: MlisteningNov.value,
            readingNov: MreadingNov.value,
            averageNov: MaverageNov.value,
            rankNOv: MrankNov.value,
        },
    )
    // selectAllData();
    // window.location.reload();

}

function UpStd(e) {
    e.preventDefault();

    firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).update(
        {
            name: Mname.value,
            id: Mid.value,
            sex: Msex.value,
            speakingNov: MspeakingNov.value,
            writingNov: MwritingNov.value,
            listeningNov: MlisteningNov.value,
            readingNov: MreadingNov.value,
            averageNov: MaverageNov.value,
        },
    )
    document.getElementById("showAlert").style.display = "block";
    document.getElementById("info").innerText = `${Mid.value} has been updated!`;
    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds);
        });
        document.getElementById("showAlert").style.display = "none";
        nextBtn();

    };
    sleep(2000);
    // selectAllData();
    // window.location.reload();

}

function DelStd(e) {
    firebase.database().ref(`${db}/` + `${db3}/` + Mid.value).remove().then(
        function () {
            // selectAllData();
            // window.location.reload();
            e.preventDefault();

        }
    )
}
function DelStdAll() {
    firebase.database().ref(db).remove();

    // window.location.reload();
}

//Divid score tables
//Novmber
// function adder1() {
//     var num5 = parseFloat(document.getElementById('mySnov').value);
//     var num6 = parseFloat(document.getElementById('myWnov').value);
//     var num7 = parseFloat(document.getElementById('myLnov').value);
//     var num8 = parseFloat(document.getElementById('myRnov').value);

//     var get2 = num5 + num6 + num7 + num8;
//     var total1 = get2 / 4;
//     total1 = parseFloat(total1).toFixed(2);
//     document.getElementById("myAnov").value = total1;
//     // divid1();
// }
// function divid1() {
//     var num5 = parseFloat(document.getElementById('mySnov').value);
//     var num6 = parseFloat(document.getElementById('myWnov').value);
//     var num7 = parseFloat(document.getElementById('myLnov').value);
//     var num8 = parseFloat(document.getElementById('myRnov').value);

//     var get2 = num5 + num6 + num7 + num8;
//     var total1 = get2 / 4;
//     total1 = parseFloat(total1).toFixed(2);
//     document.getElementById("myAnov").value = total1;


//     var num9 = parseFloat(document.getElementById('myScorenov').value);
//     var score1 = num9;
//     var get4 = score1 / 3;
//     get4 = parseFloat(get4).toFixed(2);
//     document.getElementById("myWnov").value = get4;
//     document.getElementById("myLnov").value = get4;
//     document.getElementById("myRnov").value = get4;
//     adder1();
// }
// function adder2() {
//     var num5 = parseFloat(document.getElementById('mySnov').value);
//     var num6 = parseFloat(document.getElementById('myWnov').value);
//     var num7 = parseFloat(document.getElementById('myLnov').value);
//     var num8 = parseFloat(document.getElementById('myRnov').value);

//     var get2 = num5 + num6 + num7 + num8;
//     var total1 = get2 / 4;
//     total1 = parseFloat(total1).toFixed(2);
//     document.getElementById("myAnov").value = total1;
//     // divid1();
// }
// function divid2() {
//     var num5 = parseFloat(document.getElementById('mySnov').value);
//     var num6 = parseFloat(document.getElementById('myWnov').value);
//     var num7 = parseFloat(document.getElementById('myLnov').value);
//     var num8 = parseFloat(document.getElementById('myRnov').value);

//     var get2 = num5 + num6 + num7 + num8;
//     var total1 = get2 / 4;
//     total1 = parseFloat(total1).toFixed(2);
//     document.getElementById("myAnov").value = total1;

//     // console.log(num5);
//     // console.log(get4);
//     var num9 = parseFloat(document.getElementById('myScorenov').value);
//     var score1 = num9;
//     var get4 = score1 / 4;
//     get4 = parseFloat(get4).toFixed(2);
//     document.getElementById("myWnov").value = get4;
//     document.getElementById("myLnov").value = get4;
//     document.getElementById("myRnov").value = get4;
//     document.getElementById("mySnov").value = get4;

//     divid2();
// }
// function scoreFun() {
//     var put = document.getElementById("myScorenov");
//     var put2 = document.getElementById("mySnov");
//     var check = document.getElementById("myCheck");
//     var ll = "simple";
//     var lll = "unsimple";
//     if (db4 == ll) {
//         put.addEventListener('input', divid2, false);
//         check.checked = true;
//     } else if (db4 == lll) {
//         put.addEventListener('input', divid1, false);
//         put2.addEventListener('input', adder1, false);
//         check.checked = false;
//     }
// }
// scoreFun();
// var table1 = document.getElementById("my1stsemetable");
// var table2 = document.getElementById("myTable2");
// table1.style.display = "none";
// table2.style.display = "none";

// $(function () {
//   $.bootstrapGrowl("This is a test.");

//   setTimeout(function () {
//     $.bootstrapGrowl("This is another test.", { type: 'success' });
//   }, 1000);

//   setTimeout(function () {
//     $.bootstrapGrowl("Danger, Danger!", {
//       type: 'danger',
//       align: 'center',
//       width: 'auto',
//       allow_dismiss: false
//     });
//   }, 2000);

//   setTimeout(function () {
//     $.bootstrapGrowl("Danger, Danger!", {
//       type: 'info',
//       align: 'left',
//       stackup_spacing: 30
//     });
//   }, 3000);
// });
