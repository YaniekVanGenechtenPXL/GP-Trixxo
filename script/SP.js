const employerCanvas = document.getElementById("employerSPCanvas");
const userCanvas = document.getElementById("userSPCanvas");

const employerSignaturePad = new SignaturePad(employerCanvas);
const userSignaturePad = new SignaturePad(userCanvas);

document.getElementById('button__SP__undoEmployer').addEventListener('click', function () {
	let data = employerSignaturePad.toData();
  if (data) {
    data.pop();
    employerSignaturePad.fromData(data);
  }
});

document.getElementById('button__SP__undoUser').addEventListener('click', function () {
	let data = userSignaturePad.toData();
  if (data) {
    data.pop();
    userSignaturePad.fromData(data);
  }
});

document.getElementById('button__SP__clearEmployer').addEventListener('click', function () {
    employerSignaturePad.clear();
});

document.getElementById('button__SP__clearUser').addEventListener('click', function () {
    userSignaturePad.clear();
});