package com.kyn.exception;

public class StoreNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7719206715528002669L;

	public StoreNotFoundException(Long id) {
		super("Could not found the store with id "+id);
	}
}
