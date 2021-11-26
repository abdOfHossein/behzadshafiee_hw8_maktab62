//readFunc
let result = [];
let readFunc = function () {
    function merge() {
        for (let person of personData) {
            let firstPersonDate = additionalPersonData.find(
                (el) => el.uid === person.uid
            );
            result.push({ ...person, ...firstPersonDate })
        }
        console.log(result);
        return;
    }
    merge();
    let row = 0;
    let addInfo = function () {
        let showInfoRowly = function (personData) {
            $('#table-data thead').before(
                `<tr>
                    <th scope="row">${row}</th>
                    <td>${personData.uid}</td>
                    <td>${personData.firstName}</td>
                    <td>${personData.lastName}</td>
                    <td>${personData.position}</td>
                    <td>${personData.city}</td>
                </tr>`
            )   
        }
        for (let i = 1; i <= result.length; i++) {
            row++;
            showInfoRowly(result[i - 1]);
        }

    }
    addInfo()
    return;
};
readFunc();


//creatFunc
