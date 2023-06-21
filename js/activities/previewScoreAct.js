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
    firebase.database().ref(`4A/` + `recordActivity/` + `2022-2023/` + `Total/` + `${dbmonthAct}/`).once('value',
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var name = CurrentRecord.val().name;
                    var id = CurrentRecord.val().id;
                    var sex = CurrentRecord.val().sex;
                    var book = CurrentRecord.val().book;
                    var pt = CurrentRecord.val().pt;
                    var s1 = CurrentRecord.val().total1;
                    var s2 = CurrentRecord.val().total2;
                    var s3 = CurrentRecord.val().total3;
                    var s4 = CurrentRecord.val().total4;
                    var s5 = CurrentRecord.val().total5;
                    var s6 = CurrentRecord.val().total6;
                    var s7 = CurrentRecord.val().total7;
                    var s8 = CurrentRecord.val().total8;
                    var s9 = CurrentRecord.val().total9;
                    var s10 = CurrentRecord.val().total10;
                    var s11 = CurrentRecord.val().total11;
                    var s12 = CurrentRecord.val().total12;
                    var s13 = CurrentRecord.val().total13;
                    var s14 = CurrentRecord.val().total14;
                    var s15 = CurrentRecord.val().total15;
                    var s16 = CurrentRecord.val().total16;
                    var s17 = CurrentRecord.val().total17;
                    var s18 = CurrentRecord.val().total18;
                    var s19 = CurrentRecord.val().total19;
                    var s20 = CurrentRecord.val().total20;
                    addItemsToTable(name, id, sex,
                        book, pt, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
                        s14, s15, s16, s17, s18, s19, s20);
                    dataS();
                    document.getElementById("alertMagWait").style.display = "none";

                }
            );
        });
}
window.onload = selectAllData;
var studentN0;

var stdList = [];
function addItemsToTable(name, id, sex,
    book, pt, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
    s14, s15, s16, s17, s18, s19, s20) {
    var tbody = document.getElementById('myActivities');
    var trow = document.createElement('tr');
    var td0 = document.createElement('td');
    var td1 = document.createElement('td');
    var tdsex = document.createElement('td');
    var tdbook = document.createElement('td');
    var tdPT = document.createElement('td');
    var tdS1 = document.createElement('td');
    var tdS2 = document.createElement('td');
    var tdS3 = document.createElement('td');
    var tdS4 = document.createElement('td');
    var tdS5 = document.createElement('td');
    var tdS6 = document.createElement('td');
    var tdS7 = document.createElement('td');
    var tdS8 = document.createElement('td');
    var tdS9 = document.createElement('td');
    var tdS10 = document.createElement('td');
    var tdS11 = document.createElement('td');
    var tdS12 = document.createElement('td');
    var tdS13 = document.createElement('td');
    var tdS14 = document.createElement('td');
    var tdS15 = document.createElement('td');
    var tdS16 = document.createElement('td');
    var tdS17 = document.createElement('td');
    var tdS18 = document.createElement('td');
    var tdS19 = document.createElement('td');
    var tdS20 = document.createElement('td');
    var tdS21 = document.createElement('td');
    var tdS22 = document.createElement('td');
    var br = document.createElement('br');
    tdS21.style.color = 'red';
    //Name no space
    var noSpname = id.replace(/\s+/g, '');
    //Name class for each row
    tdbook.className = `${noSpname}book`;
    tdPT.className = `${noSpname}pt`;
    tdS1.className = `${noSpname}s1`;
    tdS2.className = `${noSpname}s2`;
    tdS3.className = `${noSpname}s3`;
    tdS4.className = `${noSpname}s4`;
    tdS5.className = `${noSpname}s5`;
    tdS6.className = `${noSpname}s6`;
    tdS7.className = `${noSpname}s7`;
    tdS8.className = `${noSpname}s8`;
    tdS9.className = `${noSpname}s9`;
    tdS10.className = `${noSpname}s10`;
    tdS11.className = `${noSpname}s11`;
    tdS12.className = `${noSpname}s12`;
    tdS13.className = `${noSpname}s13`;
    tdS14.className = `${noSpname}s14`;
    tdS15.className = `${noSpname}s15`;
    tdS16.className = `${noSpname}s16`;
    tdS17.className = `${noSpname}s17`;
    tdS18.className = `${noSpname}s18`;
    tdS19.className = `${noSpname}s19`;
    tdS20.className = `${noSpname}s20`;
    tdS21.id = `${noSpname}s21`;

    //checkbox
    var chkS = document.createElement('input');
    chkS.type = "checkbox";
    chkS.setAttribute('name', 'myS');
    // chkS.setAttribute('id', `${ids}`);

    var chkW = document.createElement('input');
    chkW.type = "checkbox";
    chkW.setAttribute('name', 'myW');
    // chkW.setAttribute('id', `${idw}`);

    var chkA = document.createElement('input');
    chkA.type = "checkbox";
    chkA.setAttribute('name', 'myA');
    // chkA.setAttribute('id', `${ida}`);
    var chkAtt = document.createElement('input');
    chkAtt.type = "checkbox";
    chkAtt.setAttribute('name', 'myAtt');
    // chkAtt.setAttribute('id', `${idatt}`);
    var chkGet = document.createElement('input');
    chkGet.type = "checkbox";
    chkGet.setAttribute('name', 'myGet');
    chkGet.setAttribute('class', 'chk');
    chkGet.checked = true;
    var ddd = document.getElementById('myDate');

    stdList.push([name, id, sex,
        book, pt, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13,
        s14, s15, s16, s17, s18, s19, s20]);
    td0.innerHTML = ++studentN0;
    td1.innerHTML = id;
    tdsex.innerHTML = sex;
    tdbook.innerHTML = 0;
    tdPT.innerHTML = 0;
    if(s1 == undefined){
        tdS1.innerHTML = 0;
    }else{
        tdS1.innerHTML = s1;
    }
    if (s2 == undefined){
        tdS2.innerHTML = 0;
        
    }else{
        tdS2.innerHTML = s2;
    }
    if (s3 == undefined){
        tdS3.innerHTML = 0;
    }else{
        tdS3.innerHTML = s3;
    }
    if (s4 == undefined){
        tdS4.innerHTML = 0;
    }else{
        tdS4.innerHTML = s4;
    }
    if (s5 == undefined){
        tdS5.innerHTML = 0;

    }else{
        tdS5.innerHTML = s5;
    }
    if (s6 == undefined){
        tdS6.innerHTML = 0;
    }else{
        tdS6.innerHTML = s6;
    }
    if(s7 == undefined){
        tdS7.innerHTML = 0;
    }else{
        tdS7.innerHTML = s7;
    }
    if(s8 == undefined){
        tdS8.innerHTML = 0;
    }else{
        tdS8.innerHTML = s8;
    }
    if(s9 == undefined){
        tdS9.innerHTML = 0;
    }else{
        tdS9.innerHTML = s9;
    }
    if(s10 == undefined){
        tdS10.innerHTML = 0;
    }else{
        tdS10.innerHTML = s10;
    }
    if(s11 == undefined){
        tdS11.innerHTML = 0;
    }else{
        tdS11.innerHTML = s11;
    }
    if(s12 == undefined){
        tdS12.innerHTML = 0;
    }else{
        tdS12.innerHTML = s12;
    }
    if(s13 == undefined){
        tdS13.innerHTML = 0;
    }else{
        tdS13.innerHTML = s13;
    }
    if(s14 == undefined){
        tdS14.innerHTML = 0;
    }else{
        tdS14.innerHTML = s14;
    }
    if(s15 == undefined){
        tdS15.innerHTML = 0;
    }else{
        tdS15.innerHTML = s15;
    }
    if(s16 == undefined){
        tdS16.innerHTML = 0;
    }else{
        tdS16.innerHTML = s16;
    }
    if(s17 == undefined){
        tdS17.innerHTML = 0;
    }else{
        tdS17.innerHTML = s17;
    }
    if(s18 == undefined){
        tdS18.innerHTML = 0;
    }else{
        tdS18.innerHTML = s18;
    }
    if(s19 == undefined){
        tdS19.innerHTML = 0;
    }else{
        tdS19.innerHTML = s19;
    }
    if(s20 == undefined){
        tdS20.innerHTML = 0;
    }else{
        tdS20.innerHTML = s20;
    }

    tdS21.innerHTML = 0;
    // tdS4.innerText = parseFloat(s) + parseFloat(w) + parseFloat(a) + parseFloat(attitude);


    trow.appendChild(td0);
    trow.appendChild(td1);
    trow.appendChild(tdsex);
    trow.appendChild(tdbook);
    trow.appendChild(tdPT);
    trow.appendChild(tdS1);
    trow.appendChild(tdS2);
    trow.appendChild(tdS3);
    trow.appendChild(tdS4);
    trow.appendChild(tdS5);
    trow.appendChild(tdS6);
    trow.appendChild(tdS7);
    trow.appendChild(tdS8);
    trow.appendChild(tdS9);
    trow.appendChild(tdS10);
    trow.appendChild(tdS11);
    trow.appendChild(tdS12);
    trow.appendChild(tdS13);
    trow.appendChild(tdS14);
    trow.appendChild(tdS15);
    trow.appendChild(tdS16);
    trow.appendChild(tdS17);
    trow.appendChild(tdS18);
    trow.appendChild(tdS19);
    trow.appendChild(tdS20);
    trow.appendChild(tdS21);
    trow.appendChild(tdS22);
    tdS22.appendChild(chkGet);

    // tdbook.appendChild(chkS);
    // tdPT.appendChild(chkW);
    // tdS1.appendChild(chkA);
    // tdS2.appendChild(chkAtt);

    // td1.innerHTML = `<button type="button" class="button-7" onclick="Fillbox(${studentN0})">${myKh}</button>`;
    tbody.appendChild(trow);
}
//Sum the table score
function dataS() {
    //S checked for checkbook
    for (i = 0; i < stdList.length; i++) {
        //Sum for All score
        var getName = stdList[i][0]; // for s
        var noSp = getName.replace(/\s+/g, '');
        var getTotal = `${noSp}s21`;
        var sbook = `${noSp}book`;
        var spt = `${noSp}pt`;
        var s1 = `${noSp}s1`;
        var s2 = `${noSp}s2`;
        var s3 = `${noSp}s3`;
        var s4 = `${noSp}s4`;
        var s5 = `${noSp}s5`;
        var s6 = `${noSp}s6`;
        var s7 = `${noSp}s7`;
        var s8 = `${noSp}s8`;
        var s9 = `${noSp}s9`;
        var s10 = `${noSp}s10`;
        var s11 = `${noSp}s11`;
        var s12 = `${noSp}s12`;
        var s13 = `${noSp}s13`;
        var s14 = `${noSp}s14`;
        var s15 = `${noSp}s15`;
        var s16 = `${noSp}s16`;
        var s17 = `${noSp}s17`;
        var s18 = `${noSp}s18`;
        var s19 = `${noSp}s19`;
        var s20 = `${noSp}s20`;
        document.getElementById('sumUpScore').addEventListener('click', function () {
            var gbook = 0;
            var gpt = 0;
            var gs1 = 0;
            var gs2 = 0;
            var gs3 = 0;
            var gs4 = 0;
            var gs5 = 0;
            var gs6 = 0;
            var gs7 = 0;
            var gs8 = 0;
            var gs9 = 0;
            var gs10 = 0;
            var gs11 = 0;
            var gs12 = 0;
            var gs13 = 0;
            var gs14 = 0;
            var gs15 = 0;
            var gs16 = 0;
            var gs17 = 0;
            var gs18 = 0;
            var gs19 = 0;
            var gs20 = 0;
            $(`.${sbook}`).each(function () {
                gbook += parseFloat($(this).text()); // 
            });
            $(`.${spt}`).each(function () {
                gpt += parseFloat($(this).text()); // 
            });
            $(`.${s1}`).each(function () {
                gs1 += parseFloat($(this).text()); // 
            });
            $(`.${s2}`).each(function () {
                gs2 += parseFloat($(this).text()); // 
            });
            $(`.${s3}`).each(function () {
                gs3 += parseFloat($(this).text()); // 
            });
            $(`.${s4}`).each(function () {
                gs4 += parseFloat($(this).text()); // 
            });
            $(`.${s5}`).each(function () {
                gs5 += parseFloat($(this).text()); // 
            });
            $(`.${s6}`).each(function () {
                gs6 += parseFloat($(this).text()); // 
            });
            $(`.${s7}`).each(function () {
                gs7 += parseFloat($(this).text()); // 
            });
            $(`.${s8}`).each(function () {
                gs8 += parseFloat($(this).text()); // 
            });
            $(`.${s9}`).each(function () {
                gs9 += parseFloat($(this).text()); // 
            });
            $(`.${s10}`).each(function () {
                gs10 += parseFloat($(this).text()); // 
            });
            $(`.${s11}`).each(function () {
                gs11 += parseFloat($(this).text()); // 
            });
            $(`.${s12}`).each(function () {
                gs12 += parseFloat($(this).text()); // 
            });
            $(`.${s13}`).each(function () {
                gs13 += parseFloat($(this).text()); // 
            });
            $(`.${s14}`).each(function () {
                gs14 += parseFloat($(this).text()); // 
            });
            $(`.${s15}`).each(function () {
                gs15 += parseFloat($(this).text()); // 
            });
            $(`.${s16}`).each(function () {
                gs16 += parseFloat($(this).text()); // 
            });
            $(`.${s17}`).each(function () {
                gs17 += parseFloat($(this).text()); // 
            });
            $(`.${s18}`).each(function () {
                gs18 += parseFloat($(this).text()); // 
            });
            $(`.${s19}`).each(function () {
                gs19 += parseFloat($(this).text()); // 
            });
            $(`.${s20}`).each(function () {
                gs20 += parseFloat($(this).text()); // 
            });
            var bookPt = parseFloat(gbook) + parseFloat(gpt);
            var actSum =
             parseFloat(gs1) + 
             parseFloat(gs2) + 
             parseFloat(gs3) + 
             parseFloat(gs4) + 
             parseFloat(gs5) + 
             parseFloat(gs6) + 
             parseFloat(gs7) + 
             parseFloat(gs8) + 
             parseFloat(gs9) + 
             parseFloat(gs10) + 
             parseFloat(gs11) + 
             parseFloat(gs12) + 
             parseFloat(gs13) + 
             parseFloat(gs14) + 
             parseFloat(gs15) + 
             parseFloat(gs16) + 
             parseFloat(gs17) + 
             parseFloat(gs18) + 
             parseFloat(gs19) + 
             parseFloat(gs20);
            var di = actSum / 20 / 2;
            var sumAll = bookPt + di;
            document.getElementById(`${getTotal}`).innerHTML = sumAll;
        })


    }
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
            var col9 = currentRow.find("td:eq(8)").html();
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
                const sleep = async (milliseconds) => {
                    await new Promise(resolve => {
                        return setTimeout(resolve, milliseconds);
                    });

                    // Check for All
                    for (i = 0; i < activityData.length; i++) {
                        var idss = activityData[i].ids;
                        var idww = activityData[i].idw;
                        var idaa = activityData[i].ida;
                        var idattu = activityData[i].idatt;

                        var checkBoxss = document.getElementById(`${idss}`);
                        var checkBoxww = document.getElementById(`${idww}`);
                        var checkBoxaa = document.getElementById(`${idaa}`);
                        var checkBoxatt = document.getElementById(`${idattu}`);
                        if (checkBoxss.checked == true
                            && checkBoxss.id == idss) {
                            obj.s = '3';
                            cook();

                        }
                        if (checkBoxss.checked == false
                            && checkBoxss.id == idss) {
                            obj.s = '0';
                            cook();
                        }
                        if (checkBoxww.checked == true && checkBoxww.id == idww) {
                            obj.w = '1';
                            cook();
                        }
                        if (checkBoxww.checked == false && checkBoxww.id == idww) {
                            obj.w = '0';
                            cook();
                        }
                        if (checkBoxaa.checked == true && checkBoxaa.id == idaa) {
                            obj.a = '1';
                            cook();
                        }
                        if (checkBoxaa.checked == false && checkBoxaa.id == idaa) {
                            obj.a = '0';
                            cook();
                        }
                        if (checkBoxatt.checked == true && checkBoxatt.id == idattu) {
                            obj.attitude = '-1';
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

                        }
                        if (checkBoxatt.checked == false && checkBoxatt.id == idattu) {
                            obj.attitude = '0';
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

                        }

                    }

                };
                sleep(1500);
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
// document.getElementById('myDate').addEventListener('change', function () {
//     var datesact = document.getElementById('myDate').value;
//     localStorage.setItem('owndateAct', datesact);
//     window.location.reload();

// })
var dbmonthAct = localStorage.getItem('ownmonthAct'); //month activity
var dbtimesAct = localStorage.getItem('owntimesAct'); // times activity
// var dbdateAct = localStorage.getItem('owndateAct'); // date activity
document.getElementById('myMonthAct').value = dbmonthAct;
document.getElementById('myTimesAct').value = dbtimesAct;
// document.getElementById('myDate').value = dbdateAct;

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
        firebase.database().ref(`4A/` + `recordActivity/` + `2022-2023/` + `${dbmonthAct}/` + `${dbtimesAct}/` + idM).set(
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
document.getElementById("showAlert").style.display = "none";
