package com.example.FirstRESTAPI.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
@CrossOrigin("http://localhost:4200/")

public class LoginController
{
  
	@PostMapping("/checkLogin")
	
	{
		
	}
}
