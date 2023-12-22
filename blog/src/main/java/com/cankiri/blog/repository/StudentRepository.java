package com.cankiri.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cankiri.blog.model.Student;

import jakarta.transaction.Transactional;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
	
	List<Student> findByName(String name);
	Student findByNumber(Integer number);
	List<Student> findByNameAndSurname(String name, String surname);
	List<Student> findByNameOrSurname(String name, String surname);
	List<Student> findByNameIn(List<String> names);
	List<Student> findByNameContains(String name);
	List<Student> findByNameStartsWith(String name);
	
	@Query("SELECT s FROM Student s WHERE s.name=:name")
	List<Student> findMyStudents(String name);
	
	@Query(value = "SELECT * FROM MY_STUDENTS s WHERE s.name=:name", nativeQuery = true)
	List<Student> findMyStudentsNative(String name);
	
	@Transactional
	@Modifying
	@Query("UPDATE Student s SET s.name=?1 WHERE s.id=?2")
	int updateFirstNameById(String name, Long id);
}
