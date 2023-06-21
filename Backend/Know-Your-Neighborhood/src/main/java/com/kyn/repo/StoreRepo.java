package com.kyn.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kyn.entity.Store;

@Repository
public interface StoreRepo extends JpaRepository<Store, Long>{

	Boolean existsByStoreName(String storeName);
}
