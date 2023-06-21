package com.kyn.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kyn.entity.Role;
import com.kyn.entity.RoleName;

@Repository
public interface RoleRepo extends JpaRepository<Role, Long>{

    Optional<Role> findByName(RoleName roleName);

}
