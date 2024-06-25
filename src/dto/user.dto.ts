export default interface userDTO {
    id?:string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    password?:string;
    referralCode?:string;
    salesFunnel?:string;
    referredBy?:string;
    currentOtp?:number
    deviceToken?:string
  }