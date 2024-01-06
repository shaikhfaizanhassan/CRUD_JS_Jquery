$(document).ready(function () {
    $('#clear').hide();
    $('#update').hide();
});
var ArrayData = [];
function letsStart() {
    window.location.href = "crud.html";
}
function GetDetail() {
    $('#showtable tbody').empty();
    ArrayData.forEach(function (dataobject, index) {
        $('#showtable tbody').append(
            '<tr>' +
            '<td>' + (index + 1) + '</td>' +
            '<td>' + dataobject.FullName + '</td>' +
            '<td>' + dataobject.Email + '</td>' +
            '<td>' + dataobject.Password + '</td>' +
            '<td>' + dataobject.Contact + '</td>' +
            '<td>' + dataobject.Gender + '</td>' +
            '<td><button class="btn btn-success" onclick="EditDetail(' + index + ')">Edit</button> ' +
            '<button class="btn btn-danger" onclick="RemoveDetail(' + index + ')">Remove</button></td> ' +
            '</tr>'
        );
    });
}
function Save() {
    var FullName = $('#FullName').val();
    var Email = $('#Email').val();
    var Password = $('#Password').val();
    var Contact = $('#Contact').val();
    var Gender = $('#Gender').val();
    var data = JSON.stringify({
        FullName: FullName,
        Email: Email,
        Password: Password,
        Contact: Contact,
        Gender: Gender,
    });
    var parseJson = JSON.parse(data);
    ArrayData.push(parseJson);
    GetDetail();
    swal({
        title: "Good job!",
        text: "Data Save!",
        icon: "success",
        button: "Aww yiss!",
    });
    ClearFeild();
}
function EditDetail(index) {
    if (index >= 0 && index < ArrayData.length) {
        var dataobject = ArrayData[index];
        $('#index').val(index);
        $('#FullName').val(dataobject.FullName);
        $('#Email').val(dataobject.Email);
        $('#Password').val(dataobject.Password);
        $('#Contact').val(dataobject.Contact);
        $('#Gender').val(dataobject.Gender);
        $('#update').show();
        $('#clear').show();
        $('#save').hide();
    }
}
function Update() {
    var index = $('#index').val();
    var FullName = $('#FullName').val();
    var Email = $('#Email').val();
    var Password = $('#Password').val();
    var Contact = $('#Contact').val();
    var Gender = $('#Gender').val();
    if (index >= 0 && index < ArrayData.length) {
        ArrayData[index] = {
            FullName: FullName,
            Email: Email,
            Password: Password,
            Contact: Contact,
            Gender: Gender
        }
        swal({
            title: "Good job!",
            text: "Data Updated",
            icon: "success",
            button: "Aww yiss!",
        });
        GetDetail();
    }
}
function RemoveDetail(index) {
    swal({
        title: "Are you sure?",
        text: "you Want to delete this record",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {

            if (willDelete) {
                swal("Poof! Your record file has been deleted!", {
                    icon: "success",
                });
                if (index >= 0 && index < ArrayData.length) {
                    $('#showtable tbody tr').eq(index).remove();
                }
                else {
                }
            } else {
                swal("Your record is safe!");
            }
        });
}
function ClearFeild() {
    clear();
    $('#save').show();
    $('#clear').hide();
    $('#update').hide();
}
function clear() {
    $('#FullName').val('');
    $('#Email').val('');
    $('#Password').val('');
    $('#Contact').val('');
    $('#Gender').val('');
}
