package com.cankiri.blog.model.dao;

import java.util.List;

import com.cankiri.blog.model.Category;

public interface CategoryDao {
	
	List<Category> findAll();
	
	void save(Category category);
	
	Category findById(Long id);
	
	void update(Category category);
	
	void delete(Long id);
	
	int deleteAll();
	
	List<Category> findByName(String name);
	

}
