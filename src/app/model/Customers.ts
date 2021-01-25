

export class Customers{
    cus_id : String;
    firstName : String;
    lastName : String;
    email : String;
    phoneNumber : Array<Phone>;
    blouseMeasurements : BlouseMeasurements
    constructor(cus_id,firstName,lastName){
        this.cus_id=cus_id,
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

export class Phone{
    ph_id : String;
    phone_num : String;
    cus_id : String;

    constructor(ph_id,phone_num,cus_id){
        this.cus_id=cus_id,
        this.ph_id=ph_id;
        this.phone_num=phone_num;
    }
}

export class BlouseMeasurements{
	  blouseId : String;
	  backLength : number ;
	  fullShoulder : number ;
	  shoulderStrap : number ;
	  backNeckDepth : number ;
	  frontNeckDepth : number ;
	  shoulderApex  : number ;
	  frontLength : number ;
	  chestAround : number ;	
	  waistAround : number ;
	  sleeveLength : number ;
	  armAround : number ;
	  sleeveRound : number ;
	  armHole : number ;
	  others : number ;
}