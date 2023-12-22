package com.cankiri.blog.bootsrap;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.cankiri.blog.model.Category;
import com.cankiri.blog.model.dao.CategoryDao;
import com.cankiri.blog.repository.CategoryRepository;

@Component
public class BootsrapData implements CommandLineRunner{
	
	
	@Autowired
	private CategoryDao categoryDao;
	
	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public void run(String... args) throws Exception {
		Category cat1 = new Category();
		cat1.setName("Bilgisayar");
		
		Category cat2 = new Category();
		cat2.setName("Sanat");
		
		
//		categoryDao.save(cat1);
//		categoryDao.save(cat2);
		
		categoryRepository.save(cat1);
		categoryRepository.save(cat2);
		
		
		List<Category> findByNameContains = categoryRepository.findByNameContains("asdasd");
		for (Category cat : findByNameContains) {
			System.out.println(cat.getName());
		}
		
		
	}

}
