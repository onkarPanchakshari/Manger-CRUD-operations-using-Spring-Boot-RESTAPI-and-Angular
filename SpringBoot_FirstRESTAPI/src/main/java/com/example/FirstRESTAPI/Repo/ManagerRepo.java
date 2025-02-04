package com.example.FirstRESTAPI.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.FirstRESTAPI.Model.Manager;

public interface ManagerRepo extends JpaRepository<Manager,Integer>
{

}
