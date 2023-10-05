// Object Person
class Person {
    constructor(name, email, phone){
        this.name = name
        this.email = email
        this.phone = phone
    }
}

// Object Patient
class Patient extends Person {
    constructor(name, email, phone, dob, gender, address, medicalHistory){
        super(name, email, phone)
        this.dob = dob
        this.gender = gender
        this.address = address
        this.medicalHistory = medicalHistory
    }
}

// Object Doctor
class Doctor extends Person {
    constructor(name, email, phone, specialisation, role){
        super(name, email, phone)
        this.specialisation = specialisation
        this.role = role
    }
}

// Object Other professional
class OtherProfessional extends Person {
    constructor(name, email, phone, role, workingTime){
        super(name, email, phone)
        this.role = role
        this.workingTime = workingTime
    }
}

// Object BookAppointment
class BookAppointment {
    constructor(day, time, doctor, patient){
        this.day = day
        this.time = time
        this.doctor = doctor
        this.patient = patient
    }
}

// Object BookAdmission
class BookAdmission {
    constructor(startDate, endDate, hospitalWard, doctor, patient, otherProfessional){
        this.startDate = startDate
        this.endDate = endDate
        this.hospitalWard = hospitalWard
        this.doctor = doctor
        this.patient = patient
        this.otherProfessional = otherProfessional
    }
}

// create global scope variables - getting data from the DOM
let personName = document.getElementById('personName')
let personEmail = document.getElementById('personEmail')
let personPhone = document.getElementById('personPhone')
let personDob = document.getElementById('personDob')
let personGender = document.getElementById('personGender')
let personAddress = document.getElementById('personAddress')
let personMedicalHistory = document.getElementById('personMedicalHistory')
let personSpecialisation = document.getElementById('personSpecialisation')
let personRole = document.getElementById('personRole')
let personWorkingTime = document.getElementById('personWorkingTime')
let showInfoTable = document.getElementById('showInfoTable')


// Edit info - person
let personNameEdit = document.getElementById('personNameEdit')
let personEmailEdit = document.getElementById('personEmailEdit')
let personPhoneEdit = document.getElementById('personPhoneEdit')
let personDobEdit = document.getElementById('personDobEdit')
let personGenderEdit = document.getElementById('personGenderEdit')
let personAddressEdit = document.getElementById('personAddressEdit')
let personMedicalHistoryEdit = document.getElementById('personMedicalHistoryEdit')
let personSpecialisationEdit = document.getElementById('personSpecialisationEdit')
let personRoleEdit = document.getElementById('personRoleEdit')
let personWorkingTimeEdit = document.getElementById('personWorkingTimeEdit')
let modal = document.getElementById('modal')

// Booking Form
let bookDay = document.getElementById('bookDay')
let bookTime = document.getElementById('bookTime')
let bookDoctor = document.getElementById('bookDoctor')
let bookPatient = document.getElementById('bookPatient')
let bookStartDate = document.getElementById('bookStartDate')
let bookEndDate = document.getElementById('bookEndDate')
let bookHospitalWard = document.getElementById('bookHospitalWard')
let bookOtherProfessional = document.getElementById('bookOtherProfessional')

// Edit info - Booking Form
let bookDayEdit = document.getElementById('bookDayEdit')
let bookTimeEdit = document.getElementById('bookTimeEdit')
let bookDoctorEdit = document.getElementById('bookDoctorEdit')
let bookPatientEdit = document.getElementById('bookPatientEdit')
let bookStartDateEdit = document.getElementById('bookStartDateEdit')
let bookEndDateEdit = document.getElementById('bookEndDateEdit')
let bookHospitalWardEdit = document.getElementById('bookHospitalWardEdit')
let bookOtherProfessionalEdit = document.getElementById('bookOtherProfessionalEdit')

// Search Page
let searchField = document.getElementById('searchField')

// IFrame
let pageContent = document.getElementById('page_content')


//Function save arrays on localStorage
let savePatientsLocalStorage = patients => localStorage.setItem('patients', JSON.stringify(patients))
let saveDoctorsLocalStorage = doctors => localStorage.setItem('doctors', JSON.stringify(doctors))
let saveProfessionalsLocalStorage = professionals => localStorage.setItem('professionals', JSON.stringify(professionals))
let saveAppointmentsLocalStorage = appointments => localStorage.setItem('appointments', JSON.stringify(appointments))
let saveAdmissionsLocalStorage = admissions => localStorage.setItem('admissions', JSON.stringify(admissions))

// Function read array from localStorage
let getPatientsLocalStorage = () => {
    let patientsJSON = localStorage.getItem('patients')
    if (patientsJSON) {
        return JSON.parse(patientsJSON)
    } else {
        return []
    }
}
let getDoctorsLocalStorage = () => {
    let doctorsJSON = localStorage.getItem('doctors')
    if (doctorsJSON) {
        return JSON.parse(doctorsJSON)
    } else {
        return []
    }
}
let getProfessionalsLocalStorage = () => {
    let professionalsJSON = localStorage.getItem('professionals')
    if (professionalsJSON) {
        return JSON.parse(professionalsJSON)
    } else {
        return []
    }
}
let getAppointmentsLocalStorage = () => {
    let appointmentsJSON = localStorage.getItem('appointments')
    if (appointmentsJSON) {
        return JSON.parse(appointmentsJSON)
    } else {
        return []
    }
}
let getAdmissionsLocalStorage = () => {
    let admissionsJSON = localStorage.getItem('admissions')
    if (admissionsJSON) {
        return JSON.parse(admissionsJSON)
    } else {
        return []
    }
}

// Arrays List
let listPatients = getPatientsLocalStorage('patient')
let listDoctors = getDoctorsLocalStorage('doctor')
let listProfessionals = getProfessionalsLocalStorage('professional')
let listAppointments = getAppointmentsLocalStorage('appointment')
let listAdmissions = getAdmissionsLocalStorage('admission')


// Function to save new patient on the array into localStorage
let savePatient = () => {
    let newPatient = new Patient(personName.value, personEmail.value, personPhone.value, personDob.value, personGender.value, personAddress.value, personMedicalHistory.value)
    //let patients = getPatientsLocalStorage('patient')
    listPatients.push(newPatient)
    savePatientsLocalStorage(listPatients)

    // clear form
    reset('listPatients')

    // show list updated
    showPatientsInfo()
}

let saveDoctor = () => {
    let newDoctor = new Doctor(personName.value, personEmail.value, personPhone.value, personSpecialisation.value, personRole.value)
    listDoctors.push(newDoctor)
    saveDoctorsLocalStorage(listDoctors)

    // clear form
    reset('listDoctors')

    // show list updated
    showDoctorsInfo()
}
let saveProfessional = () => {
    let newProfessional = new OtherProfessional(personName.value, personEmail.value, personPhone.value, personRole.value, personWorkingTime.value)
    listProfessionals.push(newProfessional)
    saveProfessionalsLocalStorage(listProfessionals)

    // clear form
    reset('listProfessionals')

    // show list updated
    showProfessionalsInfo()
}
let saveAppointment = () => {
    let newAppointment = new BookAppointment(bookDay.value, bookTime.value, bookDoctor.value, bookPatient.value)
    listAppointments.push(newAppointment)
    saveAppointmentsLocalStorage(listAppointments)

    // clear form
    reset('listAppointments')

    // show list updated
    showAppointmentsInfo()
}
let saveAdmission = () => {
    let newAdmission = new BookAdmission(bookStartDate.value, bookEndDate.value, bookHospitalWard.value, bookDoctor.value, bookPatient.value, bookOtherProfessional.value)
    listAdmissions.push(newAdmission)
    saveAdmissionsLocalStorage(listAdmissions)

    // clear form
    reset('listAdmissions')

    // show list updated
    showAdmissionsInfo()
}


// Read arrays saved on localStorage. Print data on the screen.
let showPatientsInfo = () => {
    
    showInfoTable.innerHTML = ''

    if(listPatients.length > 0){
        // array not empty
        for(let x in listPatients){
                // show table info
            showInfoTable.innerHTML += `
                <tr>
                    <td>${listPatients[x].name}</td>
                    <td>${listPatients[x].email}</td>
                    <td>${listPatients[x].phone}</td>
                    <td>${listPatients[x].dob}</td>
                    <td>${listPatients[x].gender}</td>
                    <td>${listPatients[x].address}</td>
                    <td>${listPatients[x].medicalHistory}</td>
                    <td> 
                        <button type='button' class="btn btn-primary btn-sm mx-2" onclick="edit('listPatients', ${x})">Edit</button>
                        <button type='button' class="btn btn-danger btn-sm mx-2" onclick="remove('listPatients', ${x})">Remove</button>
                    </td>
                </tr>
            `
        }
    }else{
        // show table info
        showInfoTable.innerHTML = `
        <tr>
            <td>Patient's list is empty.</td>
        </tr>
        `
    }
}
let showDoctorsInfo = () => {
    
    showInfoTable.innerHTML = ''

    if(listDoctors.length > 0){
        // array not empty
        for(let x in listDoctors){
            // show table info
            showInfoTable.innerHTML += `
                <tr>
                    <td>${listDoctors[x].name}</td>
                    <td>${listDoctors[x].email}</td>
                    <td>${listDoctors[x].phone}</td>
                    <td>${listDoctors[x].specialisation}</td>
                    <td>${listDoctors[x].role}</td>
                    <td> 
                        <button type='button' class="btn btn-primary btn-sm mx-2" onclick="edit('listDoctors', ${x})">Edit</button>
                        <button type='button' class="btn btn-danger btn-sm mx-2" onclick="remove('listDoctors', ${x})">Remove</button>
                    </td>
                </tr>
            `
        }
    }else{
        // show table info
        showInfoTable.innerHTML = `
        <tr>
            <td>Doctor's list is empty.</td>
        </tr>
        `
    }
}
let showProfessionalsInfo = () => {
    
    showInfoTable.innerHTML = ''

    if(listProfessionals.length > 0){
        // array not empty
        for(let x in listProfessionals){
            // show table info
            showInfoTable.innerHTML += `
                <tr>
                    <td>${listProfessionals[x].name}</td>
                    <td>${listProfessionals[x].email}</td>
                    <td>${listProfessionals[x].phone}</td>
                    <td>${listProfessionals[x].role}</td>
                    <td>${listProfessionals[x].workingTime}</td>
                    <td> 
                        <button type='button' class="btn btn-primary btn-sm mx-2" onclick="edit('listProfessionals', ${x})">Edit</button>
                        <button type='button' class="btn btn-danger btn-sm mx-2" onclick="remove('listProfessionals', ${x})">Remove</button>
                    </td>
                </tr>
            `
        }
    }else{
        // show table info
        showInfoTable.innerHTML = `
        <tr>
            <td>Other Professional's list is empty.</td>
        </tr>
        `
    }
}

let showAppointmentsInfo = () => {
    
    showInfoTable.innerHTML = ''

    if(listAppointments.length > 0){
        // array not empty
        for(let x in listAppointments){
            showInfoTable.innerHTML += `
                <tr>
                    <td>${listAppointments[x].day}</td>
                    <td>${listAppointments[x].time}</td>
                    <td>${listAppointments[x].doctor}</td>
                    <td>${listAppointments[x].patient}</td>
                    <td> 
                        <button type='button' class="btn btn-primary btn-sm mx-2" onclick="edit('listAppointments', ${x})">Edit</button>
                        <button type='button' class="btn btn-danger btn-sm mx-2" onclick="remove('listAppointments', ${x})">Remove</button>
                    </td>
                </tr>
            `
        }
    }else{
        // show table info
        showInfoTable.innerHTML = `
        <tr>
            <td>Appointments list is empty.</td>
        </tr>
        `
    }

    // Load dropdown for doctors and Patients list
    loadDropdownAppointment()
}

let showAdmissionsInfo = () => {
    
    showInfoTable.innerHTML = ''

    if(listAdmissions.length > 0){
        // array not empty
        for(let x in listAdmissions){
            // show table info
            showInfoTable.innerHTML += `
                <tr>
                    <td>${listAdmissions[x].startDate}</td>
                    <td>${listAdmissions[x].endDate}</td>
                    <td>${listAdmissions[x].hospitalWard}</td>
                    <td>${listAdmissions[x].doctor}</td>
                    <td>${listAdmissions[x].patient}</td>
                    <td>${listAdmissions[x].otherProfessional}</td>
                    <td> 
                        <button type='button' class="btn btn-primary btn-sm mx-2" onclick="edit('listAdmissions', ${x})">Edit</button>
                        <button type='button' class="btn btn-danger btn-sm mx-2" onclick="remove('listAdmissions', ${x})">Remove</button>
                    </td>
                </tr>
            `
        }
    }else{
        // show table info
        showInfoTable.innerHTML = `
        <tr>
            <td>Admission's list is empty.</td>
        </tr>
        `
    }

    // Load dropdown for Doctors, Patients and Other professionals list
    loadDropdownAdmission()
}


function remove(array, valor){
    if(array === 'listPatients'){
        let selectedItem = listPatients[valor]
        console.log(selectedItem)
        let index = listPatients.indexOf(selectedItem)
        if(index !== -1){ 
            listPatients.splice(index, 1)
            // save new listPatients w/ removed item on localStorage
            savePatientsLocalStorage(listPatients)
        }
        showPatientsInfo()
    } 
    if(array === 'listDoctors'){
        let selectedItem = listDoctors[valor]
        let index = listDoctors.indexOf(selectedItem)
        if(index !== -1){ 
            listDoctors.splice(index, 1)
            saveDoctorsLocalStorage(listDoctors)
        }
        showDoctorsInfo()
    } 
    if(array === 'listProfessionals'){
        let selectedItem = listProfessionals[valor]
        let index = listProfessionals.indexOf(selectedItem)
        if(index !== -1){ 
            listProfessionals.splice(index, 1)
            saveProfessionalsLocalStorage(listProfessionals)
        }
        showProfessionalsInfo()
    } 
    if(array === 'listAppointments'){
        let selectedItem = listAppointments[valor]
        let index = listAppointments.indexOf(selectedItem)
        if(index !== -1){ 
            listAppointments.splice(index, 1)
            saveAppointmentsLocalStorage(listAppointments)
        }
        showAppointmentsInfo()
    } 
    if(array === 'listAdmissions'){
        let selectedItem = listAdmissions[valor]
        let index = listAdmissions.indexOf(selectedItem)
        if(index !== -1){ 
            listAdmissions.splice(index, 1)
            saveAdmissionsLocalStorage(listAdmissions)
        }
        showAdmissionsInfo()
    } 
    
}

// function edit info
function edit(array, valor){
    // display modalEdit
    openModal()

    if(array === 'listPatients'){
        // Insert info from selected item into edit form fields
        personNameEdit.value = listPatients[valor].name
        personEmailEdit.value = listPatients[valor].email
        personPhoneEdit.value = listPatients[valor].phone
        personDobEdit.value = listPatients[valor].dob
        personGenderEdit.value = listPatients[valor].gender
        personAddressEdit.value = listPatients[valor].address
        personMedicalHistoryEdit.value = listPatients[valor].medicalHistory

        // insert update button
        document.getElementById('btnSaveEdit').innerHTML = `
            <button type="button" class="btn btn-primary btn-sm" onclick="saveEdit('listPatients', ${valor})">Update</button>
        `
    } 
    if(array === 'listDoctors'){
        // Insert info from selected item into edit form fields
        // name, email, phone, specialisation, role
        personNameEdit.value = listDoctors[valor].name
        personEmailEdit.value = listDoctors[valor].email
        personPhoneEdit.value = listDoctors[valor].phone
        personSpecialisationEdit.value = listDoctors[valor].specialisation
        personRoleEdit.value = listDoctors[valor].role

        // insert update button
        document.getElementById('btnSaveEdit').innerHTML = `
            <button type="button" class="btn btn-primary btn-sm" onclick="saveEdit('listDoctors', ${valor})">Update</button>
        `
    } 
    if(array === 'listProfessionals'){
        // Insert info from selected item into edit form fields
        // name, email, phone, role, workingTime
        personNameEdit.value = listProfessionals[valor].name
        personEmailEdit.value = listProfessionals[valor].email
        personPhoneEdit.value = listProfessionals[valor].phone
        personRoleEdit.value = listProfessionals[valor].role
        personWorkingTimeEdit.value = listProfessionals[valor].workingTime

        // insert update button
        document.getElementById('btnSaveEdit').innerHTML = `
            <button type="button" class="btn btn-primary btn-sm" onclick="saveEdit('listProfessionals', ${valor})">Update</button>
        `
    } 
    if(array === 'listAppointments'){
        // Insert info from selected item into edit form fields
        // day, time, doctor, patient
        bookDayEdit.value = listAppointments[valor].day
        bookTimeEdit.value = listAppointments[valor].time
        bookDoctorEdit.value = listAppointments[valor].doctor
        bookPatientEdit.value = listAppointments[valor].patient

        // insert update button
        document.getElementById('btnSaveEdit').innerHTML = `
            <button type="button" class="btn btn-primary btn-sm" onclick="saveEdit('listAppointments', ${valor})">Update</button>
        `
    }
    if(array === 'listAdmissions'){
        // Insert info from selected item into edit form fields
        bookStartDateEdit.value = listAdmissions[valor].startDate
        bookEndDateEdit.value = listAdmissions[valor].endDate
        bookHospitalWardEdit.value = listAdmissions[valor].hospitalWard
        bookDoctorEdit.value = listAdmissions[valor].doctor
        bookPatientEdit.value = listAdmissions[valor].patient
        bookOtherProfessionalEdit.value = listAdmissions[valor].otherProfessional

        // insert update button
        document.getElementById('btnSaveEdit').innerHTML = `
            <button type="button" class="btn btn-primary btn-sm" onclick="saveEdit('listAdmissions', ${valor})">Update</button>
        `
    }
}

// save edited info on the array
function saveEdit(array, valor){
    
    if(array === 'listPatients'){
        listPatients[valor].name = personNameEdit.value
        listPatients[valor].email = personEmailEdit.value
        listPatients[valor].phone = personPhoneEdit.value
        listPatients[valor].dob = personDobEdit.value
        listPatients[valor].gender = personGenderEdit.value
        listPatients[valor].address = personAddressEdit.value
        listPatients[valor].medicalHistory = personMedicalHistoryEdit.value
        savePatientsLocalStorage(listPatients)
        showPatientsInfo()
    } 
    if(array === 'listDoctors'){
        // name, email, phone, specialisation, role
        listDoctors[valor].name = personNameEdit.value
        listDoctors[valor].email = personEmailEdit.value
        listDoctors[valor].phone = personPhoneEdit.value
        listDoctors[valor].specialisation = personSpecialisationEdit.value
        listDoctors[valor].role = personRoleEdit.value
        saveDoctorsLocalStorage(listDoctors)
        showDoctorsInfo()
    } 
    if(array === 'listProfessionals'){
        // name, email, phone, role, workingTime
        listProfessionals[valor].name = personNameEdit.value
        listProfessionals[valor].email = personEmailEdit.value
        listProfessionals[valor].phone = personPhoneEdit.value
        listProfessionals[valor].role = personRoleEdit.value
        listProfessionals[valor].workingTime = personWorkingTimeEdit.value
        saveProfessionalsLocalStorage(listProfessionals)
        showProfessionalsInfo()
    } 
    if(array === 'listAppointments'){
        listAppointments[valor].day = bookDayEdit.value
        listAppointments[valor].time = bookTimeEdit.value
        listAppointments[valor].doctor = bookDoctorEdit.value
        listAppointments[valor].patient = bookPatientEdit.value
        saveAppointmentsLocalStorage(listAppointments)
        showAppointmentsInfo()
    } 
    if(array === 'listAdmissions'){
        listAdmissions[valor].startDate = bookStartDateEdit.value
        listAdmissions[valor].endDate = bookEndDateEdit.value
        listAdmissions[valor].hospitalWard = bookHospitalWard.value
        listAdmissions[valor].doctor = bookDoctorEdit.value
        listAdmissions[valor].patient = bookPatientEdit.value
        listAdmissions[valor].otherProfessional = bookOtherProfessionalEdit.value
        saveAdmissionsLocalStorage(listAdmissions)
        showAdmissionsInfo()
    }

    // close modal
    closeModal()
}

// Reset fields
function reset(array){
    // clear form fields
    if(array === 'listPatients'){
        personName.value = ''
        personEmail.value = ''
        personPhone.value = ''
        personDob.value = ''
        personGender.value = 'Select'
        personAddress.value = ''
        personMedicalHistory.value = ''
    } 
    if(array === 'listDoctors'){
        // name, email, phone, specialisation, role
        personName.value = ''
        personEmail.value = ''
        personPhone.value = ''
        personSpecialisation.value = 'Select'
        personRole.value = 'Select'
    } 
    if(array === 'listProfessionals'){
        // name, email, phone, role, workingTime
        personName.value = ''
        personEmail.value = ''
        personPhone.value = ''
        personWorkingTime.value = ''
        personRole.value = 'Select'
    } 
    if(array === 'listAppointments'){
        bookDay.value = ''
        bookTime.value = ''
        bookDoctor.value = 'Select'
        bookPatient.value = 'Select'
    } 
    if(array === 'listAdmissions'){
        bookStartDate.value = ''
        bookEndDate.value = ''
        bookHospitalWard.value = 'Select'
        bookDoctor.value = 'Select'
        bookPatient.value = 'Select'
        bookOtherProfessional.value = 'Select'
    } 

}

// Dropdowns list for Bookings
// bookDoctor.addEventListener("click", function() {
//     // read array
//     for(let x in listDoctors){
//         // show table info
//         bookDoctor.innerHTML += `
//             <option value="${listDoctors[x].name}">${listDoctors[x].name}</option>
//         `
//         bookDoctorEdit.innerHTML += `
//             <option value="${listDoctors[x].name}">${listDoctors[x].name}</option>
//         `
//     }
// })

// show Doctor list for Bookings
function doctorDropdown(){
    // read array
    // for(let x = 0; listDoctors.length > x; x++){
    //     // show table info
    //     bookDoctor.innerHTML += `
    //         <option value="${listDoctors[x].name}">${listDoctors[x].name}</option>
    //     `
    //     bookDoctorEdit.innerHTML += `
    //         <option value="${listDoctors[x].name}">${listDoctors[x].name}</option>
    //     `
    // }
    for(let x in listDoctors){
        // show table info
        bookDoctor.innerHTML += `
            <option value="${listDoctors[x].name}">${listDoctors[x].name}</option>
        `
        bookDoctorEdit.innerHTML += `
            <option value="${listDoctors[x].name}">${listDoctors[x].name}</option>
        `
    }
}

// show Patient list for Bookings
function patientDropdown(){
    // read array
    for(let x in listPatients){
        // show table info
        bookPatient.innerHTML += `
            <option value="${listPatients[x].name}">${listPatients[x].name}</option>
        `
        bookPatientEdit.innerHTML += `
            <option value="${listPatients[x].name}">${listPatients[x].name}</option>
        `
    }
}

// show Other Professional list for Bookings
function otherProfessionalDropdown(){
    // read array
    for(let x in listProfessionals){
        // show table info
        bookOtherProfessional.innerHTML += `
            <option value="${listProfessionals[x].name}">${listProfessionals[x].name}</option>
        `
        bookOtherProfessionalEdit.innerHTML += `
            <option value="${listProfessionals[x].name}">${listProfessionals[x].name}</option>
        `
    }
}

// Load Dropdowns
function loadDropdownAdmission(){
    // Fix JS error
    // This function is to make the dropdown loading only when page has bbeen accesed
    doctorDropdown()
    patientDropdown()
    otherProfessionalDropdown()

}
function loadDropdownAppointment(){
    // Fix JS error
    // This function is to make the dropdown loading only when page has bbeen accesed
    doctorDropdown()
    patientDropdown()
}

// Search function
function search(){
    let query = searchField.value.toLowerCase()
    listDoctors.filter(filterName)
    listPatients.filter(filterName)

    function filterName(item){
        let result = item.name.toLowerCase()
        let resultFound = result.includes(query)

        if(resultFound == true){
            console.log(result)
        }
    }
    pageContent.src = 'search_results.html'
}

// Side menu active class
function sideMenuActive(){
    let sideMenu = document.getElementById('sideMenu')
    let sideMenuLink = sideMenu.getElementsByClassName('nav-link')

    for (let i = 0; i < sideMenuLink.length; i++) {
        sideMenuLink[i].addEventListener("click", function() {
            let current = document.getElementsByClassName('active')
            current[0].className = current[0].className.replace(' active', ' link-body-emphasis');
            this.className = 'nav-link active'
        })
    }    
}

// Modal function
function openModal(){
    modal.style.display = 'block'
}
function closeModal(){
    modal.style.display = 'none'
}