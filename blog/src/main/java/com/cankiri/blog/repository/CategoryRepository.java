package com.cankiri.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cankiri.blog.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{
	
	
	List<Category> findByName(String name);
	
	List<Category> findByNameContains(String name);
	
	

}
