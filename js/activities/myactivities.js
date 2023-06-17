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
    firebase.database().ref(`4A/` + `2022-2023/` + `recordActivity/`).once('value',
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
                    autoCheck();
                    document.getElementById("alertMagWait").style.display = "none";

                }
            );
        });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
// console.log(stdList);
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
                        obj.s = '3';
                        const sleep = async (milliseconds) => {
                            await new Promise(resolve => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById("alertMagWait").style.display = "block";
                            document.getElementById("alertMag").style.display = "none";
                            document.getElementById("showBtnn").style.display = "none";
                            cook();
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                window.location.reload();
                            };
                            sleep(3000);

                        };
                        sleep(1000);
                    } else {
                        obj.s = '0';
                        const sleep = async (milliseconds) => {
                            await new Promise(resolve => {
                                return setTimeout(resolve, milliseconds);
                            });
                            cook();
                            document.getElementById("alertMagWait").style.display = "block";
                            document.getElementById("alertMag").style.display = "none";
                            document.getElementById("showBtnn").style.display = "none";

                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                window.location.reload();
                            };
                            sleep(3000);

                        };
                        sleep(1000);
                    }

                }
                //Check for W
                for (i = 0; i < activityData.length; i++) {
                    var idww = activityData[i].idw;

                    var checkBox = document.getElementById(`${idww}`);
                    if (checkBox.checked == true && checkBox.id == idww) {
                        obj.w = '1';
                        const sleep = async (milliseconds) => {
                            await new Promise(resolve => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById("alertMagWait").style.display = "block";
                            document.getElementById("alertMag").style.display = "none";
                            document.getElementById("showBtnn").style.display = "none";
                            cook();
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                window.location.reload();
                            };
                            sleep(3000);

                        };
                        sleep(1000);
                    } else {
                        obj.w = '0';
                        const sleep = async (milliseconds) => {
                            await new Promise(resolve => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById("alertMagWait").style.display = "block";
                            document.getElementById("alertMag").style.display = "none";
                            document.getElementById("showBtnn").style.display = "none";
                            cook();
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                window.location.reload();
                            };
                            sleep(3000);

                        };
                        sleep(1000);
                    }
                }
                //Check for A
                for (i = 0; i < activityData.length; i++) {
                    var idaa = activityData[i].ida;

                    var checkBox = document.getElementById(`${idaa}`);
                    if (checkBox.checked == true && checkBox.id == idaa) {
                        obj.a = '1';
                        const sleep = async (milliseconds) => {
                            await new Promise(resolve => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById("alertMagWait").style.display = "block";
                            document.getElementById("alertMag").style.display = "none";
                            document.getElementById("showBtnn").style.display = "none";
                            cook();
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                window.location.reload();
                            };
                            sleep(3000);


                        };
                        sleep(1000);
                    } else {
                        obj.a = '0';
                        const sleep = async (milliseconds) => {
                            await new Promise(resolve => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById("alertMagWait").style.display = "block";
                            document.getElementById("alertMag").style.display = "none";
                            document.getElementById("showBtnn").style.display = "none";
                            cook();
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                window.location.reload();
                            };
                            sleep(3000);


                        };
                        sleep(1000);
                    }
                }
                //Check for Attitude
                for (i = 0; i < activityData.length; i++) {
                    var idattu = activityData[i].idatt;

                    var checkBox = document.getElementById(`${idattu}`);
                    if (checkBox.checked == true && checkBox.id == idattu) {
                        obj.attitude = '-1';
                        const sleep = async (milliseconds) => {
                            await new Promise(resolve => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById("alertMagWait").style.display = "block";
                            document.getElementById("alertMag").style.display = "none";
                            document.getElementById("showBtnn").style.display = "none";
                            cook();
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                window.location.reload();
                            };
                            sleep(3000);


                        };
                        sleep(1000);
                    } else {
                        obj.attitude = '0';
                        const sleep = async (milliseconds) => {
                            await new Promise(resolve => {
                                return setTimeout(resolve, milliseconds);
                            });
                            document.getElementById("alertMagWait").style.display = "block";
                            document.getElementById("alertMag").style.display = "none";
                            document.getElementById("showBtnn").style.display = "none";
                            cook();
                            const sleep = async (milliseconds) => {
                                await new Promise(resolve => {
                                    return setTimeout(resolve, milliseconds);
                                });
                                window.location.reload();
                            };
                            sleep(3000);

                        };
                        sleep(1000);
                    }
                }
            }
        });
    });

});

//Auto Checkbox
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
        firebase.database().ref(`4A/` + `2022-2023/` + `recordActivity/` + idM).set(
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


    // selectAllData();
    const sleep = async (milliseconds) => {
        await new Promise(resolve => {
            return setTimeout(resolve, milliseconds);
        });
        window.location.reload();
    };
    sleep(3000);
}
document.getElementById("showAlert").style.display = "none";
