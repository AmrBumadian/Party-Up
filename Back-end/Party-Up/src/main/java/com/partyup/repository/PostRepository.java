package com.partyup.repository;

import com.partyup.model.posting.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository<Post,Long> {
	@Override
	Optional<Post> findById(Long id);

}
