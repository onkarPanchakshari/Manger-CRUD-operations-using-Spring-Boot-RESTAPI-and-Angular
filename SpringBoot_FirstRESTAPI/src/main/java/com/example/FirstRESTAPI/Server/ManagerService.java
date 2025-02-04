package com.example.FirstRESTAPI.Server;

import java.util.List;

import com.example.FirstRESTAPI.Model.Manager;

public interface ManagerService 
{

	public void registerManager(Manager mn);
	
	public List<Manager> getallinfo();

	public Manager getSingleInfo(int id);

	public void del(int id);

	public Manager update(Manager mg, int id);
	
}
