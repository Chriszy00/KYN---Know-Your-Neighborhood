package com.kyn.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Store {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String storeName;
	private String contactno;
	private String address;
	private String registrationDate;

	
	
    public Store(String storeName, String contactno, String address, String registrationDate) {
        // Initialize the fields with the provided values
        this.storeName = storeName;
        this.contactno = contactno;
        this.address = address;
        this.registrationDate = registrationDate;
    }
        
	public Store() {
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(String registrationDate) {
		this.registrationDate = registrationDate;
	}
	
	



	@Override
	public String toString() {
		return "Store [id=" + id + ", storeName=" + storeName + ", contactno=" + contactno + ", address=" + address
				+ ", registrationDate=" + registrationDate + "]";
	}
	
	
}
