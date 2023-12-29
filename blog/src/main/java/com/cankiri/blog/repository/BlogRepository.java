package com.cankiri.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cankiri.blog.model.BlogPost;

@Repository
public interface BlogRepository extends JpaRepository<BlogPost, Long>{

}
