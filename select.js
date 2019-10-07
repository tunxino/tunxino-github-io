var students = [
    { id: 1, name: 'trần văn a', className: '.Net' },
    { id: 2, name: 'trần văn b', className: '.Net' },
    { id: 3, name: 'trần văn c', className: 'Angular'},
    { id: 4, name: 'trần văn d', className: 'Angular'},
    { id: 5, name: 'trần văn e', className: 'Java' },
    { id: 6, name: 'trần văn f', className: 'Java' },
    { id: 7, name: 'trần văn e', className: 'Java' },
    { id: 8, name: 'trần văn f', className: 'Test' },
    { id: 9, name: 'trần văn g', className: 'Test' },
    { id: 10, name: 'trần văn h', className: 'Test' }
]


var selectValue = document.getElementById("select-value-subject");
selectValue.addEventListener('click', filterBySubject)

function filterBySubject() {
    console.log(selectValue.value)
    var filterStudent = students.filter(function(item) {
        return selectValue.value === item.className;
    });
    render(filterStudent)

};

function render(students) {
    var tableList = document.getElementById("select-value-student");
    var student = students.map((item) => {
        return '<option>' + item.name + '</option>';
    });
    console.log(student);
    tableList.innerHTML = student.join();
}
render(students);