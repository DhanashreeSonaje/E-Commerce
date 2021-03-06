import { Component, OnInit } from '@angular/core';
import { MerchantDetails } from '../models/MerchantDetails';


@Component({
  selector: 'app-update-merchant',
  templateUrl: './update-merchant.component.html',
  styleUrls: ['./update-merchant.component.css']
})
export class UpdateMerchantComponent implements OnInit {

merchant:MerchantDetails;
  userid;
  Merchant_id:number;
  Name:string;
  //Username:string;
  PhoneNo : String;
  Alternate_phone_no : String;
  Alternate_email: String;
  check=false;
  status: string;
  Rating:number;
  isApproved;
  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
  }
  getMerchant(){
    this.adminService.getMerchant(this.userid).subscribe((data:any)=>{this.merchant=data})
  }
 update(){
this.adminService.updateMerchant(this.merchant);
   
 }
 onCheckboxValueChange():any{
  this.check=!this.check
  if(this.check){
  this.status="Approved";
  alert(this.status)
  }
  else{
  this.status="Disapproved";
  alert(this.status)
  }
  this.isApproved=this.check;


}
}
