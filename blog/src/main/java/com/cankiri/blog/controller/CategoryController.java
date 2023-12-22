package com.cankiri.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cankiri.blog.model.Category;
import com.cankiri.blog.repository.CategoryRepository;

@RestController
@RequestMapping("/api")
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@RequestMapping("/categories")
	public List<Category> getCategories() {	
		return categoryRepository.findAll();
	}
	
	@RequestMapping(value = "/category/create", method = RequestMethod.POST)
	public Category createCategory(@RequestBody Category category) {
		return categoryRepository.save(category);
	}

}
