﻿using Backend.Models.Grades;
using Backend.Models.Students;
using Backend.Models.Students.Students;
using Backend.Models.Students_Subjects;
using Backend.ModelView;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : ControllerBase
    {
        private IStudentsRepository _repository;

        public StudentsController(IStudentsRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("Add")]
        public IActionResult Add([FromForm] StudentAddView Student)
        {
            bool res = _repository.Add(Student);

            if (res)
                return Ok("Successfully registered student!");
            else
                return Ok("Error registering student!");
        }

        [HttpGet("ListAll")]
        public IActionResult ListAll()
        {
            IEnumerable<StudentsModel> students = _repository.GetAll();

            return Ok(students);
        }

        [HttpGet("GetById")]
        public IActionResult GetById([Required] int Id)
        {
            StudentsModel student = _repository.GetById(Id);

            return Ok(student);
        }

        [HttpPut("UpdateById")]
        public IActionResult UpdateById([FromForm] StudentUpdateByIdView Student)
        {
            bool res = _repository.UpdateById(Student);

            if (res)
                return Ok("Student registration changed successfully!");
            else
                return Ok("Error when changing student registration!");
        }

        [HttpPost("DeleteById")]
        public IActionResult DeleteById([Required] int Id)
        {
            bool res = _repository.DeleteById(Id);

            if (res)
                return Ok("Student registration successfully deleted!");
            else
                return Ok("Error deleting student record!");
        }

        ///
        [HttpPost("AddEnrollStudent")]
        public IActionResult AddEnrollStudent([FromForm] EnrollStudentView EnrollStudent) {
            bool res = _repository.AddEnrollStudent(EnrollStudent);

            if (res)
                return Ok("Student enrolled successfully!");
            else
                return Ok("Error enrolling student!");
        }

        [HttpGet("GetAllStudentEnrollments")]
        public IActionResult GetAllStudentEnrollments()
        {
            IEnumerable<Students_SubjectsModel> studentEnrollments = _repository.GetAllStudentEnrollments();

            return Ok(studentEnrollments);
        }

        [HttpGet("GetStudentEnrollmentByRegistrationNumber")]
        public IActionResult GetStudentEnrollmentByRegistrationNumber([Required] int RegistrationNumber)
        {
            Students_SubjectsModel studentEnrollment = _repository.GetStudentEnrollmentByRegistrationNumber(RegistrationNumber);

            return Ok(studentEnrollment);
        }

        [HttpGet("GetAllStudentEnrollmentsByStudentId")]
        public IActionResult GetAllStudentEnrollmentsByStudentId([Required] int StudentId)
        {
            IEnumerable<Students_SubjectsModel> studentEnrollments = _repository.GetAllStudentEnrollmentsByStudentId(StudentId);

            return Ok(studentEnrollments);
        }


        [HttpPut("UpdateStudentEnrollmentById")]
        public IActionResult UpdateStudentEnrollmentById([FromForm] UpdateStudentEnrollmentByIdModel EnrollStudent)
        {
            bool res = _repository.UpdateStudentEnrollmentById(EnrollStudent);

            if (res)
                return Ok("Student registration changed successfully!");
            else
                return Ok("Error when changing student registration!");
        }
    }
}
