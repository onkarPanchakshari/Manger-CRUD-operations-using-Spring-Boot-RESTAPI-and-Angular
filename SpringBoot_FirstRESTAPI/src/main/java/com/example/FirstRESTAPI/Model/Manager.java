package com.example.FirstRESTAPI.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Manager
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int mid;
	private String mname;
	private String memail;
	private String mpass;
	public int getMid() {
		return mid;
	}
	public void setMid(int mid) {
		this.mid = mid;
	}
	public String getMname() {
		return mname;
	}
	public void setMname(String mname) {
		this.mname = mname;
	}
	public String getMemail() {
		return memail;
	}
	public void setMemail(String memail) {
		this.memail = memail;
	}
	public String getMpass() {
		return mpass;
	}
	public void setMpass(String mpass) {
		this.mpass = mpass;
	}
	@Override
	public String toString() {
		return "Manager [mid=" + mid + ", mname=" + mname + ", memail=" + memail + ", mpass=" + mpass + "]";
	}
       
	

}
