package com.cankiri.blog.model.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cankiri.blog.model.Category;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;

@Repository
public class CategoryDaoImpl implements CategoryDao {
	
	@Autowired
	private EntityManager entityManager;
	

	@Override
	public List<Category> findAll() {
		 TypedQuery<Category> query = entityManager.createQuery("from Category", Category.class);
		 return query.getResultList();
	}

	@Override
	@Transactional
	public void save(Category category) {
		entityManager.persist(category);
		
	}

	@Override
	public Category findById(Long id) {
		return entityManager.find(Category.class, id);
	}

	@Override
	public void update(Category category) {
		entityManager.merge(category);
		
	}

	@Override
	public void delete(Long id) {
		Category cat = entityManager.find(Category.class, id);
		entityManager.remove(cat);
		
	}

	@Override
	public int deleteAll() {
		Query query = entityManager.createQuery("DELETE from Category");
		return query.executeUpdate();
	}

	@Override
	public List<Category> findByName(String categoryName) {
		TypedQuery<Category> query = entityManager.createQuery("from Category where name=:categoryName", Category.class);
		return query.getResultList();
	}

}
