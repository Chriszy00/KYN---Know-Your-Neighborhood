package com.kyn.controller;

import java.util.Collections;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.entity.Role;
import com.kyn.entity.RoleName;
import com.kyn.entity.Store;
import com.kyn.exception.AppException;
import com.kyn.exception.StoreNotFoundException;
import com.kyn.payload.AddStoreRequest;
import com.kyn.payload.ApiResponse;
import com.kyn.repo.RoleRepo;
import com.kyn.repo.StoreRepo;

@RestController
@RequestMapping("/api/auth")
public class StoreController {

	@Autowired
	StoreRepo storeRepo;
	
	@Autowired
	RoleRepo roleRepository;

	@PostMapping("addStore")
//	@PreAuthorize("hasRole('USER')")
	public ResponseEntity<ApiResponse> addStore(@Valid @RequestBody AddStoreRequest addStoreRequest) {
		if (storeRepo.existsByStoreName(addStoreRequest.getStoreName())) {
			return ResponseEntity.badRequest().body(new ApiResponse(false, "Store Name has been added already"));
		}

		// Add Store

		Store store = new Store(addStoreRequest.getStoreName(), addStoreRequest.getContactno(),
				addStoreRequest.getAddress(), addStoreRequest.getRegistrationDate());
		
//		Role storeRole = roleRepository.findByName(RoleName.ROLE_USER)
//                .orElseThrow(() -> new AppException("User Role not set."));
//		
//		store.setRoles(Collections.singleton(storeRole));
		
		Store result = storeRepo.save(store);
		
		return ResponseEntity.ok(new ApiResponse(true, "User registered successfully"));
	}

	// Show all stores
	@GetMapping("showStores")
	List<Store> getAllStores() {
		return storeRepo.findAll();
	}

	// Show store by id
	@GetMapping("storeDetails/{id}")
	Store getStoreById(@PathVariable Long id) {
		return storeRepo.findById(id).orElseThrow(() -> new StoreNotFoundException(id));
	}

	// Edit store details
	@PutMapping("updateStore/{id}")
	Store updatestore(@RequestBody Store c, @PathVariable Long id) {
		return storeRepo.findById(id).map(store -> {
			store.setStoreName(c.getStoreName());
			store.setContactno(c.getContactno());
			store.setAddress(c.getAddress());
			store.setRegistrationDate(c.getRegistrationDate());
			return storeRepo.save(store);
		}).orElseThrow(() -> new StoreNotFoundException(id));
	}

	// Delete store
	@DeleteMapping("deletestore/{id}")
	String deletestore(@PathVariable Long id) {
		if (!storeRepo.existsById(id)) {
			throw new StoreNotFoundException(id);
		}
		storeRepo.deleteById(id);
		return "store with id: " + id + " has been deleted successfully";
	}
}
