package com.cankiri.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cankiri.blog.model.Category;
import com.cankiri.blog.repository.CategoryRepository;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@RequestMapping("/list")
	public List<Category> getCategories() {	
		return categoryRepository.findAll();
	}
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public Category createCategory(@RequestBody Category category) {
		return categoryRepository.save(category);
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public Category update(@RequestBody Category category) {
		return categoryRepository.save(category);
	}
	
	@RequestMapping(value = "/detail/{id}")
	public Category getDetail(@PathVariable Long id) {
		return categoryRepository.findById(id).get();
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
	public void delete(@PathVariable Long id) {
		categoryRepository.deleteById(id);
	}
	

}
