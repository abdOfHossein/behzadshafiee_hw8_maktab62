$('#creat-btn').click(function () {
    let rowNum=6;
    let creat = function () {
        $('#creat-modal').css({
            'display': 'block',
        })
    }
    objtNewPerson=new Object();
    var uid = Number($('#uid').val());
    objtNewPerson.uid=uid;
    console.log(objtNewPerson);
    var firstName = $('#firstName').val();
    objtNewPerson.firstName=firstName;
    var lastName = $('#lastName').val();
    objtNewPerson.lastName=lastName;
    var position = $('#position').val();
    objtNewPerson.position=position;
    var city = $('#city').val();
    objtNewPerson.city=city;
    let resultNewPerson = [];
    resultNewPerson.push(objtNewPerson);
    console.log(resultNewPerson[0].uid);
    let showInfoRowly = function (personData) {
        let idRowNum=1;
        $('#table-data thead').before(
            `<tr id=${idRowNum}>
                <th scope="row">${rowNum+1}</th>
                <td>${personData[0].uid}</td>
                <td>${personData[0].firstName}</td>
                <td>${personData[0].lastName}</td>
                <td>${personData[0].position}</td>
                <td>${personData[0].city}</td>
            </tr>`
        )
        idRowNum++;
    }
    $('#btn-ok-creat').click(function () {
        for(let i=0;i<result.length;i++){
            if(resultNewPerson[0].uid===result[i].uid){
                alert("uid existed!!!");
            }
        }
        showInfoRowly(resultNewPerson);
    });
    $('#close').click(function () { 
        $('#creat-modal').css({
            'display': 'none',
        })
        
    });
    creat();
});




