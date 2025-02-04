package com.example.FirstRESTAPI.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FirstRESTAPI.Model.Manager;
import com.example.FirstRESTAPI.Server.ManagerService;

@RestController
@RequestMapping("/Manager")
@CrossOrigin("http://localhost:4200/")
public class HomeController
{
	@Autowired
	ManagerService ms;
	
	@PostMapping("/SaveManagerInfo")
	public String one(@RequestBody Manager mn)
	{
		
		ms.registerManager(mn);
		
		return "Registrtion Succesfull";
	}
	
	
	@GetMapping("/fetchall")
	public List<Manager> two()
	{
		List<Manager> li = ms.getallinfo();
		return li;
	}
	
	@GetMapping("/GetSingleInfo/{id}")
	public Manager three(@PathVariable int id)
	{
		Manager mk = ms.getSingleInfo(id);
		
		return mk;
		
	}
	
	@DeleteMapping("/Delete/{id}")
	
	public String four(@PathVariable int id)
	{
		ms.del(id);
		return "Record delete Sussesfully";
	}
	
	
	@PutMapping("/update/{id}")
	public String five(@RequestBody Manager mg ,@PathVariable int id)
	{
		ms.update(mg,id);
		
		return "data Update";
	}
	

}
