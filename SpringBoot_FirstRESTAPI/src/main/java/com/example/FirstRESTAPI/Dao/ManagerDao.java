package com.example.FirstRESTAPI.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FirstRESTAPI.Model.Manager;
import com.example.FirstRESTAPI.Repo.ManagerRepo;
import com.example.FirstRESTAPI.Server.ManagerService;

@Service
public class ManagerDao implements ManagerService
{
	@Autowired
	ManagerRepo mr;

	@Override
	public void registerManager(Manager mn)
	{
	
		mr.save(mn);
		

	}

	@Override
	public List<Manager> getallinfo()
	{
		return mr.findAll();
	}

	@Override
	public Manager getSingleInfo(int id) 
	{
		

		return mr.findById(id).orElse(null);
	}

	@Override
	public void del(int id)
	{
		mr.deleteById(id);
		
	}

	@Override
	public Manager update(Manager mg, int id) 
	{
		Manager m1 = mr.findById(id).orElse(null);
		
		if(mg.getMname() != null)m1.setMname(mg.getMname());
		if(mg.getMemail() != null)m1.setMemail(mg.getMemail());
		if(mg.getMpass() != null)m1.setMpass(mg.getMpass());
		
		return mr.save(m1);
		
		// Here we creat m1 name variable of MAnager in  and set the updated value by getting  them 
		//then save the m1 be
	}
	
	
	

}
